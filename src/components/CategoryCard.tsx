
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  icon: string;
  slug: string;
}

const CategoryCard = ({ name, icon, slug }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${slug}`} className="block">
      <div className="category-card">
        <div className="h-16 w-16 mb-4">
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-white font-mono font-bold text-center">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
