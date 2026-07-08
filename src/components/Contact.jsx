import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactDetails = [
    {
      icon: <Mail className="text-brand-blue" size={20} />,
      label: "Email Address",
      value: "sachinsuresh@example.com",
      link: "mailto:sachinsuresh@example.com"
    },
    {
      icon: <Linkedin className="text-brand-purple" size={20} />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/sachin-suresh",
      link: "https://linkedin.com"
    },
    {
      icon: <Github className="text-brand-pink" size={20} />,
      label: "GitHub Handle",
      value: "github.com/sachin-suresh",
      link: "https://github.com"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Get In <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display tracking-tight">
              Let's build something amazing together!
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              I am open to discussions regarding software engineering roles, full-stack internships, and technical collaborations. Reach out to me directly or use the contact form.
            </p>

            <div className="space-y-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 bg-[#0d1127]/10 flex items-center space-x-4 cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-200">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#0d1127]/25 relative min-h-[460px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center"
                  >
                    <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-6 border border-emerald-500/20">
                      <CheckCircle2 size={48} className="animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 font-display">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
                      Thank you for reaching out. I'll review your inquiry and get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white text-sm font-semibold transition"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'sending'}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all ${
                            errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-brand-blue/30'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-500 flex items-center space-x-1">
                            <AlertCircle size={10} />
                            <span>{errors.name}</span>
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'sending'}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all ${
                            errors.email ? 'border-red-500/50' : 'border-white/5 focus:border-brand-blue/30'
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 flex items-center space-x-1">
                            <AlertCircle size={10} />
                            <span>{errors.email}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all ${
                          errors.subject ? 'border-red-500/50' : 'border-white/5 focus:border-brand-blue/30'
                        }`}
                        placeholder="Project discussion, Job opening..."
                      />
                      {errors.subject && (
                        <span className="text-[10px] text-red-500 flex items-center space-x-1">
                          <AlertCircle size={10} />
                          <span>{errors.subject}</span>
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all resize-none ${
                          errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-brand-blue/30'
                        }`}
                        placeholder="Write your message here..."
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 flex items-center space-x-1">
                          <AlertCircle size={10} />
                          <span>{errors.message}</span>
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold shadow-md shadow-brand-blue/20 hover:shadow-brand-purple/35 hover:scale-[1.01] active:scale-[0.99] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
