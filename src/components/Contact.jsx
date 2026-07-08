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
      tempErrors.email = "Email is invalid.";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactDetails = [
    {
      icon: <Mail className="text-premium-teal" size={18} />,
      label: "Direct Mail",
      value: "sachinsuresh.1311@gmail.com",
      link: "mailto:sachinsuresh.1311@gmail.com"
    },
    {
      icon: <Linkedin className="text-premium-teal" size={18} />,
      label: "LinkedIn Connect",
      value: "linkedin.com/in/sachin-suresh-2391922a8",
      link: "https://www.linkedin.com/in/sachin-suresh-2391922a8/"
    },
    {
      icon: <Github className="text-premium-teal" size={18} />,
      label: "GitHub Repositories",
      value: "github.com/Sachu013",
      link: "https://github.com/Sachu013"
    }
  ];

  return (
    <section id="contact" className="py-32 relative bg-premium-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold tracking-widest text-premium-teal uppercase font-display block">
            Inbox
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-premium-black mt-2">
            Let's <span className="text-premium-teal">Connect.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left half: Details */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-premium-black font-display tracking-tight leading-snug">
              Have an opening or project idea?
            </h3>
            
            <p className="text-sm sm:text-base text-premium-gray leading-relaxed max-w-md">
              I am open to software engineering placements, full-stack internships, and technical research opportunities. Drop me a note and let's align.
            </p>

            <div className="space-y-4 pt-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-glass p-5 rounded-2xl border border-premium-border flex items-center space-x-4 hover:border-premium-teal/30 hover:shadow-md hover:shadow-premium-teal/[0.01] transition-editorial"
                >
                  <div className="p-3 rounded-xl bg-premium-beige border border-premium-border">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-premium-gray uppercase tracking-widest block">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-premium-black font-display">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right half: Animated Form */}
          <div className="lg:col-span-7">
            <div className="premium-glass p-6 sm:p-10 rounded-3xl border border-premium-border min-h-[460px] flex flex-col justify-center relative overflow-hidden bg-premium-white">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center"
                  >
                    <div className="p-3 rounded-full bg-premium-teal/10 text-premium-teal mb-6 border border-premium-teal/20">
                      <CheckCircle2 size={36} className="animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-premium-black mb-2 font-display">
                      Message Dispatched!
                    </h4>
                    <p className="text-premium-gray text-xs sm:text-sm max-w-xs mb-8 leading-relaxed">
                      Thank you. Your message has been sent successfully. I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-full border border-premium-border hover:bg-premium-beige text-premium-black text-xs font-bold uppercase tracking-widest transition"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Grid Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="relative border-b border-premium-border/80 focus-within:border-premium-teal transition-colors duration-300 py-1">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'sending'}
                          required
                          className="w-full bg-transparent border-none text-premium-black text-sm focus:outline-none placeholder-transparent peer pt-5 pb-1"
                          placeholder="Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-0 top-1 text-xs font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-premium-teal"
                        >
                          Name
                        </label>
                        {errors.name && (
                          <span className="text-[10px] text-red-500 mt-1 flex items-center space-x-1">
                            <AlertCircle size={10} />
                            <span>{errors.name}</span>
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="relative border-b border-premium-border/80 focus-within:border-premium-teal transition-colors duration-300 py-1">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'sending'}
                          required
                          className="w-full bg-transparent border-none text-premium-black text-sm focus:outline-none placeholder-transparent peer pt-5 pb-1"
                          placeholder="Email"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 top-1 text-xs font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-premium-teal"
                        >
                          Email Address
                        </label>
                        {errors.email && (
                          <span className="text-[10px] text-red-500 mt-1 flex items-center space-x-1">
                            <AlertCircle size={10} />
                            <span>{errors.email}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="relative border-b border-premium-border/80 focus-within:border-premium-teal transition-colors duration-300 py-1">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        required
                        className="w-full bg-transparent border-none text-premium-black text-sm focus:outline-none placeholder-transparent peer pt-5 pb-1"
                        placeholder="Subject"
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-0 top-1 text-xs font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-premium-teal"
                      >
                        Subject
                      </label>
                      {errors.subject && (
                        <span className="text-[10px] text-red-500 mt-1 flex items-center space-x-1">
                          <AlertCircle size={10} />
                          <span>{errors.subject}</span>
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="relative border-b border-premium-border/80 focus-within:border-premium-teal transition-colors duration-300 py-1">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        required
                        rows={3}
                        className="w-full bg-transparent border-none text-premium-black text-sm focus:outline-none placeholder-transparent peer resize-none pt-5 pb-1"
                        placeholder="Message"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 top-1 text-xs font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-premium-teal"
                      >
                        Message
                      </label>
                      {errors.message && (
                        <span className="text-[10px] text-red-500 mt-1 flex items-center space-x-1">
                          <AlertCircle size={10} />
                          <span>{errors.message}</span>
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center space-x-2 py-4 rounded-full bg-premium-black hover:bg-premium-teal text-premium-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-premium-white/30 border-t-premium-white animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send size={12} />
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
