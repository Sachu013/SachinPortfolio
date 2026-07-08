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
    <section id="contact" className="py-40 sm:py-48 relative bg-premium-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-premium-teal uppercase font-display block mb-1">
            Inbox
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-premium-black mt-3 leading-tight">
            Let's <span className="text-premium-teal">Connect.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left half: Details */}
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-2xl sm:text-3xl font-black text-premium-black font-display tracking-tight leading-snug">
              Have an opening or project idea?
            </h3>
            
            <p className="text-base sm:text-lg text-premium-gray leading-relaxed max-w-md">
              I am open to software engineering placements, full-stack internships, and technical research opportunities. Drop me a note and let's align.
            </p>

            <div className="space-y-5 pt-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-glass p-6 rounded-2xl border border-premium-border flex items-center space-x-5 hover:border-premium-teal/30 hover:shadow-md hover:shadow-premium-teal/[0.01] transition-editorial"
                >
                  <div className="p-3.5 rounded-xl bg-premium-beige border border-premium-border">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-premium-teal uppercase tracking-widest block mb-1">
                      {item.label}
                    </span>
                    <span className="text-base sm:text-lg font-black text-premium-black font-display">
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
                    <h4 className="text-2xl font-black text-premium-black mb-3 font-display">
                      Message Dispatched!
                    </h4>
                    <p className="text-premium-gray text-base sm:text-lg max-w-sm mb-10 leading-relaxed">
                      Thank you. Your message has been sent successfully. I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-8 py-3.5 rounded-full border border-premium-border hover:bg-premium-beige text-premium-black text-sm font-bold uppercase tracking-widest transition"
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
                    className="space-y-8"
                    noValidate
                  >
                    {/* Grid Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                          className="w-full bg-transparent border-none text-premium-black text-base sm:text-lg focus:outline-none placeholder-transparent peer pt-6 pb-2"
                          placeholder="Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-0 top-1 text-sm font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-premium-teal"
                        >
                          Name
                        </label>
                        {errors.name && (
                          <span className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                            <AlertCircle size={12} />
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
                          className="w-full bg-transparent border-none text-premium-black text-base sm:text-lg focus:outline-none placeholder-transparent peer pt-6 pb-2"
                          placeholder="Email"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 top-1 text-sm font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-premium-teal"
                        >
                          Email Address
                        </label>
                        {errors.email && (
                          <span className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                            <AlertCircle size={12} />
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
                        className="w-full bg-transparent border-none text-premium-black text-base sm:text-lg focus:outline-none placeholder-transparent peer pt-6 pb-2"
                        placeholder="Subject"
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-0 top-1 text-sm font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-premium-teal"
                      >
                        Subject
                      </label>
                      {errors.subject && (
                        <span className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                          <AlertCircle size={12} />
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
                        className="w-full bg-transparent border-none text-premium-black text-base sm:text-lg focus:outline-none placeholder-transparent peer resize-none pt-6 pb-2"
                        placeholder="Message"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 top-1 text-sm font-bold text-premium-gray uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-premium-teal"
                      >
                        Message
                      </label>
                      {errors.message && (
                        <span className="text-xs text-red-500 mt-1.5 flex items-center space-x-1">
                          <AlertCircle size={12} />
                          <span>{errors.message}</span>
                        </span>
                      )}
                    </div>

                     {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center space-x-2.5 py-5 px-8 rounded-2xl bg-premium-black hover:bg-premium-teal text-premium-white text-sm font-bold uppercase tracking-widest transition-colors duration-300 disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-premium-white/30 border-t-premium-white animate-spin" />
                          <span>Dispatching...</span>
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
