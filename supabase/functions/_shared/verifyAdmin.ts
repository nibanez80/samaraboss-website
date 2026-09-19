import { createClient } from "jsr:@supabase/supabase-js@2";

// Checks the x-admin-token header against the admin_sessions table.
// Returns true if the token exists and hasn't expired.
export async function verifyAdminToken(req: Request): Promise<boolean> {
  const token = req.headers.get("x-admin-token");
  if (!token) return false;

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { data, error } = await supabase
    .from("admin_sessions")
    .select("expires_at")
    .eq("token", token)
    .maybeSingle();

  if (error || !data) return false;

  return new Date(data.expires_at).getTime() > Date.now();
}
