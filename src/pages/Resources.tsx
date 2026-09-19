import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Newspaper, Mic, Play, Radio } from 'lucide-react';
const pressItems = [{
  outlet: 'The Independent',
  title: 'The £3 miracle pill hailed as \u2018Ozempic for drinking\u2019',
  date: 'October 2024',
  excerpt: 'Explains why naltrexone is being talked about in the UK as an inexpensive, under-used option to reduce drinking; describes mechanisms, the Sinclair Method idea of taking it before drinking.',
  image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80',
  url: 'https://www.independent.co.uk/news/health/ozempic-alcohol-pill-naltrexone-drinking-b2629365.html'
}, {
  outlet: 'The Telegraph',
  title: 'I took a pill to help fix my drinking problem',
  date: 'September 2024',
  excerpt: 'Personal narrative and explainer by journalist Annabel Fenwick Elliott describing the Sinclair Method and how naltrexone was used to reduce drinking; discusses practicalities and cultural resistance.',
  image: '/images/resources-1.jpg',
  url: 'https://www.telegraph.co.uk/health-fitness/diet/alcohol/naltrexone-alcohol-pill/'
}, {

  outlet: 'Psychology Today',
  title: 'The Science Behind Recovery: Let\u2019s Talk About Naltrexone',
  date: 'April 2025',
  excerpt: 'Magazine-style explainer by Smita Das, MD, PhD, MPH, (Clinical Associate Professor at Stanford and VP of Psychiatry and Complex Care at Lyra Health) summarising how naltrexone blocks reward, its clinical uses (alcohol and opioid disorders), tolerability, and why it remains under-utilised; recommends greater clinician awareness.',
  image: '/images/resources-2.jpg',
  url: 'https://www.psychologytoday.com/gb/blog/the-science-behind-recovery/202504/the-science-behind-recovery-lets-talk-about-naltrexone'
}, {

  outlet: 'Psychology Today',
  title: 'Naltrexone Is the Ozempic for Alcoholism',
  date: 'May 2025',
  excerpt: 'Opinion piece by Mark S. Gold, M.D. framing naltrexone as a low-cost drug gaining renewed attention; argues for wider adoption while noting limitations.',
  image: '/images/resources-3.jpg',
  url: 'https://www.psychologytoday.com/gb/blog/addiction-outlook/202505/naltrexone-is-the-ozempic-for-alcoholism'
}];

const podcastItems = [{
  show: 'The Sober Curious Podcast',
  title: 'Life After TSM: Honest Reflections Beyond Alcohol Use Disorder',
  type: 'Podcast',
  date: 'February 2026',
  excerpt: 'A deep conversation about identity, freedom, and the tools that help women step confidently into alcohol-free living.',
  image: 'https://img.youtube.com/vi/5bT0lItBLzo/maxresdefault.jpg',
  url: 'https://www.youtube.com/watch?v=5bT0lItBLzo',
  icon: Mic
}, {
  show: 'Live on Instagram',
  title: 'Meet Coach Samara',
  type: 'Podcast',
  date: 'January 2026',
  excerpt: 'Samara answers the community\u2019s most asked questions about habit change, cravings, and long-term freedom.',
  image: 'https://img.youtube.com/vi/TbIzqUAr2JM/maxresdefault.jpg',
  url: 'https://www.youtube.com/watch?v=TbIzqUAr2JM',
  icon: Mic
}, {
  show: 'The Mindset Reset Show',
  title: 'Live Q&A: \u201CI Can Drink Whenever I Want... I Just Don\u2019t Want To\u201D \u2013 Life After TSM',
  type: 'Podcast',
  date: 'December 2025',
  excerpt: 'Samara unpacks the mindset shifts required to move past daily drinking routines and build a life you don\u2019t need to escape from.',
  image: 'https://img.youtube.com/vi/zQ2v1shV6o4/maxresdefault.jpg',
  url: 'https://www.youtube.com/watch?v=zQ2v1shV6o4',
  icon: Mic

}, {
  show: 'YouTube Live',
  title: 'Live Q&A: Permission to Drink? Mindset, Habits & Hitting Plateaus on TSM',
  type: 'Podcast',
  date: 'October 2025',
  excerpt: 'A replay of Samara\u2019s popular live coaching series covering rituals, routines, and reframes for alcohol-free mornings.',
  image: 'https://img.youtube.com/vi/nrW-NbDlKUw/maxresdefault.jpg',
  url: 'https://www.youtube.com/watch?v=nrW-NbDlKUw',
  icon: Mic
}];


const Resources: React.FC = () => {
  return <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4">
            Resources
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">
            Press, Podcasts &amp; Live Conversations
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A growing library of features, interviews, and live streams where Samara shares her
            story, science-backed strategies, and real talk on alcohol-free living.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#in-the-press">
              <Button variant="outline" className="rounded-full">
                <Newspaper className="w-4 h-4 mr-2" /> In The Press
              </Button>
            </a>
            <a href="#podcasts">
              <Button variant="outline" className="rounded-full">
                <Mic className="w-4 h-4 mr-2" /> Podcasts &amp; Live-Streams
              </Button>
            </a>
            <Link to="/">
              <Button className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* In The Press */}
      <section id="in-the-press" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-7 h-7 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">In The Press</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mb-12">
            Selected features and contributions in publications covering wellness, mindset, and the
            alcohol-free movement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {pressItems.map(item => <Card key={item.title} className="overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                      {item.outlet}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{item.excerpt}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Read article <ExternalLink className="w-4 h-4 ml-1.5" />
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Podcasts and Live-Streams */}
      <section id="podcasts" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Mic className="w-7 h-7 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Podcasts & Videos</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mb-12">
            Tune into conversations and live sessions where Samara dives deeper into coaching,
            community questions, and her own journey.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {podcastItems.map(item => {
            const Icon = item.icon;
            return <Card key={item.title} className="overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium text-gray-800 shadow">
                      <Icon className="w-4 h-4 text-green-600" />
                      {item.type}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{item.excerpt}</p>

                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-700 hover:text-green-800 font-medium">
                      Listen / Watch <ExternalLink className="w-4 h-4 ml-1.5" />
                    </a>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Resources;