import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
}

const SESSION_KEY = 'admin_session_token';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { toast } = useToast();

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = () => {
      const sessionToken = sessionStorage.getItem(SESSION_KEY);
      if (sessionToken) {
        // Session exists, user is authenticated
        setIsAuthenticated(true);
      }
      setIsCheckingAuth(false);
    };
    checkSession();
  }, []);

  // Fetch subscribers when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchSubscribers();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const { data, error } = await supabase.functions.invoke('admin-login', {
        body: { password },
      });


      if (error) {
        throw error;
      }

      if (data.success) {
        // Store session token in sessionStorage
        sessionStorage.setItem(SESSION_KEY, data.sessionToken);
        setIsAuthenticated(true);
        setPassword('');
        toast({
          title: 'Welcome!',
          description: 'Successfully logged in to admin dashboard.',
        });
      } else {
        setLoginError(data.error || 'Invalid password');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      setLoginError('Failed to authenticate. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    setSubscribers([]);
    toast({
      title: 'Logged out',
      description: 'You have been logged out successfully.',
    });
  };

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const sessionToken = sessionStorage.getItem(SESSION_KEY);
      const { data, error } = await supabase.functions.invoke('get-newsletter-subscribers', {
        headers: { 'x-admin-token': sessionToken || '' },
      });

      if (error) {
        throw error;
      }

      if (data.success) {
        setSubscribers(data.subscribers || []);
      } else {
        throw new Error(data.error || 'Failed to fetch subscribers');
      }
    } catch (error: any) {
      console.error('Error fetching subscribers:', error);
      toast({
        title: 'Error',
        description: 'Failed to load subscribers. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const sessionToken = sessionStorage.getItem(SESSION_KEY);
      const { data, error } = await supabase.functions.invoke('delete-newsletter-subscriber', {
        body: { id },
        headers: { 'x-admin-token': sessionToken || '' },
      });

      if (error) {
        throw error;
      }

      if (data.success) {
        setSubscribers(subscribers.filter((sub) => sub.id !== id));
        toast({
          title: 'Success',
          description: 'Subscriber deleted successfully.',
        });
      } else {
        throw new Error(data.error || 'Failed to delete subscriber');
      }
    } catch (error: any) {
      console.error('Error deleting subscriber:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete subscriber. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const exportToCSV = () => {
    if (subscribers.length === 0) {
      toast({
        title: 'No data',
        description: 'There are no subscribers to export.',
        variant: 'destructive',
      });
      return;
    }

    const headers = ['Email', 'Subscription Date'];
    const csvContent = [
      headers.join(','),
      ...subscribers.map((sub) => {
        const date = new Date(sub.subscribed_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
        return `"${sub.email}","${date}"`;
      }),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Success',
      description: 'Subscriber list exported successfully.',
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
            <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription className="text-blue-100">
              Enter your password to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  disabled={loginLoading}
                  autoFocus
                />
              </div>
              
              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {loginError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                disabled={loginLoading || !password}
              >
                {loginLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Verifying...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <a href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to website
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show admin dashboard if authenticated
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </a>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Samara Boss Coaching
              </span>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="text-gray-600 hover:text-red-600 hover:border-red-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">Newsletter Subscribers</CardTitle>
                <CardDescription className="text-blue-100 mt-1">
                  Manage your newsletter subscriber list
                </CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={fetchSubscribers}
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  disabled={loading}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refresh
                </Button>
                <Button
                  onClick={exportToCSV}
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  disabled={loading || subscribers.length === 0}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export CSV
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Stats Bar */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Subscribers</p>
                    <p className="text-2xl font-bold text-gray-800">{subscribers.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center gap-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  <p className="text-gray-500">Loading subscribers...</p>
                </div>
              </div>
            ) : subscribers.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No subscribers yet</h3>
                <p className="text-gray-500">When people subscribe to your newsletter, they'll appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold text-gray-700 w-12">#</TableHead>
                      <TableHead className="font-semibold text-gray-700">Email Address</TableHead>
                      <TableHead className="font-semibold text-gray-700">Subscription Date</TableHead>
                      <TableHead className="font-semibold text-gray-700 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers.map((subscriber, index) => (
                      <TableRow key={subscriber.id} className="hover:bg-gray-50 transition-colors">
                        <TableCell className="text-gray-500 font-medium">{index + 1}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white text-sm font-medium">
                              {subscriber.email.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium text-gray-900">{subscriber.email}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {formatDate(subscriber.subscribed_at)}
                        </TableCell>
                        <TableCell className="text-right">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                disabled={deletingId === subscriber.id}
                              >
                                {deletingId === subscriber.id ? (
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                                ) : (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                )}
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Subscriber</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to remove <strong>{subscriber.email}</strong> from your newsletter list? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(subscriber.id)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Admin Dashboard &middot; Samara Boss Coaching</p>
        </div>
      </main>
    </div>
  );
};

export default Admin;
