import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Smartphone, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight, 
  CreditCard, 
  PiggyBank, 
  TrendingUp, 
  Briefcase, 
  Download,
  CheckCircle2,
  Calculator,
  Search,
  Globe,
  Lock
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      isScrolled ? "glass py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">NIC ASIA <span className="text-brand-red">BANK</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link to="/personal" className="hover:text-brand-red transition-colors">Personal</Link>
          <Link to="/business" className="hover:text-brand-red transition-colors">Business</Link>
          <Link to="/loans" className="hover:text-brand-red transition-colors">Loans</Link>
          <Link to="/digital" className="hover:text-brand-red transition-colors">Digital Banking</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden lg:block text-sm font-medium hover:text-brand-red transition-colors">Support</Link>
          <button className="btn-primary py-2 px-5 text-sm">Open Account</button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-xl">NIC ASIA</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-semibold">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/personal" onClick={() => setMobileMenuOpen(false)}>Personal Banking</Link>
              <Link to="/business" onClick={() => setMobileMenuOpen(false)}>Business Banking</Link>
              <Link to="/loans" onClick={() => setMobileMenuOpen(false)}>Loans</Link>
              <Link to="/digital" onClick={() => setMobileMenuOpen(false)}>Digital Banking</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Support</Link>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <button className="btn-primary w-full py-4 text-lg">Open Account</button>
              <button className="btn-secondary w-full py-4 text-lg">Login to iBanking</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-20 pb-10 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white font-bold">N</div>
          <span className="font-bold text-lg">NIC ASIA BANK</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Leading the digital banking revolution in Nepal. Providing secure, accessible, and innovative financial solutions for every citizen.
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer"><Globe className="w-4 h-4" /></div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer"><Smartphone className="w-4 h-4" /></div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><Link to="/personal" className="hover:text-white transition-colors">Savings Accounts</Link></li>
          <li><Link to="/loans" className="hover:text-white transition-colors">Home Loans</Link></li>
          <li><Link to="/business" className="hover:text-white transition-colors">SME Banking</Link></li>
          <li><Link to="/digital" className="hover:text-white transition-colors">Mobile Banking</Link></li>
          <li><Link to="/locator" className="hover:text-white transition-colors">Branch Locator</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Support</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Security Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Interest Rates</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Grievance Redressal</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Download App</h4>
        <p className="text-gray-400 text-sm mb-6">Experience banking on the go with our top-rated mobile app.</p>
        <div className="flex flex-col gap-3">
          <button className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 flex items-center gap-3 border border-white/10">
            <Download className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[10px] uppercase opacity-60">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </button>
          <button className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 flex items-center gap-3 border border-white/10">
            <Smartphone className="w-5 h-5" />
            <div className="text-left">
              <div className="text-[10px] uppercase opacity-60">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
      <p>© 2026 NIC ASIA Bank Ltd. All Rights Reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 bg-gradient-to-br from-brand-gray to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-brand-red text-xs font-bold mb-6">
              <TrendingUp className="w-3 h-3" />
              <span>NEPAL'S #1 DIGITAL BANK</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Banking that <span className="text-brand-red">Moves</span> with You.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Open a high-interest savings account in 5 minutes. No paperwork, no queues, just pure digital freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8">Open Account Now</button>
              <button className="btn-secondary text-lg px-8 flex items-center justify-center gap-2">
                Apply for Loan <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>NRB Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" />
                <span>Bank-grade Security</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Banking App" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 z-20 glass p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Interest Earned</div>
                  <div className="text-lg font-bold">Rs. 12,450.00</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">4M+</div>
              <div className="text-gray-500 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">350+</div>
              <div className="text-gray-500 font-medium">Branches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">100+</div>
              <div className="text-gray-500 font-medium">Digital Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-red mb-2">A+</div>
              <div className="text-gray-500 font-medium">Credit Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 px-4 md:px-8 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tailored Solutions for You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from a wide range of products designed to help you achieve your financial goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PiggyBank, title: "Savings", desc: "Up to 8.5% interest with daily compounding.", link: "/personal" },
              { icon: TrendingUp, title: "Loans", desc: "Instant approvals for home, auto, and personal needs.", link: "/loans" },
              { icon: CreditCard, title: "Cards", desc: "Cashback and rewards on every swipe.", link: "/personal" },
              { icon: Briefcase, title: "Business", desc: "Empowering SMEs with flexible credit lines.", link: "/business" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <Link to={item.link} className="text-brand-red font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Banking Promo */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-brand-dark rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/10 skew-x-12 translate-x-1/4"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 md:p-20 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Bank in Your <span className="text-brand-red">Pocket</span></h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Experience the most advanced mobile banking app in Nepal. Scan to pay, transfer instantly, and manage your wealth effortlessly.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Instant QR Payments at 1M+ Merchants",
                  "Zero-fee Interbank Transfers",
                  "Utility Bill Payments in 2 Taps",
                  "Fixed Deposit Opening from App"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">Download App</button>
                <button className="text-white font-bold flex items-center gap-2 hover:text-brand-red transition-colors">
                  Explore Features <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                alt="Mobile App" 
                className="w-64 md:w-80 rounded-[2.5rem] shadow-2xl border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Trusted by Millions</h2>
              <p className="text-gray-600">Real stories from our digital banking community.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-gray transition-colors"><ChevronRight className="w-6 h-6 rotate-180" /></button>
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-gray transition-colors"><ChevronRight className="w-6 h-6" /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Anish Sharma", role: "Software Engineer", text: "The account opening process was seamless. I didn't have to visit the branch even once. Truly digital!" },
              { name: "Priya Thapa", role: "SME Owner", text: "NIC Asia's business loan helped me expand my boutique during the festive season. The approval was incredibly fast." },
              { name: "Ramesh Karki", role: "Freelancer", text: "Best mobile app in Nepal. The UI is clean and the QR payment works everywhere, even in small tea shops." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-gray border border-gray-100">
                <div className="flex gap-1 text-brand-red mb-6">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-700 mb-8 italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 md:px-8 text-center bg-brand-red text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start your digital journey?</h2>
          <p className="text-xl text-white/80 mb-12">Join 4 million+ Nepalese who trust NIC ASIA Bank for their daily banking needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-red px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-gray transition-all shadow-xl">Open Account Now</button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">Find Nearest Branch</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const LoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [tenure, setTenure] = useState(15);
  const rate = 11.5;

  const emi = Math.round(
    (loanAmount * (rate / 1200) * Math.pow(1 + rate / 1200, tenure * 12)) /
    (Math.pow(1 + rate / 1200, tenure * 12) - 1)
  );

  return (
    <div className="pt-24">
      <section className="py-20 px-4 md:px-8 bg-brand-gray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Home Loans for Your <span className="text-brand-red">Dream House</span></h1>
            <p className="text-xl text-gray-600 mb-10">Low interest rates, flexible tenure, and fast processing. Turn your dream into reality today.</p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-brand-red font-bold text-2xl mb-1">11.5%*</div>
                <div className="text-gray-500 text-sm">Starting Interest</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-brand-red font-bold text-2xl mb-1">24 Hrs</div>
                <div className="text-gray-500 text-sm">Initial Approval</div>
              </div>
            </div>
            <button className="btn-primary text-lg w-full sm:w-auto">Apply Now</button>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-6 h-6 text-brand-red" />
              <h3 className="text-2xl font-bold">EMI Calculator</h3>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Loan Amount (Rs.)</label>
                  <span className="font-bold text-brand-red">{loanAmount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="100000" max="20000000" step="100000" 
                  value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-brand-red"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Tenure (Years)</label>
                  <span className="font-bold text-brand-red">{tenure} Years</span>
                </div>
                <input 
                  type="range" min="1" max="30" step="1" 
                  value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-brand-red"
                />
              </div>
              
              <div className="pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-gray-500 text-sm uppercase font-bold tracking-wider mb-2">Estimated Monthly EMI</div>
                  <div className="text-4xl font-bold text-brand-dark">Rs. {emi.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Eligibility & Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-red" /> Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {["Age between 21 to 65 years", "Salaried or Self-employed individuals", "Minimum monthly income of Rs. 30,000", "Good credit history"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-red" /> Required Documents
              </h3>
              <ul className="space-y-4">
                {["Citizenship Certificate", "Passport size photographs", "Salary certificate / Audit report", "Property ownership documents (Lalpurja)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const DigitalBankingPage = () => (
  <div className="pt-24">
    <section className="py-20 px-4 md:px-8 bg-brand-dark text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Banking at Your <span className="text-brand-red">Fingertips</span></h1>
        <p className="text-xl text-gray-400 mb-10">Join the digital revolution. Secure, fast, and available 24/7.</p>
        <div className="flex justify-center gap-4">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </section>
    
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Smartphone, title: "Mobile Banking", desc: "Our award-winning app for all your daily needs." },
          { icon: Globe, title: "Internet Banking", desc: "Powerful web platform for complex transactions." },
          { icon: Lock, title: "Security First", desc: "Multi-factor authentication and real-time alerts." },
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[2rem] bg-brand-gray text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-red shadow-sm">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const BusinessBankingPage = () => (
  <div className="pt-24">
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-brand-dark to-gray-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">Empowering Nepal's <span className="text-brand-red">Entrepreneurs</span></h1>
          <p className="text-xl text-gray-400 mb-10">Specialized banking solutions for SMEs and Corporate houses. Let's grow together.</p>
          <button className="btn-primary">Talk to an Expert</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="font-bold text-lg mb-2">SME Loans</h3>
            <p className="text-sm text-gray-400">Flexible credit lines for your business growth.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="font-bold text-lg mb-2">Trade Finance</h3>
            <p className="text-sm text-gray-400">LC, Guarantee, and Export/Import solutions.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="font-bold text-lg mb-2">Cash Management</h3>
            <p className="text-sm text-gray-400">Optimize your liquidity with our tools.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="font-bold text-lg mb-2">Corporate Cards</h3>
            <p className="text-sm text-gray-400">Manage business expenses efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => (
  <div className="pt-24">
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-bold mb-8">How can we help?</h1>
          <p className="text-xl text-gray-600 mb-12">Our dedicated support team is available 24/7 to assist you with any queries.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red shrink-0"><Phone className="w-6 h-6" /></div>
              <div>
                <div className="font-bold text-lg">Call Us</div>
                <div className="text-gray-600">Toll Free: 1660-01-77777</div>
                <div className="text-gray-600">Phone: +977-1-5111177</div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red shrink-0"><Mail className="w-6 h-6" /></div>
              <div>
                <div className="font-bold text-lg">Email Us</div>
                <div className="text-gray-600">feedback@nicasiabank.com</div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red shrink-0"><MapPin className="w-6 h-6" /></div>
              <div>
                <div className="font-bold text-lg">Visit Us</div>
                <div className="text-gray-600">Corporate Office: Thapathali, Kathmandu, Nepal</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-gray p-10 rounded-[2.5rem]">
          <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Subject</label>
              <select className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none bg-white">
                <option>General Inquiry</option>
                <option>Account Opening</option>
                <option>Loan Application</option>
                <option>Digital Banking Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none h-32" placeholder="How can we help you?"></textarea>
            </div>
            <button className="btn-primary w-full py-4 text-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/personal" element={<DigitalBankingPage />} /> {/* Placeholder for Personal */}
            <Route path="/business" element={<BusinessBankingPage />} />
            <Route path="/loans" element={<LoanPage />} />
            <Route path="/digital" element={<DigitalBankingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky CTA for Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-40 flex gap-3">
          <button className="btn-primary flex-grow py-3 text-sm">Open Account</button>
          <button className="btn-secondary flex-grow py-3 text-sm">Apply Loan</button>
        </div>
      </div>
    </Router>
  );
}
