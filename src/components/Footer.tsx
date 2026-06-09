import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  Sparkles, 
  Linkedin, 
  MessageCircle, 
  MapPin, 
  CheckCircle, 
  FileText, 
  ExternalLink,
  GraduationCap,
  Building2,
  Briefcase
} from "lucide-react";

interface FooterProps {
  preFilledQuote: {
    type: string;
    tierName: string;
    features: string[];
    total: number;
  } | null;
}

export default function Footer({ preFilledQuote }: FooterProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync pre-filled quote stats into message box automatically
  useEffect(() => {
    if (preFilledQuote) {
      setFormData(prev => ({
        ...prev,
        message: `Hi Stefan!\nI just configured a tailored package using your layout configurator:\n- Specialty Focus: ${preFilledQuote.type}\n- Selection: ${preFilledQuote.tierName}\n- Est. Budget Investment: ₦${preFilledQuote.total.toLocaleString()}\n\nLet's schedule a session to discuss these details!`
      }));
    }
  }, [preFilledQuote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Formulate a clean mailto URL
    const mailtoUrl = `mailto:stefanojietu@gmail.com?subject=${encodeURIComponent(
      `Design Commission Brief - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Stefan,\n\nI would like to initiate a design commission.\n\nSender details:\n- Name: ${formData.name}\n- Contact Email: ${formData.email}\n\nClient Brief & Specifications:\n${formData.message}\n\n--\nSubmitted via Stefan's Portfolio Configurator`
    )}`;

    // Attempt direct redirect
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn("Mailto redirect may be blocked inside sandbox container:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  return (
    <footer id="designer" className="pt-24 pb-16 bg-[#09090b] text-zinc-100 px-4 md:px-6 relative overflow-hidden border-t border-zinc-900">
      
      {/* Background ambient lighting blobs */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-zinc-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-zinc-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Block layout */}
        <div id="designer-profile-card" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-zinc-900 pb-16">
          
          {/* Left Column: Stefan Ojietu Biography Card (5 cols) */}
          <div id="stefan-biography-block" className="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl space-y-6 shadow-xl">
            
            <div className="space-y-4">
              <div id="stefan-section-meta" className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
                <span>ABOUT THE DESIGNER</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white leading-none">
                Stefan Ojietu
              </h2>
              <div id="stefan-profile-profession" className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-850 w-fit">
                Web Designer & Layout Creator
              </div>
            </div>

            {/* Picture Container for Stefan Ojietu */}
            <div id="stefan-portrait-frame" className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 group p-1.5">
              <img
                src="https://pbs.twimg.com/media/HKXkotTXgAAZOA7?format=jpg&name=large"
                alt="Stefan Ojietu portrait - Professional web designer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Portrait image without overlay badge */}
            </div>

            <div className="space-y-4 max-w-sm text-zinc-400 text-xs sm:text-sm leading-relaxed">
              <p>
                I am a professional, independent web designer with a passion for architectural alignment, Swiss-inspired typographic systems, and frictionless conversion rate optimization.
              </p>
              <p>
                My projects empower educational entities to publish bulletproof news bulletins, luxury agencies to frame masterwork real estate listings, and individual specialists to manifest their strategic brands.
              </p>
            </div>

            {/* Location tag / Social indexes */}
            <div className="space-y-3 pt-2">
              <div id="stefan-location-indicator" className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                <MapPin className="h-4 w-4 text-zinc-400" />
                <span>Operating globally (Remote Integration)</span>
              </div>
              
              <div id="stefan-social-pillbox" className="flex flex-wrap gap-2.5 pt-1">
                <a 
                  id="link-stefan-linkedin"
                  href="https://www.linkedin.com/in/stefan-ojietu-146365378/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-950 border border-zinc-850 px-3 py-2 rounded-xl hover:bg-zinc-800 hover:text-white transition-all cursor-pointer shadow-sm"
                >
                  <Linkedin className="h-3.5 w-3.5 text-zinc-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-2.5 w-2.5 text-zinc-500" />
                </a>
                <a 
                  id="link-stefan-whatsapp"
                  href="https://wa.me/2348064763992" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-950 border border-zinc-850 px-3 py-2 rounded-xl hover:bg-zinc-800 hover:text-white transition-all cursor-pointer shadow-sm"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-zinc-400" />
                  <span>WhatsApp</span>
                  <ExternalLink className="h-2.5 w-2.5 text-zinc-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Contact & Consultation Intake (7 cols) */}
          <div id="stefan-contract-block" className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Initiate a Commission
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Fill the fields below to submit your design brief. I will review and reply within 12 standard business hours with custom draft options.
              </p>
            </div>

            {/* Banner showing prefilled data alert */}
            {preFilledQuote && (
              <motion.div
                id="prefill-quote-alert"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-950 border border-dashed border-zinc-800 p-4 rounded-xl flex items-start gap-3"
              >
                <div className="h-6 w-6 rounded-full bg-white text-zinc-950 flex items-center justify-center font-mono text-[10px] font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-display">
                    Calculator specs pre-filled successfully!
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1 leading-normal">
                    {preFilledQuote.type} — {preFilledQuote.tierName}. Investment plan of ₦{preFilledQuote.total.toLocaleString()} pre-selected and copied to your design brief below.
                  </div>
                </div>
              </motion.div>
            )}

            {/* Core HTML form with specific unique ids */}
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-650 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-700 focus:bg-zinc-900 transition-all font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-650 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-700 focus:bg-zinc-900 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline mb-1">
                  <label htmlFor="contact-message" className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Brief Design Requirements
                  </label>
                  <span className="text-[9px] text-zinc-600 font-mono">
                    Include site targets, custom modules or ideas
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the academy, building project, or creative showcase you'd like to launch..."
                  className="w-full bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-650 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-700 focus:bg-zinc-900 transition-all font-sans leading-relaxed resize-none font-mono text-xs"
                />
              </div>

              {/* Submitting Actions */}
              <div id="form-actions-bar" className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[10px] text-zinc-500 leading-normal text-center sm:text-left">
                  * By submitting, you agree to receive digital design proposals directly to the email specified.
                </p>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-zinc-950 font-extrabold text-xs px-6 py-3.5 rounded-xl hover:bg-zinc-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-1.5">
                      <svg className="animate-spin h-3.5 w-3.5 text-zinc-950" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting...</span>
                    </span>
                  ) : submitSuccess ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-4.5 w-4.5 text-emerald-600 stroke-[3]" />
                      <span>Inquiry Logged!</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 font-bold">
                      <span>Send Design Brief</span>
                      <Send className="h-3.5 w-3.5" />
                    </span>
                  )}
                </button>
              </div>

            </form>

            {/* Clean success card reveal */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  id="submit-success-dialog"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-emerald-950/45 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-4 shadow-lg backdrop-blur-sm"
                >
                  <div className="flex justify-center">
                    <div className="h-10 w-10 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-bold font-display text-sm">
                      Brief Formulated Successfully!
                    </p>
                    <p className="text-zinc-400 text-xs mt-1.5 max-w-md mx-auto leading-relaxed">
                      Your custom design specifications are compiled. If your email application did not launch automatically, click the action button below to transmit your brief directly to stefanojietu@gmail.com.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center pt-2">
                    <a
                      id="launch-email-fallback-btn"
                      href={`mailto:stefanojietu@gmail.com?subject=${encodeURIComponent(
                        `Design Commission Brief - ${formData.name}`
                      )}&body=${encodeURIComponent(
                        `Hello Stefan,\n\nI would like to initiate a design commission.\n\nSender details:\n- Name: ${formData.name}\n- Contact Email: ${formData.email}\n\nClient Brief & Specifications:\n${formData.message}\n\n--\nSubmitted via Stefan's Portfolio Configurator`
                      )}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-450 text-zinc-950 text-xs font-black rounded-lg transition-colors cursor-pointer"
                    >
                      <Send className="h-3 w-3" />
                      <span>Launch External Mail Client</span>
                    </a>
                    <button 
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="px-4 py-2 border border-zinc-800 text-zinc-400 hover:text-white rounded-lg text-xs font-semibold cursor-pointer"
                    >
                      Reset & Create New Brief
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Outer footer credit blocks */}
        <div id="footer-copyright-rail" className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-600 font-mono gap-4">
          <div className="flex items-center gap-4">
            <span>© 2026 Stefan Ojietu. All architectural copyrights reserved.</span>
          </div>
          <div className="flex gap-4">
            <span className="text-zinc-650 uppercase">Bento Grid Config v1.0.3</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
