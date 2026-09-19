import React from 'react';
const Biography = () => {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">About Your Coach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to guiding you through your transformation with compassion and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Coach Photo and Bio */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img src="/images/biography-photo.jpg" alt="Samara Boss Coach" className="w-48 h-48 rounded-full object-cover shadow-lg" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The New Standard of Recovery</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-left">Samara knows this path because she’s walked it.
After 27 years of alcohol dependence, she became a living success story of the Sinclair Method—transforming not just her drinking, but her entire relationship with herself.

Through the Sinclair Method, she gently unwound alcohol dependence alongside binge eating, smoking/vaping, and cocaine use—by working with her brain, not against it.

Today, as a certified behavioral & alcohol recovery coach and AADP board-certified holistic health practitioner, she blends science with soul.

Samara is deeply curious (and yes… she loves to nerd out 🤓). Her work weaves together modern brain science, behavioral psychology, and evidence-based alcohol recovery with powerful inner work—like self-compassion, nervous system regulation, somatic healing, and reconnecting with your deeper sense of meaning.

At the core of her approach is this: real, lasting change happens when we understand the brain, meet ourselves with compassion, and gently retrain our patterns over time.

Stop fighting. Start rewiring.</p>
                <p className="text-gray-600 leading-relaxed"></p>
              </div>
            </div>
          </div>

          {/* TSM Video Testimonial */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              The Sinclair Method: A Proven Approach
            </h3>
            
            {/* YouTube Video Embed */}
            <div className="relative rounded-xl overflow-hidden mb-6 shadow-lg" style={{
            aspectRatio: '16/9'
          }}>
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/hGxNLnJmWkc" title="The Sinclair Method Testimonial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>


            <p className="text-gray-600 leading-relaxed text-center">
              Learn about The Sinclair Method and how it has transformed lives. This evidence-based approach offers hope and practical solutions for those seeking freedom from alcohol dependency.
            </p>
          </div>
        </div>

        {/* My Coaching Style Section */}
        <div className="mt-20 bg-gradient-to-br from-green-50 via-blue-50 to-green-50 rounded-3xl p-10 md:p-16 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              My Coaching Style
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-2xl font-medium text-gray-800 mb-6">Hi there, I'm Samara!</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                In 2021, I found freedom from alcohol use disorder through the Sinclair Method, and it completely changed my life. Today, it's my mission to help others experience that same gift of freedom.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                I create a warm, supportive, judgment-free space where we tackle your questions, challenges, and wins together. Coaching is an investment— I work hard for you in each session — actively listening in an effort to empower you to create real, lasting change through self compassion.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-8 shadow-md border-l-4 border-blue-500">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                The Samara Guarantee
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                If you're responding to the medication — even subtly — you are a candidate for extinction. I'm committed to helping you define, refine and achieve your goals as you reach toward what you truly want— to reclaim your life with self-trust, confidence and clarity by having a peaceful, healthy relationship with alcohol.
              </p>
            </div>
          </div>
        </div>

        {/* A Purposeful 3-Phase Journey to Freedom from Alcohol */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 rounded-3xl p-10 md:p-16 shadow-xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 mb-6 shadow-sm">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 tracking-wide">The Journey</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-800 mb-4">
              A Purposeful 3-Phase Journey
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              to Freedom from Alcohol
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {/* Phase 1 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-blue-400">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center font-semibold text-lg shadow-md">
                  1
                </div>
                <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Phase One</span>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">The Rewiring Begins</h4>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>You're learning the ropes of The Sinclair Method—and more importantly, how to work <em>with</em> it.</p>
                <p>No perfection needed. It's about consistency. Taking naltrexone before you drink, staying compliant, and starting to be more present with your drinking behavior without judgement.</p>
                <p className="font-medium text-gray-700">Your patterns. Your triggers. Your habits.</p>
                <p>At first, it might feel subtle… but something miraculous is happening beneath the surface. You're laying the foundation for real change. Keep going.</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-green-400">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-semibold text-lg shadow-md">
                  2
                </div>
                <span className="text-xs font-semibold text-green-600 tracking-widest uppercase">Phase Two</span>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Meeting the Medication Halfway</h4>
              <p className="text-sm italic text-gray-500 mb-4">(Habit Change)</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>This is the heart of the journey—and yes, it can feel unfamiliar at times.</p>
                <p>As the medication begins to quiet alcohol's pull, <em>you</em> step in. This is where you start meeting the medication halfway.</p>
                <p>You begin drinking more mindfully. You experiment with alcohol-free days. You build new ways to cope, relax, and enjoy your life.</p>
                <p>You'll likely see progress… and also bumps in the road. Plateaus. Resistance. Old habits trying to hang on.</p>
                <p className="font-medium text-gray-700">Nothing has gone wrong. This <em>is</em> the work. And every step forward compounds.</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-amber-400">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center font-semibold text-lg shadow-md">
                  3
                </div>
                <span className="text-xs font-semibold text-amber-600 tracking-widest uppercase">Phase Three</span>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">The Freedom Phase</h4>
              <p className="text-sm italic text-gray-500 mb-4">(Extinction)</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>This is where things start to <em>feel</em>… different. Lighter.</p>
                <p>The cravings that once felt loud and constant? They quiet down—or disappear altogether.</p>
                <p>You feel more in control. More free. Alcohol starts to take up less space in your mind—and your life.</p>
                <p>Now the focus shifts to maintaining that freedom. Strengthening your new habits. And deciding, from a place of clarity, what role alcohol gets to have (if any) moving forward.</p>
                <p className="font-medium text-gray-700">This isn't just change… it's transformation.</p>
              </div>
            </div>
          </div>

          {/* Trusting the Process */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-10 md:p-12 shadow-lg border border-blue-100/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 mb-5">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">Trusting the Process</h4>
              </div>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                <p>This process is gradual—and that's what makes it <em>last</em>.</p>
                <p>You're not forcing change. You're rewiring your brain, one extinction session at a time.</p>
                <p className="text-xl font-medium text-gray-800">Stay consistent. Stay curious. Stay <em>in</em> it.</p>
                <p className="flex items-center justify-center gap-2 pt-4 text-gray-800 font-medium">
                  Your relationship with alcohol <em>can</em> change — you're already on your way.
                  <svg className="w-6 h-6 text-amber-500 inline-block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Focus Areas Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 text-center">Focus Areas</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Core pillars of your recovery journey — each one designed to empower lasting change
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: 'Neuroplasticity',
            description: "The brain's adaptive superpower to rewire in response to learning",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>,
            gradient: 'from-violet-50 to-blue-50',
            accent: 'bg-violet-500'
          }, {
            title: 'Recovery Nutrition',
            description: 'Nourish your body to naturally reduce alcohol cravings',
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>,
            gradient: 'from-green-50 to-emerald-50',
            accent: 'bg-green-500'
          }, {
            title: 'The Mindful Drinking Technique',
            description: 'Explore your habits with gentle awareness',
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>,
            gradient: 'from-sky-50 to-cyan-50',
            accent: 'bg-sky-500'
          }, {
            title: 'Coping Skill Building',
            description: "Build healthy ways of dealing with life's ups and downs",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>,
            gradient: 'from-amber-50 to-orange-50',
            accent: 'bg-amber-500'
          }, {
            title: 'Relapse Proof Your Future',
            description: 'Learn the skills to never relapse again',
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>,
            gradient: 'from-rose-50 to-pink-50',
            accent: 'bg-rose-500'
          }, {
            title: 'The Golden Rule of TSM',
            description: 'Stay consistent with medication adherence',
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>,
            gradient: 'from-blue-50 to-indigo-50',
            accent: 'bg-blue-500'
          }].map((area, index) => <div key={index} className={`group relative bg-gradient-to-br ${area.gradient} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                {/* Accent top bar */}
                <div className={`h-1.5 ${area.accent} w-full`} />
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${area.accent} bg-opacity-10 text-gray-700 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </div>)}
          </div>
        </div>


      </div>

    </section>;
};
export default Biography;