import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  ExternalLink,
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalData, emailJsConfig } from '../data/portfolioData';

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedType, setCopiedType] = useState(null);
  const [fallbackLinks, setFallbackLinks] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleWhatsAppDirect = () => {
    const form = formRef.current;
    const name = form?.user_name?.value || 'Portfolio Visitor';
    const email = form?.user_email?.value || '';
    const msg = form?.message?.value || '';
    const text = msg 
      ? `Hi Muhammad Arfa,\n\n${msg}\n\nFrom: ${name}${email ? ` (${email})` : ''}`
      : `Hi Muhammad Arfa, I saw your portfolio and would like to connect with you directly!`;
    const waUrl = `https://wa.me/923244891313?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setFallbackLinks(null);

    const formData = new FormData(formRef.current);
    const userName = formData.get('user_name') || formData.get('name') || 'Visitor';
    const userEmail = formData.get('user_email') || formData.get('email') || '';
    const subject = formData.get('subject') || 'Portfolio Inquiry';
    const message = formData.get('message') || '';

    // Multi-key parameters to match any EmailJS template configuration
    const templateParams = {
      user_name: userName,
      from_name: userName,
      name: userName,
      user_email: userEmail,
      from_email: userEmail,
      reply_to: userEmail,
      email: userEmail,
      to_name: "Muhammad Arfa",
      subject: subject,
      message: message
    };

    let isSuccess = false;

    try {
      // Primary: Try EmailJS API send
      const response = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        templateParams,
        emailJsConfig.publicKey
      );

      if (response && (response.status === 200 || response.text === 'OK')) {
        isSuccess = true;
      }
    } catch (err) {
      console.warn('EmailJS transmission note:', err);
      // Secondary: Try sendForm directly as backup
      try {
        const formResponse = await emailjs.sendForm(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          formRef.current,
          emailJsConfig.publicKey
        );
        if (formResponse && (formResponse.status === 200 || formResponse.text === 'OK')) {
          isSuccess = true;
        }
      } catch (formErr) {
        console.warn('EmailJS form backup note:', formErr);
      }
    }

    if (isSuccess) {
      setStatus('success');
      setStatusMessage('Message transmitted successfully! Muhammad Arfa will get back to you within 24 hours.');
      formRef.current.reset();
      try {
        confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
      } catch {}
    } else {
      // Guaranteed Fail-Proof Dispatch Links
      const bodyText = `Hi Muhammad Arfa,\n\n${message}\n\nFrom: ${userName} (${userEmail})`;
      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      const waUrl = `https://wa.me/923244891313?text=${encodeURIComponent(bodyText)}`;

      // Attempt background trigger
      try {
        window.location.href = mailtoUrl;
      } catch {}

      setStatus('fallback');
      setStatusMessage('Draft ready! Select your preferred instant channel below to dispatch your message immediately:');
      setFallbackLinks({ mailtoUrl, gmailUrl, waUrl });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e4e4e7' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-pro">
          <div className="section-pill-tag">
            <Sparkles size={13} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title-pro">
            Let's Discuss Projects & Roles
          </h2>
          <p className="section-description-pro">
            Reach out directly for frontend engineering roles, enterprise systems collaboration, or startup inquiries.
          </p>
        </div>

        {/* Bento Grid Contact */}
        <div className="bento-grid">
          
          {/* Bento Item 1: Direct Channels (col-span-5) */}
          <div className="bento-card col-span-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#ffffff' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#09090b', marginBottom: '0.5rem' }}>
                Contact Dossier
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Verified communication channels. Rapid response guaranteed within 24 hours.
              </p>

              {/* Email Pill Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669'
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.71875rem', color: '#71717a', fontWeight: 600 }}>Direct Email</div>
                    <a href={`mailto:${personalData.email}`} style={{ fontSize: '0.90625rem', fontWeight: 700, color: '#09090b' }}>
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalData.email, 'email')}
                  style={{
                    padding: '0.35rem 0.6rem',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    color: '#52525b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  {copiedType === 'email' ? <CheckCircle2 size={13} color="#059669" /> : <Copy size={13} />}
                  <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Pill Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669'
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.71875rem', color: '#71717a', fontWeight: 600 }}>Mobile & WhatsApp</div>
                    <a href={`tel:${personalData.phone}`} style={{ fontSize: '0.90625rem', fontWeight: 700, color: '#09090b' }}>
                      {personalData.displayPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalData.phone, 'phone')}
                  style={{
                    padding: '0.35rem 0.6rem',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    color: '#52525b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  {copiedType === 'phone' ? <CheckCircle2 size={13} color="#059669" /> : <Copy size={13} />}
                  <span>{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                marginBottom: '1.25rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#fef3c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d97706'
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.71875rem', color: '#71717a', fontWeight: 600 }}>Location</div>
                  <div style={{ fontSize: '0.90625rem', fontWeight: 700, color: '#09090b' }}>
                    {personalData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Socials buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0077b5',
                  fontWeight: 600,
                  fontSize: '0.84375rem'
                }}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ExternalLink size={12} style={{ marginLeft: 'auto', color: '#a1a1aa' }} />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#09090b',
                  fontWeight: 600,
                  fontSize: '0.84375rem'
                }}
              >
                <Github size={18} />
                <span>GitHub</span>
                <ExternalLink size={12} style={{ marginLeft: 'auto', color: '#a1a1aa' }} />
              </a>
            </div>
          </div>

          {/* Bento Item 2: Interactive Message Form (col-span-7) */}
          <div className="bento-card col-span-7" style={{ backgroundColor: '#ffffff', padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.3125rem', fontWeight: 700, color: '#09090b', marginBottom: '0.25rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#52525b', marginBottom: '1.5rem' }}>
              Connected to real-time EmailJS webhook with instant delivery.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#27272a', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    name="user_name"
                    required
                    placeholder="e.g. John Doe"
                    style={{
                      width: '100%',
                      padding: '0.6875rem 0.875rem',
                      borderRadius: '10px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.875rem',
                      color: '#09090b',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#27272a', marginBottom: '0.35rem' }}>
                    Your Email *
                  </label>
                  <input 
                    type="email"
                    name="user_email"
                    required
                    placeholder="e.g. john@example.com"
                    style={{
                      width: '100%',
                      padding: '0.6875rem 0.875rem',
                      borderRadius: '10px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.875rem',
                      color: '#09090b',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#27272a', marginBottom: '0.35rem' }}>
                  Subject *
                </label>
                <input 
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Frontend Engineering Opportunity / Project Discussion"
                  style={{
                    width: '100%',
                    padding: '0.6875rem 0.875rem',
                    borderRadius: '10px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.875rem',
                    color: '#09090b',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#27272a', marginBottom: '0.35rem' }}>
                  Your Message *
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Detail your opportunity, scope, or timeline..."
                  style={{
                    width: '100%',
                    padding: '0.6875rem 0.875rem',
                    borderRadius: '10px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.875rem',
                    color: '#09090b',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {status === 'success' && (
                <div style={{
                  padding: '0.875rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  color: '#065f46',
                  fontSize: '0.84375rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <CheckCircle2 size={16} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'fallback' && fallbackLinks && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#065f46', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={17} color="#059669" />
                    <span>{statusMessage}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a 
                      href={fallbackLinks.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.45rem 0.85rem',
                        backgroundColor: '#059669',
                        color: '#ffffff',
                        borderRadius: '8px',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span>Open in Gmail</span>
                      <ExternalLink size={13} />
                    </a>
                    <a 
                      href={fallbackLinks.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.45rem 0.85rem',
                        backgroundColor: '#ffffff',
                        color: '#15803d',
                        border: '1px solid #86efac',
                        borderRadius: '8px',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span>Send via WhatsApp</span>
                      <ExternalLink size={13} />
                    </a>
                    <a 
                      href={fallbackLinks.mailtoUrl}
                      style={{
                        padding: '0.45rem 0.85rem',
                        backgroundColor: '#ffffff',
                        color: '#334155',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      <span>Default Mail App</span>
                    </a>
                  </div>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pro-primary"
                  style={{
                    padding: '0.875rem',
                    opacity: loading ? 0.75 : 1
                  }}
                >
                  {loading ? <span>Transmitting Message...</span> : (
                    <>
                      <Send size={16} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn-pro-outline"
                  style={{
                    padding: '0.875rem',
                    backgroundColor: '#f0fdf4',
                    borderColor: '#86efac',
                    color: '#15803d',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  <MessageSquare size={16} color="#16a34a" />
                  <span>Direct WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
