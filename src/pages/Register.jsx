import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-3xl font-serif text-primary mb-2">Create Account</h1>
        <p className="text-secondary">Join Habitore for exclusive access and rewards.</p>
      </div>

      <form className="space-y-5">
        
        {/* Name Input */}
        <div>
          <label className="block text-xs font-medium text-secondary uppercase tracking-wider mb-1">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe"
            className="w-full p-3 bg-white border border-muted rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          />
        </div>

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
          <label className="block text-xs font-medium text-secondary uppercase tracking-wider mb-1">Password</label>
          <input 
            type="password" 
            placeholder="Create a password"
            className="w-full p-3 bg-white border border-muted rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          />
          <p className="text-[10px] text-secondary mt-1">Must be at least 8 characters.</p>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 accent-accent cursor-pointer" />
          <p className="text-xs text-secondary leading-snug">
            I agree to Habitore's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>

        {/* Submit Button */}
        <button className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-accent transition-colors shadow-lg shadow-accent/20">
          Create Account
        </button>

      </form>

      <p className="mt-8 text-center text-sm text-secondary">
        Already have an account?{' '}
        <Link to="/login" className="text-primary font-medium hover:underline">
          Sign in here
        </Link>
      </p>

    </div>
  );
};

export default Register;