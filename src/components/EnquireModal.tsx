'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  itinerary?: string;
}

const inputClass =
  'w-full bg-white border border-[#E8E3DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors';
const labelClass =
  'block text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-2';

export default function EnquireModal({ isOpen, onClose, itinerary }: EnquireModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    tripType: '',
    travelDates: '',
    travelers: '2',
    budget: '',
    message: '',
  });

  useEffect(() => {
    if (itinerary && isOpen) {
      setForm((prev) => ({
        ...prev,
        message: prev.message || `Interested in: ${itinerary}`,
      }));
    }
  }, [itinerary, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setError('');
        setLoading(false);
      }, 400);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const nameParts = form.fullName.trim().split(/\s+/);
    const firstName = nameParts[0] ?? '';
    const lastName = nameParts.slice(1).join(' ') || firstName;

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
          tripType: form.tripType,
          travelDates: form.travelDates,
          travelers: form.travelers,
          budget: form.budget,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            key="panel"
            className="bg-[#FDFBF7] max-w-2xl w-full mx-4 rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="bg-[#1A1A1A] px-8 py-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-1">
                  Serenity Africa Safaris
                </p>
                <h2 className="text-white text-2xl font-serif font-light">
                  Begin Your Safari Journey
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-white/50 hover:text-white transition-colors ml-4 flex-shrink-0"
              >
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-8">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center text-center py-10"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <CheckCircle className="text-primary mb-5" size={52} strokeWidth={1.4} />
                  <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">
                    Your inquiry is on its way!
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Our safari specialists will review your request and respond within 24 hours.
                    We look forward to crafting your perfect African adventure.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 px-8 py-3 rounded-full border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="eq-fullName" className={labelClass}>
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="eq-fullName"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.fullName}
                      onChange={set('fullName')}
                      className={inputClass}
                      placeholder="Jane Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="eq-email" className={labelClass}>
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="eq-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={set('email')}
                      className={inputClass}
                      placeholder="jane@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="eq-phone" className={labelClass}>
                      WhatsApp / Phone
                    </label>
                    <input
                      id="eq-phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      className={inputClass}
                      placeholder="+1 555 000 0000"
                    />
                  </div>

                  {/* Trip Type */}
                  <div>
                    <label htmlFor="eq-tripType" className={labelClass}>
                      Trip Type
                    </label>
                    <select
                      id="eq-tripType"
                      value={form.tripType}
                      onChange={set('tripType')}
                      className={inputClass}
                    >
                      <option value="">Select a trip type…</option>
                      <option value="Wildlife Safari">Wildlife Safari</option>
                      <option value="Kilimanjaro Trek">Kilimanjaro Trek</option>
                      <option value="Zanzibar Beach">Zanzibar Beach</option>
                      <option value="Safari & Beach">Safari &amp; Beach</option>
                      <option value="Honeymoon">Honeymoon</option>
                      <option value="Family Safari">Family Safari</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <label htmlFor="eq-dates" className={labelClass}>
                      Travel Dates
                    </label>
                    <input
                      id="eq-dates"
                      type="text"
                      value={form.travelDates}
                      onChange={set('travelDates')}
                      className={inputClass}
                      placeholder="e.g. July 2025 or flexible"
                    />
                  </div>

                  {/* Travelers + Budget (two columns on larger screens) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="eq-travelers" className={labelClass}>
                        Number of Travelers
                      </label>
                      <select
                        id="eq-travelers"
                        value={form.travelers}
                        onChange={set('travelers')}
                        className={inputClass}
                      >
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="eq-budget" className={labelClass}>
                        Budget Range (per person)
                      </label>
                      <select
                        id="eq-budget"
                        value={form.budget}
                        onChange={set('budget')}
                        className={inputClass}
                      >
                        <option value="">Select a range…</option>
                        <option value="$1k–$2k">$1k–$2k</option>
                        <option value="$2k–$3.5k">$2k–$3.5k</option>
                        <option value="$3.5k–$5k">$3.5k–$5k</option>
                        <option value="$5k–$7.5k">$5k–$7.5k</option>
                        <option value="$7.5k+">$7.5k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="eq-message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="eq-message"
                      rows={3}
                      value={form.message}
                      onChange={set('message')}
                      className={inputClass}
                      placeholder="Tell us more about your dream safari…"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1A1A1A] hover:bg-primary text-white uppercase tracking-widest py-5 rounded-full text-xs font-bold transition-colors disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Send Enquiry'}
                  </button>

                  <p className="text-center text-[11px] text-gray-400">
                    We respond within 24 hours. No commitment required.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
