
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products, categories, banners } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={banners[0].image} 
          alt="Gaming Peripherals" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
                Nâng cấp <span className="text-tech-accent-blue">Gaming Setup</span> của bạn
              </h1>
              <p className="text-tech-text text-lg mb-8">
                Phụ kiện cao cấp dành cho game thủ, được thiết kế cho hiệu suất tối ưu.
              </p>
              <Link 
                to="/products" 
                className="bg-tech-accent-blue text-black px-6 py-3 rounded-md font-mono font-bold hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2"
              >
                <span>Mua ngay</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <section className="py-16 bg-tech-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-white mb-8 text-center">
            Khám phá <span className="text-tech-accent-blue">Danh mục</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                name={category.name}
                icon={category.icon}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-mono font-bold text-white">
              Sản phẩm <span className="text-tech-accent-blue">Nổi bật</span>
            </h2>
            <Link 
              to="/products" 
              className="text-tech-accent-blue hover:text-tech-accent-orange transition-colors flex items-center space-x-2"
            >
              <span>Xem tất cả</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Promo Banner */}
      <section className="py-12 bg-tech-secondary">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={banners[1].image} 
              alt="Gaming Headsets" 
              className="w-full h-64 md:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="px-8 md:px-12 max-w-lg">
                <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
                  Trải nghiệm Âm thanh Cao cấp
                </h3>
                <p className="text-tech-text mb-6">
                  Âm thanh sống động với khả năng giao tiếp trong game rõ ràng, dành cho gaming chuyên nghiệp.
                </p>
                <Link 
                  to="/products?category=headset" 
                  className="bg-tech-accent-orange text-black px-6 py-2 rounded-md font-mono font-bold hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Mua Tai nghe</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bestsellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-white mb-8">
            Sản phẩm <span className="text-tech-accent-orange">Bán chạy</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-tech-card border-y border-tech-border">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">
            Đăng ký <span className="text-tech-accent-blue">Bản tin</span>
          </h2>
          <p className="text-tech-text mb-8">
            Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và các mẹo công nghệ.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              className="tech-input flex-1"
            />
            <button className="tech-button">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
