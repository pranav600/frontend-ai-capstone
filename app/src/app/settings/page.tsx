"use client";

import { useState } from "react";

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

interface FormData {
  fullName: string;
  email: string;
  password: string;
  notifications: {
    productUpdates: boolean;
    securityAlerts: boolean;
    weeklyDigest: boolean;
  };
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
}

export default function SettingsPage() {
  const [isDark, setIsDark] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    notifications: {
      productUpdates: true,
      securityAlerts: true,
      weeklyDigest: false,
    },
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const toggleNotification = (key: keyof FormData["notifications"]) => {
    setFormData((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: !prev.notifications[key] },
    }));
  };

  const bg = isDark
    ? "min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    : "min-h-screen bg-gradient-to-br from-[#F5F3FF] via-[#EEF2FF] to-[#E0E7FF]";

  const card = isDark
    ? "backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
    : "backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl";

  const label = isDark ? "text-indigo-200 font-medium text-sm" : "text-[#1E1B4B] font-medium text-sm";
  const input = isDark
    ? "w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
    : "w-full rounded-xl bg-white/80 border border-indigo-200 text-[#1E1B4B] placeholder-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200";

  const heading = isDark ? "text-white" : "text-[#1E1B4B]";
  const sub = isDark ? "text-indigo-300" : "text-indigo-500";
  const divider = isDark ? "border-white/10" : "border-indigo-100";
  const notifCard = isDark ? "rounded-xl bg-white/5 border border-white/10 p-4" : "rounded-xl bg-white/60 border border-indigo-100 p-4";
  const notifLabel = isDark ? "text-white text-sm font-medium" : "text-[#1E1B4B] text-sm font-medium";
  const notifDesc = isDark ? "text-white/50 text-xs mt-0.5" : "text-slate-500 text-xs mt-0.5";

  return (
    <div className={bg} style={{ fontFamily: "'Poppins', 'Open Sans', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');`}</style>

      {/* Toast */}
      <div
        className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl transition-all duration-500 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        } bg-emerald-500 text-white`}
        role="alert"
        aria-live="polite"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
          <CheckIcon />
        </span>
        <div>
          <p className="font-semibold text-sm">Settings saved!</p>
          <p className="text-xs text-emerald-100">Your preferences have been updated.</p>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 left-6 z-40">
        <button
          onClick={() => setIsDark((d) => !d)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
            isDark
              ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
              : "bg-white/80 border border-indigo-200 text-[#1E1B4B] hover:bg-indigo-50"
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
          <span>{isDark ? "Light mode" : "Dark mode"}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-4 py-24">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className={`text-3xl font-bold tracking-tight ${heading}`}>Account Settings</h1>
            <p className={`mt-2 text-sm ${sub}`}>Manage your profile, security, and preferences</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className={`rounded-3xl p-8 ${card} space-y-6`}>

              {/* Profile Section */}
              <div>
                <h2 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${sub}`}>Profile</h2>

                {/* Full Name */}
                <div className="mb-4">
                  <label htmlFor="fullName" className={`block mb-1.5 ${label}`}>Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Pranav Joshi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={input + (errors.fullName ? " border-red-400 focus:ring-red-400" : "")}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={`block mb-1.5 ${label}`}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="pranav@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={input + (errors.email ? " border-red-400 focus:ring-red-400" : "")}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className={`border-t ${divider}`} />

              {/* Security Section */}
              <div>
                <h2 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${sub}`}>Security</h2>
                <div>
                  <label htmlFor="password" className={`block mb-1.5 ${label}`}>Password</label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Minimum 8 characters"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={input + " pr-12" + (errors.password ? " border-red-400 focus:ring-red-400" : "")}
                      aria-describedby={errors.password ? "password-error" : undefined}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-colors duration-150 ${
                        isDark ? "text-white/40 hover:text-white/80" : "text-slate-400 hover:text-indigo-500"
                      }`}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {errors.password && (
                    <p id="password-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.password}</p>
                  )}
                </div>
              </div>

              <div className={`border-t ${divider}`} />

              {/* Notifications Section */}
              <div>
                <h2 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${sub}`}>Notifications</h2>
                <div className="space-y-3">
                  {[
                    { key: "productUpdates" as const, title: "Product Updates", desc: "New features, improvements, and changelogs" },
                    { key: "securityAlerts" as const, title: "Security Alerts", desc: "Login attempts and account activity" },
                    { key: "weeklyDigest" as const, title: "Weekly Digest", desc: "Summary of your activity each week" },
                  ].map(({ key, title, desc }) => (
                    <div key={key} className={`${notifCard} flex items-center justify-between`}>
                      <div>
                        <p className={notifLabel}>{title}</p>
                        <p className={notifDesc}>{desc}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={formData.notifications[key]}
                        onClick={() => toggleNotification(key)}
                        className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 ${
                          formData.notifications[key] ? "bg-indigo-500" : isDark ? "bg-white/20" : "bg-slate-300"
                        }`}
                        aria-label={`Toggle ${title}`}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 mt-0.5 ${
                            formData.notifications[key] ? "translate-x-5" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition-all duration-200 shadow-lg shadow-indigo-500/30 active:scale-[0.98]"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
