
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count
  
  return (
    <nav className="bg-tech-secondary py-4 sticky top-0 z-50 border-b border-tech-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-tech-accent-blue to-tech-accent-purple flex items-center justify-center">
              <span className="text-black font-bold">TX</span>
            </div>
            <span className="text-white font-mono font-bold text-xl">TechX</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-tech-text hover:text-tech-accent-blue transition-colors">
              Trang chủ
            </Link>
            <Link to="/products" className="text-tech-text hover:text-tech-accent-blue transition-colors">
              Sản phẩm
            </Link>
            <div className="relative">
              <Link to="/cart" className="text-tech-text hover:text-tech-accent-blue transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-tech-accent-orange text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
            <Link to="/auth" className="bg-tech-accent-blue text-black px-4 py-2 rounded-md font-mono font-bold hover:bg-opacity-80 transition-colors flex items-center space-x-2">
              <LogIn className="h-4 w-4" />
              <span>Đăng nhập</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-tech-text" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-tech-text hover:text-tech-accent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                to="/products" 
                className="text-tech-text hover:text-tech-accent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link 
                to="/cart" 
                className="text-tech-text hover:text-tech-accent-blue transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Giỏ hàng ({cartCount})</span>
              </Link>
              <Link 
                to="/auth" 
                className="bg-tech-accent-blue text-black px-4 py-2 rounded-md font-mono font-bold hover:bg-opacity-80 transition-colors w-full text-center flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                <span>Đăng nhập</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
