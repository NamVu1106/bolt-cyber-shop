
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tech-secondary pt-10 pb-6 border-t border-tech-border mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-tech-accent-blue to-tech-accent-purple flex items-center justify-center">
                <span className="text-black font-bold">TX</span>
              </div>
              <span className="text-white font-mono font-bold text-xl">TechX</span>
            </div>
            <p className="text-tech-text text-sm">
              Cửa hàng phụ kiện máy tính và thiết bị ngoại vi cao cấp.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-white mb-4">Mua sắm</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-tech-text hover:text-tech-accent-blue transition-colors">Tất cả sản phẩm</Link></li>
              <li><Link to="/products?category=mouse" className="text-tech-text hover:text-tech-accent-blue transition-colors">Chuột</Link></li>
              <li><Link to="/products?category=keyboard" className="text-tech-text hover:text-tech-accent-blue transition-colors">Bàn phím</Link></li>
              <li><Link to="/products?category=headset" className="text-tech-text hover:text-tech-accent-blue transition-colors">Tai nghe</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-white mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-tech-text hover:text-tech-accent-blue transition-colors">Giới thiệu</Link></li>
              <li><Link to="/contact" className="text-tech-text hover:text-tech-accent-blue transition-colors">Liên hệ</Link></li>
              <li><Link to="/careers" className="text-tech-text hover:text-tech-accent-blue transition-colors">Tuyển dụng</Link></li>
              <li><Link to="/privacy" className="text-tech-text hover:text-tech-accent-blue transition-colors">Chính sách bảo mật</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-white mb-4">Kết nối</h4>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-tech-card flex items-center justify-center hover:bg-tech-accent-blue hover:text-black transition-colors">
                <span className="font-bold">fb</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-tech-card flex items-center justify-center hover:bg-tech-accent-blue hover:text-black transition-colors">
                <span className="font-bold">tw</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-tech-card flex items-center justify-center hover:bg-tech-accent-blue hover:text-black transition-colors">
                <span className="font-bold">ig</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-tech-card flex items-center justify-center hover:bg-tech-accent-blue hover:text-black transition-colors">
                <span className="font-bold">yt</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-tech-border mt-8 pt-6 text-center text-sm text-tech-text">
          <p>&copy; 2025 TechX. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
