
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', { email, password });
      // Login logic would go here
    } else {
      console.log('Registration attempt:', { username, email, password });
      // Registration logic would go here
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Auth Container */}
          <div className="bg-tech-card p-8 rounded-lg border border-tech-border shadow-lg relative overflow-hidden">
            {/* Neon border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-accent-blue via-tech-accent-purple to-tech-accent-blue opacity-30 blur-sm"></div>
            <div className="relative bg-tech-card p-6 rounded-lg">
              {/* Header */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-mono font-bold text-white">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </h2>
                <p className="text-tech-text mt-2">
                  {isLogin 
                    ? 'Access your TechX account' 
                    : 'Join the TechX community'}
                </p>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-tech-text mb-1">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="tech-input w-full"
                      placeholder="Enter your username"
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tech-text mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="tech-input w-full"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-tech-text mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="tech-input w-full"
                    placeholder="Enter your password"
                  />
                </div>
                
                {isLogin && (
                  <div className="text-right">
                    <Link to="/forgot-password" className="text-sm text-tech-accent-blue hover:text-tech-accent-orange transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-tech-accent-blue to-tech-accent-purple text-black py-3 rounded-md font-mono font-bold hover:opacity-90 transition-colors"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </div>
              </form>
              
              {/* Toggle between login and register */}
              <div className="mt-6 text-center">
                <p className="text-sm text-tech-text">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-tech-accent-blue font-semibold hover:text-tech-accent-orange transition-colors"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
              
              {/* Social login options */}
              <div className="mt-8 border-t border-tech-border pt-6">
                <div className="text-sm text-center text-tech-text mb-4">
                  Or continue with
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button className="py-2 px-4 bg-tech-secondary rounded-md hover:bg-tech-border transition-colors">
                    G
                  </button>
                  <button className="py-2 px-4 bg-tech-secondary rounded-md hover:bg-tech-border transition-colors">
                    F
                  </button>
                  <button className="py-2 px-4 bg-tech-secondary rounded-md hover:bg-tech-border transition-colors">
                    T
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
