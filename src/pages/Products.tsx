
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [showFilters, setShowFilters] = useState(false);
  
  const maxPrice = Math.max(...products.map(product => product.price));
  
  useEffect(() => {
    filterProducts();
  }, [priceRange, selectedCategories]);
  
  const filterProducts = () => {
    const filtered = products.filter(product => {
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(product.category);
      
      return matchesPrice && matchesCategory;
    });
    
    setFilteredProducts(filtered);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };
  
  const clearFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedCategories([]);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-mono font-bold text-white mb-8">
          Khám phá <span className="text-tech-accent-blue">Sản phẩm</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-tech-card px-4 py-2 rounded-md w-full"
            >
              <Filter className="h-5 w-5" />
              <span>{showFilters ? 'Ẩn Bộ lọc' : 'Hiện Bộ lọc'}</span>
            </button>
          </div>
          
          {/* Filters sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-64 flex-shrink-0`}>
            <div className="bg-tech-card rounded-lg p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-mono font-bold text-white">Bộ lọc</h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-tech-accent-blue hover:text-tech-accent-orange"
                >
                  Xóa tất cả
                </button>
              </div>
              
              {/* Price range filter */}
              <div className="mb-8">
                <h4 className="font-medium text-white mb-4">Khoảng giá</h4>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{new Intl.NumberFormat('vi-VN', {
                    style: 'currency', 
                    currency: 'VND',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(priceRange[0] * 23000)}</span>
                  <span>{new Intl.NumberFormat('vi-VN', {
                    style: 'currency', 
                    currency: 'VND',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(priceRange[1] * 23000)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="w-full"
                />
              </div>
              
              {/* Category filter */}
              <div>
                <h4 className="font-medium text-white mb-4">Danh mục</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.slug} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category.slug}
                        checked={selectedCategories.includes(category.slug)}
                        onChange={() => handleCategoryChange(category.slug)}
                        className="filter-checkbox mr-2"
                      />
                      <label htmlFor={category.slug} className="text-tech-text">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="flex-1">
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCategories.map(category => {
                  const categoryName = categories.find(c => c.slug === category)?.name;
                  return (
                    <div 
                      key={category}
                      className="bg-tech-accent-blue text-black px-3 py-1 rounded-full text-sm font-medium flex items-center"
                    >
                      <span>{categoryName}</span>
                      <button 
                        onClick={() => handleCategoryChange(category)}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
            
            <div className="text-tech-text mb-4">
              Hiển thị {filteredProducts.length} sản phẩm
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-mono font-bold text-white mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-tech-text">Hãy điều chỉnh bộ lọc để tìm sản phẩm phù hợp.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
