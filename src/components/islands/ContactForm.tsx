import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  country: string;
  industry: string;
  companySize: string;
  jobTitle: string;
  serviceInterestedIn: string;
  projectBudget: string;
  expectedTimeline: string;
  currentChallenge: string;
  projectDescription: string;
  preferredContact: string;
  consent: boolean;
  newsletter: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const COUNTRIES = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
  'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Switzerland',
  'Singapore', 'Australia', 'Japan', 'India', 'UAE',
  'Saudi Arabia', 'Brazil', 'Mexico', 'South Africa', 'Nigeria',
  'Other',
];

const INDUSTRIES = [
  'Financial Services', 'Healthcare', 'Retail & Commerce', 'Manufacturing',
  'Logistics & Supply Chain', 'Education', 'Government & Public Sector',
  'Telecommunications', 'SaaS & Technology', 'Media & Entertainment',
  'Artificial Intelligence', 'Energy & Utilities', 'Other',
];

const COMPANY_SIZES = [
  '1-10', '11-50', '51-200', '201-1,000', '1,001-5,000', '5,000+',
];

const SERVICES = [
  'Platform Engineering', 'Cloud Architecture', 'AI-Native Engineering',
  'Data Engineering', 'Enterprise Architecture', 'SRE & Operations',
  'DevOps & Automation', 'Application Modernization', 'Cloud Migration',
  'Architecture Review', 'Discovery Workshop', 'Other',
];

const BUDGETS = [
  'Under USD 50,000', 'USD 50,000-100,000', 'USD 100,000-250,000',
  'USD 250,000-500,000', 'USD 500,000-1,000,000', 'USD 1,000,000+',
  'Not sure yet',
];

const TIMELINES = [
  'Immediate (within 1 month)', 'Short-term (1-3 months)',
  'Medium-term (3-6 months)', 'Long-term (6+ months)', 'Not sure yet',
];

const CONTACT_METHODS = ['Email', 'Phone', 'Video call'];

const initial: FormData = {
  fullName: '',
  companyName: '',
  businessEmail: '',
  phone: '',
  country: '',
  industry: '',
  companySize: '',
  jobTitle: '',
  serviceInterestedIn: '',
  projectBudget: '',
  expectedTimeline: '',
  currentChallenge: '',
  projectDescription: '',
  preferredContact: '',
  consent: false,
  newsletter: false,
};

function validate(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (!data.fullName.trim()) e.fullName = 'Please enter your full name';
  if (!data.companyName.trim()) e.companyName = 'Please enter your company name';
  if (!data.businessEmail.trim()) {
    e.businessEmail = 'Please enter your business email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.businessEmail)) {
    e.businessEmail = 'Enter a valid email address';
  }
  if (data.phone && !/^[\d\s\-\+\(\)]{7,20}$/.test(data.phone)) {
    e.phone = 'Enter a valid phone number';
  }
  if (!data.country) e.country = 'Please select your country';
  if (!data.industry) e.industry = 'Please select your industry';
  if (!data.companySize) e.companySize = 'Please select your company size';
  if (!data.jobTitle.trim()) e.jobTitle = 'Please enter your job title';
  if (!data.serviceInterestedIn) e.serviceInterestedIn = 'Please select a service';
  if (!data.expectedTimeline) e.expectedTimeline = 'Please select an expected timeline';
  if (!data.projectDescription.trim()) e.projectDescription = 'Please describe your project';
  if (!data.preferredContact) e.preferredContact = 'Please select a contact method';
  if (!data.consent) e.consent = 'You must agree to the privacy policy';
  return e;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const set = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setData((prev) => ({ ...prev, [field]: value }));
    if (field === 'projectDescription') {
      setCharCount((e.target as HTMLTextAreaElement).value.length);
    }
    if (touched.has(field)) {
      const updated = { ...data, [field]: value };
      const newErrors = validate(updated);
      setErrors((prev) => {
        const next = { ...prev };
        if (newErrors[field]) next[field] = newErrors[field];
        else delete next[field];
        return next;
      });
    }
  };

  const blur = (field: keyof FormData) => () => {
    setTouched((prev) => new Set(prev).add(field));
    const newErrors = validate(data);
    setErrors((prev) => {
      const next = { ...prev };
      if (newErrors[field]) next[field] = newErrors[field];
      else delete next[field];
      return next;
    });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate(data);
    setErrors(newErrors);
    const allFields = Object.keys(initial) as (keyof FormData)[];
    setTouched(new Set(allFields));
    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border bg-paper px-4 py-3 text-sm text-ink transition-colors duration-150 placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
      errors[field] && touched.has(field) ? 'border-red-500' : 'border-line-2 hover:border-ink-3'
    }`;

  const labelClass = 'block text-sm font-medium text-ink mb-1.5';
  const errorClass = 'mt-1 text-xs text-red-500';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center" role="status">
        <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12 text-accent" aria-hidden="true">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
          <path d="M16 24l5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Inquiry received</h3>
        <p className="mt-3 max-w-md text-sm text-ink-2 leading-relaxed">
          Thank you for reaching out. A member of our engineering team will respond within two working days.
        </p>
        <div className="mt-8 text-left">
          <p className="kicker text-accent mb-3">What happens next</p>
          <ol className="space-y-3">
            <li className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 text-sm text-ink-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">1</span>
              <span>We review your inquiry and assign it to the relevant practice lead.</span>
            </li>
            <li className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 text-sm text-ink-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">2</span>
              <span>An engineer schedules a discovery call to understand your context.</span>
            </li>
            <li className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 text-sm text-ink-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">3</span>
              <span>We prepare a proposal with scope, timeline, and pricing - or a recommendation if we are not the right fit.</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }

  const requiredMarker = <span className="text-red-400" aria-hidden="true">*</span>;

  return (
    <form onSubmit={submit} noValidate className="space-y-6" id="contact-form">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name {requiredMarker}
          </label>
          <input
            id="fullName"
            type="text"
            value={data.fullName}
            onChange={set('fullName')}
            onBlur={blur('fullName')}
            placeholder="Your full name"
            className={inputClass('fullName')}
            aria-required="true"
            aria-invalid={!!(errors.fullName && touched.has('fullName'))}
            aria-describedby={errors.fullName ? 'err-fullName' : undefined}
          />
          {errors.fullName && touched.has('fullName') && (
            <p id="err-fullName" className={errorClass} role="alert">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label htmlFor="companyName" className={labelClass}>
            Company name {requiredMarker}
          </label>
          <input
            id="companyName"
            type="text"
            value={data.companyName}
            onChange={set('companyName')}
            onBlur={blur('companyName')}
            placeholder="Your organisation"
            className={inputClass('companyName')}
            aria-required="true"
            aria-invalid={!!(errors.companyName && touched.has('companyName'))}
            aria-describedby={errors.companyName ? 'err-companyName' : undefined}
          />
          {errors.companyName && touched.has('companyName') && (
            <p id="err-companyName" className={errorClass} role="alert">{errors.companyName}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="businessEmail" className={labelClass}>
            Business email {requiredMarker}
          </label>
          <input
            id="businessEmail"
            type="email"
            value={data.businessEmail}
            onChange={set('businessEmail')}
            onBlur={blur('businessEmail')}
            placeholder="you@company.com"
            className={inputClass('businessEmail')}
            aria-required="true"
            aria-invalid={!!(errors.businessEmail && touched.has('businessEmail'))}
            aria-describedby={errors.businessEmail ? 'err-businessEmail' : undefined}
          />
          {errors.businessEmail && touched.has('businessEmail') && (
            <p id="err-businessEmail" className={errorClass} role="alert">{errors.businessEmail}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={set('phone')}
            onBlur={blur('phone')}
            placeholder="+1 (555) 000-0000"
            className={inputClass('phone')}
            aria-invalid={!!(errors.phone && touched.has('phone'))}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
          />
          {errors.phone && touched.has('phone') && (
            <p id="err-phone" className={errorClass} role="alert">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="country" className={labelClass}>
            Country {requiredMarker}
          </label>
          <select
            id="country"
            value={data.country}
            onChange={set('country')}
            onBlur={blur('country')}
            className={inputClass('country')}
            aria-required="true"
            aria-invalid={!!(errors.country && touched.has('country'))}
            aria-describedby={errors.country ? 'err-country' : undefined}
          >
            <option value="">Select your country</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && touched.has('country') && (
            <p id="err-country" className={errorClass} role="alert">{errors.country}</p>
          )}
        </div>
        <div>
          <label htmlFor="industry" className={labelClass}>
            Industry {requiredMarker}
          </label>
          <select
            id="industry"
            value={data.industry}
            onChange={set('industry')}
            onBlur={blur('industry')}
            className={inputClass('industry')}
            aria-required="true"
            aria-invalid={!!(errors.industry && touched.has('industry'))}
            aria-describedby={errors.industry ? 'err-industry' : undefined}
          >
            <option value="">Select your industry</option>
            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
          {errors.industry && touched.has('industry') && (
            <p id="err-industry" className={errorClass} role="alert">{errors.industry}</p>
          )}
        </div>
        <div>
          <label htmlFor="companySize" className={labelClass}>
            Company size {requiredMarker}
          </label>
          <select
            id="companySize"
            value={data.companySize}
            onChange={set('companySize')}
            onBlur={blur('companySize')}
            className={inputClass('companySize')}
            aria-required="true"
            aria-invalid={!!(errors.companySize && touched.has('companySize'))}
            aria-describedby={errors.companySize ? 'err-companySize' : undefined}
          >
            <option value="">Select approximate size</option>
            {COMPANY_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.companySize && touched.has('companySize') && (
            <p id="err-companySize" className={errorClass} role="alert">{errors.companySize}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="jobTitle" className={labelClass}>
            Job title {requiredMarker}
          </label>
          <input
            id="jobTitle"
            type="text"
            value={data.jobTitle}
            onChange={set('jobTitle')}
            onBlur={blur('jobTitle')}
            placeholder="e.g. CTO, VP Engineering"
            className={inputClass('jobTitle')}
            aria-required="true"
            aria-invalid={!!(errors.jobTitle && touched.has('jobTitle'))}
            aria-describedby={errors.jobTitle ? 'err-jobTitle' : undefined}
          />
          {errors.jobTitle && touched.has('jobTitle') && (
            <p id="err-jobTitle" className={errorClass} role="alert">{errors.jobTitle}</p>
          )}
        </div>
        <div>
          <label htmlFor="serviceInterestedIn" className={labelClass}>
            Service interested in {requiredMarker}
          </label>
          <select
            id="serviceInterestedIn"
            value={data.serviceInterestedIn}
            onChange={set('serviceInterestedIn')}
            onBlur={blur('serviceInterestedIn')}
            className={inputClass('serviceInterestedIn')}
            aria-required="true"
            aria-invalid={!!(errors.serviceInterestedIn && touched.has('serviceInterestedIn'))}
            aria-describedby={errors.serviceInterestedIn ? 'err-serviceInterestedIn' : undefined}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.serviceInterestedIn && touched.has('serviceInterestedIn') && (
            <p id="err-serviceInterestedIn" className={errorClass} role="alert">{errors.serviceInterestedIn}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="projectBudget" className={labelClass}>
            Project budget
          </label>
          <select
            id="projectBudget"
            value={data.projectBudget}
            onChange={set('projectBudget')}
            className={inputClass('projectBudget')}
          >
            <option value="">Select approximate range</option>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="expectedTimeline" className={labelClass}>
            Expected timeline {requiredMarker}
          </label>
          <select
            id="expectedTimeline"
            value={data.expectedTimeline}
            onChange={set('expectedTimeline')}
            onBlur={blur('expectedTimeline')}
            className={inputClass('expectedTimeline')}
            aria-required="true"
            aria-invalid={!!(errors.expectedTimeline && touched.has('expectedTimeline'))}
            aria-describedby={errors.expectedTimeline ? 'err-expectedTimeline' : undefined}
          >
            <option value="">Select a timeframe</option>
            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.expectedTimeline && touched.has('expectedTimeline') && (
            <p id="err-expectedTimeline" className={errorClass} role="alert">{errors.expectedTimeline}</p>
          )}
        </div>
        <div>
          <label htmlFor="preferredContact" className={labelClass}>
            Preferred contact method {requiredMarker}
          </label>
          <select
            id="preferredContact"
            value={data.preferredContact}
            onChange={set('preferredContact')}
            onBlur={blur('preferredContact')}
            className={inputClass('preferredContact')}
            aria-required="true"
            aria-invalid={!!(errors.preferredContact && touched.has('preferredContact'))}
            aria-describedby={errors.preferredContact ? 'err-preferredContact' : undefined}
          >
            <option value="">Select a method</option>
            {CONTACT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          {errors.preferredContact && touched.has('preferredContact') && (
            <p id="err-preferredContact" className={errorClass} role="alert">{errors.preferredContact}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="currentChallenge" className={labelClass}>
          Current challenge
        </label>
        <input
          id="currentChallenge"
          type="text"
          value={data.currentChallenge}
          onChange={set('currentChallenge')}
          placeholder="Briefly describe the problem you are solving"
          className={inputClass('currentChallenge')}
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="projectDescription" className={labelClass}>
            Project description {requiredMarker}
          </label>
          <span className="text-xs text-ink-3" aria-live="polite">{charCount} characters</span>
        </div>
        <textarea
          id="projectDescription"
          rows={5}
          value={data.projectDescription}
          onChange={set('projectDescription')}
          onBlur={blur('projectDescription')}
          placeholder="Tell us about your project, goals, and any constraints we should know about"
          className={inputClass('projectDescription') + ' resize-y min-h-[120px]'}
          aria-required="true"
          aria-invalid={!!(errors.projectDescription && touched.has('projectDescription'))}
          aria-describedby={errors.projectDescription ? 'err-projectDescription' : undefined}
          maxLength={3000}
        />
        {errors.projectDescription && touched.has('projectDescription') && (
          <p id="err-projectDescription" className={errorClass} role="alert">{errors.projectDescription}</p>
        )}
      </div>

      <div className="space-y-4 border-t border-line pt-6">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            checked={data.consent}
            onChange={set('consent')}
            onBlur={blur('consent')}
            className="mt-1 h-4 w-4 shrink-0 rounded border-line-2 text-accent focus:ring-accent/40"
            aria-required="true"
            aria-invalid={!!(errors.consent && touched.has('consent'))}
            aria-describedby={errors.consent ? 'err-consent' : undefined}
          />
          <label htmlFor="consent" className="text-sm text-ink-2 leading-relaxed cursor-pointer">
            I agree to Substrate processing my data in accordance with the{' '}
            <a href="/privacy" className="text-accent underline hover:no-underline">privacy policy</a>.
            {requiredMarker}
          </label>
        </div>
        {errors.consent && touched.has('consent') && (
          <p id="err-consent" className={errorClass + ' ml-7'} role="alert">{errors.consent}</p>
        )}

        <div className="flex items-start gap-3">
          <input
            id="newsletter"
            type="checkbox"
            checked={data.newsletter}
            onChange={set('newsletter')}
            className="mt-1 h-4 w-4 shrink-0 rounded border-line-2 text-accent focus:ring-accent/40"
          />
          <label htmlFor="newsletter" className="text-sm text-ink-2 leading-relaxed cursor-pointer">
            Subscribe to engineering insights and field notes from our engineers.
          </label>
        </div>
      </div>

      {status === 'error' && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400" role="alert">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:hello@substrate.engineering" className="font-medium underline">hello@substrate.engineering</a>.
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-[0.95rem] font-medium text-white transition-all duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
                <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Submit inquiry
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
        <p className="text-xs text-ink-3 leading-relaxed">
          This site is protected by spam detection. Your information is handled per our{' '}
          <a href="/privacy" className="underline hover:no-underline">privacy policy</a>.
        </p>
      </div>
    </form>
  );
}
