import React, { useState, useEffect } from 'react';

const PulseLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    plan: '',
    goal: ''
  });

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (plan = '') => {
    setFormData(prev => ({ ...prev, plan }));
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans antialiased overflow-x-hidden bg-[#0B0F1A] text-white">
      {/* --- NAVBAR --- */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F1A]/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold flex items-center gap-2">
              PULSE
              <svg className="w-8 h-8 text-[#C6FF00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </a>
            <nav className="hidden md:flex space-x-10">
              <a href="#services" className="text-sm font-medium hover:text-[#C6FF00] transition-colors">Programs</a>
              <a href="#facilities" className="text-sm font-medium text-gray-300 hover:text-[#C6FF00] transition-colors">Facilities</a>
              <a href="#trainers" className="text-sm font-medium text-gray-300 hover:text-[#C6FF00] transition-colors">Trainers</a>
              <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-[#C6FF00] transition-colors">Pricing</a>
            </nav>
            <div className="hidden md:block">
              <button onClick={() => handleOpenModal()} className="bg-[#C6FF00] text-black px-6 py-2 rounded font-bold text-sm hover:scale-105 hover:shadow-[0_0_15px_#C6FF00] transition-all">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center bg-[#0B0F1A] overflow-hidden">
        {/* Right Image (Immersive) */}
        <div className="absolute top-0 right-[-5%] w-full lg:w-[60%] h-full z-0 animate-[fadeInRight_1s_ease-out_forwards]">
          <img 
            src="/athlete.png" 
            alt="Hero Athlete" 
            className="w-full h-full object-cover object-center contrast-[1.1] brightness-90 hover:scale-[1.03] transition-transform duration-[2000ms]"
          />
          {/* Blend Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent"></div>
        </div>

        {/* Left Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="max-w-xl animate-[fadeInUp_1s_ease-out_forwards]">
            <h1 className="text-5xl lg:text-7xl font-bold uppercase leading-[1.05] mb-6 tracking-tight">
              Train Hard.<br/>
              Stay Consistent.<br/>
              <span className="text-[#C6FF00]">Become Unstoppable.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-lg">
              Expert coaching, proven transformation programs, and a community that pushes you forward. Step into the elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => handleOpenModal()} className="bg-[#C6FF00] text-black px-10 py-4 rounded font-bold hover:scale-105 hover:shadow-[0_0_20px_#C6FF00] transition-all flex items-center justify-center gap-2">
                START FREE TRIAL
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a href="#services" className="border border-gray-600 px-8 py-4 rounded font-bold text-center hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all">
                EXPLORE PROGRAMS
              </a>
            </div>
            
            {/* Trust Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-800/80">
              <div>
                <p className="font-bold text-2xl leading-none">5,000+</p>
                <p className="text-sm text-gray-400 mt-1">Members</p>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-2xl leading-none">4.8</p>
                  <svg className="w-4 h-4 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400 mt-1">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. STATS BAR --- */}
      <section className="bg-[#111827] py-10 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div>
              <p className="text-3xl font-bold text-[#C6FF00]">20+</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Elite Trainers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C6FF00]">24/7</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Unlimited Access</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C6FF00]">3</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Prime Locations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C6FF00]">98%</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Goal Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION (CAROUSEL) --- */}
      <section id="services" className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-bold uppercase">Signature Programs</h2>
        </div>
        {/* Horizontal Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-6 lg:px-8 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {[
            { img: '/personal-training.png', title: 'Personal Training', desc: '1-on-1 coaching customized to your goals.' },
            { img: '/strength-training.png', title: 'Strength Training', desc: 'Build power and endurance with heavy lifting.' },
            { img: '/crossfit.png', title: 'CrossFit', desc: 'High-intensity functional movements.' },
            { img: '/cardio-programs.png', title: 'Cardio Programs', desc: 'Maximize stamina and fat loss.' }
          ].map((service, idx) => (
            <div key={idx} className="relative min-w-[300px] md:min-w-[400px] h-[500px] rounded-lg overflow-hidden snap-center group cursor-pointer border border-transparent hover:border-[#C6FF00]/50 transition-colors">
              <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{service.desc}</p>
                <button className="text-[#C6FF00] font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. FACILITY SECTION (ASYMMETRICAL) --- */}
      <section id="facilities" className="py-24 bg-[#0a0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-lg overflow-hidden group">
              <img src="/gym-floor.png" alt="World Class Facility" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold uppercase mb-6">World-Class Facilities</h2>
              <p className="text-gray-400 text-lg mb-10">Experience fitness in a high-performance environment engineered for results. Every square foot is optimized for your success.</p>
              
              <ul className="space-y-6 mb-12">
                {[
                  { title: 'Cardio Zone', desc: 'Latest treadmills, stairmasters, and rowers.' },
                  { title: 'Fuel Up Station', desc: 'Pre and post-workout protein shakes & supplements.' },
                  { title: 'Steam Bath', desc: 'Detox and recover in our premium steam rooms.' },
                  { title: 'Boxing Zone', desc: 'Heavy bags and speed bags for striking work.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-[#C6FF00]/10 p-2 rounded-full">
                      <svg className="w-5 h-5 text-[#C6FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleOpenModal()} className="border border-[#C6FF00] text-[#C6FF00] px-8 py-3 rounded font-bold hover:bg-[#C6FF00] hover:text-black transition-all">
                BOOK A TOUR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. EXPERIENCE SECTION (GRID) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase">The Pulse Experience</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Not just a gym. It's a lifestyle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: '/yoga.png', title: 'Recovery & Flexibility', text: 'Enhance mobility and prevent injury.' },
              { img: '/nutrition.png', title: 'Nutrition Guidance', text: 'Custom meal plans for your body type.' },
              { img: '/community.png', title: 'Strong Community', text: 'Surround yourself with driven individuals.' },
              { img: '/merch.png', title: 'Exclusive Merch', text: 'Look the part with PULSE apparel.' }
            ].map((item, idx) => (
              <div key={idx} className="relative h-80 rounded-lg overflow-hidden group">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. TRAINERS SECTION (MINIMAL ROW) --- */}
      <section id="trainers" className="py-24 bg-[#0a0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold uppercase mb-4">Elite Coaches</h2>
              <p className="text-gray-400">Learn from the best in the industry.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Arjun Das', role: 'Head Coach', exp: '10+ Years', desc: 'Specializes in hypertrophy and strength conditioning.', img: '/trainer-1.png' },
              { name: 'Rahul Nair', role: 'CrossFit Expert', exp: '8+ Years', desc: 'Former state athlete turned functional fitness pro.', img: '/trainer-2.png' },
              { name: 'Kiran Kumar', role: 'Boxing Coach', exp: '12+ Years', desc: 'Master the art of striking and defensive movement.', img: '/trainer-3.png' },
              { name: 'Vishnu Dev', role: 'Nutritionist & PT', exp: '7+ Years', desc: 'Complete body transformation specialist.', img: '/trainer-4.png' }
            ].map((trainer, idx) => (
              <div key={idx} className="group">
                <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded">
                  <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="text-[#C6FF00] text-sm font-bold uppercase tracking-wider my-1">{trainer.role}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-gray-600"></span> {trainer.exp}
                </div>
                <p className="text-sm text-gray-500">{trainer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. PRICING SECTION --- */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold uppercase mb-4">Choose Your Plan</h2>
              <p className="text-gray-400">No hidden fees. Just results.</p>
            </div>
            {/* Toggle */}
            <div className="flex bg-[#111827] rounded p-1 border border-gray-800">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded text-sm font-bold transition-colors ${!isYearly ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded text-sm font-bold transition-colors ${isYearly ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="border border-gray-800 rounded-lg p-8 flex flex-col bg-[#0a0d14]">
              <h3 className="text-xl font-bold mb-2">Basic Access</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">{isYearly ? '₹9,590' : '₹999'}</span>
                <span className="text-[#C6FF00] text-sm mb-1">{isYearly ? '/year' : '/month'}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Gym floor access', 'Standard equipment', 'Locker room access'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#C6FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleOpenModal('Basic')} className="w-full border border-gray-600 py-3 rounded font-bold hover:border-white transition-colors">SELECT BASIC</button>
            </div>

            {/* Pro */}
            <div className="border border-[#C6FF00] rounded-lg p-8 flex flex-col relative bg-[#111827] transform md:-translate-y-4 shadow-[0_0_30px_rgba(198,255,0,0.05)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C6FF00] text-black text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Pro Performance</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">{isYearly ? '₹19,190' : '₹1,999'}</span>
                <span className="text-[#C6FF00] text-sm mb-1">{isYearly ? '/year' : '/month'}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Everything in Basic', 'Group fitness classes', 'Access to Cardio & Boxing zones', '1 Personal Training session/mo'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#C6FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleOpenModal('Pro')} className="w-full bg-[#C6FF00] text-black py-3 rounded font-bold hover:brightness-110 transition-colors">SELECT PRO</button>
            </div>

            {/* Elite */}
            <div className="border border-gray-800 rounded-lg p-8 flex flex-col bg-[#0a0d14]">
              <h3 className="text-xl font-bold mb-2">Elite Coaching</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">{isYearly ? '₹33,590' : '₹3,499'}</span>
                <span className="text-[#C6FF00] text-sm mb-1">{isYearly ? '/year' : '/month'}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Everything in Pro', 'Unlimited Personal Training', 'Nutrition & Meal Plans', 'Priority Booking'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#C6FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleOpenModal('Elite')} className="w-full border border-gray-600 py-3 rounded font-bold hover:border-white transition-colors">SELECT ELITE</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA & INLINE FORM --- */}
      <section className="bg-[#C6FF00] py-20 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">Start Today. Don’t Wait.</h2>
          <p className="text-lg font-medium mb-10 opacity-80">Join the thousands who have transformed their lives at PULSE.</p>
          
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              handleOpenModal(); 
            }} 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="px-6 py-4 rounded bg-black/10 border border-black/20 text-black placeholder-black/60 focus:outline-none focus:border-black font-medium min-w-[200px]"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required
              className="px-6 py-4 rounded bg-black/10 border border-black/20 text-black placeholder-black/60 focus:outline-none focus:border-black font-medium min-w-[200px]"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
            <button type="submit" className="bg-black text-white px-10 py-4 rounded font-bold hover:bg-gray-900 transition-colors">
              GET STARTED
            </button>
          </form>
        </div>
      </section>

      {/* --- 9. FOOTER --- */}
      <footer className="bg-[#0B0F1A] py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold flex items-center gap-2">
            PULSE
            <svg className="w-6 h-6 text-[#C6FF00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#C6FF00] hover:text-black transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#C6FF00] hover:text-black transition-colors"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </footer>

      {/* --- 10. MODAL FORM (STEP 2) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-[#111827] w-full max-w-md p-8 rounded-lg border border-gray-800 shadow-2xl animate-[fadeInUp_0.3s_ease-out_forwards]">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <h2 className="text-2xl font-bold uppercase mb-2">Complete Your Profile</h2>
            <p className="text-gray-400 text-sm mb-6">Let us know your goals so we can set you up for success.</p>
            
            <form onSubmit={e => { e.preventDefault(); alert('Success! Welcome to PULSE.'); closeModal(); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0a0d14] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#C6FF00]" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Phone</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#0a0d14] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#C6FF00]" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Location</label>
                <input type="text" placeholder="City or Neighborhood" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-[#0a0d14] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#C6FF00]" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Plan</label>
                  <select value={formData.plan} onChange={e => setFormData({...formData, plan: e.target.value})} className="w-full bg-[#0a0d14] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#C6FF00]">
                    <option value="">Select Plan</option>
                    <option value="Basic">Basic Access</option>
                    <option value="Pro">Pro Performance</option>
                    <option value="Elite">Elite Coaching</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Primary Goal</label>
                  <select value={formData.goal} onChange={e => setFormData({...formData, goal: e.target.value})} className="w-full bg-[#0a0d14] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[#C6FF00]" required>
                    <option value="" disabled>Select Goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Boxing">Boxing</option>
                    <option value="Fitness">General Fitness</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-[#C6FF00] text-black font-bold py-4 rounded mt-4 hover:brightness-110 transition-colors uppercase tracking-wide">
                Confirm & Join
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tailwind Animations injected for completeness */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
};

export default PulseLandingPage;
