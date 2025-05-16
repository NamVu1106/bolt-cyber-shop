
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price * 23000); // Converting USD to VND approximately
  };

  return (
    <div className="product-card group">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-tech-accent-blue text-xs text-black font-bold px-2 py-1 rounded">
            {category}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-white font-mono font-bold mb-2 group-hover:text-tech-accent-blue transition-colors">{name}</h3>
        </Link>
        <div className="flex justify-between items-center">
          <p className="text-tech-accent-orange font-bold">{formatPrice(price)}</p>
          <button className="bg-tech-secondary p-2 rounded-full hover:bg-tech-accent-blue hover:text-black transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
