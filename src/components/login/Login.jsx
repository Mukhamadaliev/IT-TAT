import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Define correct credentials
  const correctPhone = '947238850';
  const correctPassword = '20102009';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Remove non-digit characters from phone number for validation
    const cleanedPhone = phone.replace(/\D/g, '');

    // Validate credentials
    if (cleanedPhone === correctPhone && password === correctPassword) {
      setTimeout(() => {
        setIsLoading(false);
        onLogin(); // Proceed with login
      }, 1500);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setError('Telefon raqam yoki parol notoʻgʻri. Iltimos, qayta urinib koʻring.'); // Display error message
      }, 1500);
    }
  };

  // SVG Icons (unchanged)
  const EyeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );

  const SmartphoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12" y2="18"></line>
    </svg>
  );

  const LockIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const GlobeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  return (
    <div className="tat-login-container">
      <div className="tat-login-card">
        {/* Header */}
        <div className="tat-header">
          <h1 className="tat-title">TAT</h1>
          <p className="tat-subtitle">Sifatti ta'limning yangi davri</p>
        </div>

        {/* Login Form */}
        <form className="tat-form" onSubmit={handleSubmit}>
          {/* Phone Input */}
          <div className="input-group">
            <label htmlFor="phone">
              <SmartphoneIcon />
              <span>Telefon</span>
            </label>
            <div className="phone-input-container">
              <div className="country-code">+998</div>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                placeholder="(94)-723-88-50"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">
              <LockIcon />
              <span>Parol</span>
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parolni kiriting"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="tat-error-message">{error}</p>}

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Tizimga kirilmoqda...' : 'Tizimga kirish'}
          </button>
        </form>

        <div className="divider">
          <span>yoki</span>
        </div>

        {/* Language Option */}
        <div className="language-option">
          <GlobeIcon />
          <span>O'zbekcha</span>
        </div>

        {/* Google Finance Link */}
        <div className="external-link">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Google Finance
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#">Yordam</a>
          <a href="#">Maxfiylik</a>
          <a href="#">Shartlar</a>
        </div>
      </div>
    </div>
  );
};

export default Login;