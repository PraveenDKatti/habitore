import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-3xl font-serif text-primary mb-2">Welcome Back</h1>
        <p className="text-secondary">Please enter your details to sign in.</p>
      </div>

      <form className="space-y-5">
        
        {/* Email Input */}
        <div>
          <label className="block text-xs font-medium text-secondary uppercase tracking-wider mb-1">Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com"
            className="w-full p-3 bg-white border border-muted rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          />
        </div>

        {/* Password Input */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-medium text-secondary uppercase tracking-wider">Password</label>
            <a href="#" className="text-xs text-accent hover:underline">Forgot password?</a>
          </div>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full p-3 bg-white border border-muted rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-accent transition-colors shadow-lg shadow-accent/20">
          Sign In
        </button>

      </form>

      {/* Social / Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px bg-muted flex-1" />
        <span className="text-xs text-secondary">OR</span>
        <div className="h-px bg-muted flex-1" />
      </div>

      <button className="w-full py-3 border border-muted bg-white text-primary font-medium rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-secondary">
        Don't have an account?{' '}
        <Link to="/register" className="text-primary font-medium hover:underline">
          Create an account
        </Link>
      </p>

    </div>
  );
};

export default Login;