
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/mockData';
import { ShoppingCart, Check, X, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading from API
    setIsLoading(true);
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === Number(id));
      setProduct(foundProduct);
      if (foundProduct) {
        setMainImage(foundProduct.images[0]);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const handleQuantityChange = (value: number) => {
    if (quantity + value > 0) {
      setQuantity(quantity + value);
    }
  };
  
  const handleImageClick = (image: string) => {
    setMainImage(image);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-mono font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-tech-text mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="tech-button inline-flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-tech-text mb-8">
          <Link to="/" className="hover:text-tech-accent-blue transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-tech-accent-blue transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <div className="bg-tech-card rounded-lg overflow-hidden mb-4 border border-tech-border">
              <img 
                src={mainImage} 
                alt={product.name}
                className="w-full h-96 object-contain p-6"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image: string, index: number) => (
                <div 
                  key={index}
                  className={`cursor-pointer border rounded-md overflow-hidden ${
                    mainImage === image ? 'border-tech-accent-blue neon-border' : 'border-tech-border'
                  }`}
                  onClick={() => handleImageClick(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="bg-tech-card rounded-lg p-6 border border-tech-border">
              <h1 className="text-3xl font-mono font-bold text-white mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <span className="text-2xl text-tech-accent-orange font-bold">${product.price.toFixed(2)}</span>
              </div>
              
              <div className="flex items-center mb-6">
                {product.inStock ? (
                  <div className="flex items-center text-green-500">
                    <Check className="h-5 w-5 mr-2" />
                    <span>In Stock</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-500">
                    <X className="h-5 w-5 mr-2" />
                    <span>Out of Stock</span>
                  </div>
                )}
              </div>
              
              <div className="border-t border-tech-border my-6 pt-6">
                <p className="text-tech-text mb-6">{product.description}</p>
              </div>
              
              {/* Quantity selector */}
              {product.inStock && (
                <>
                  <div className="mb-6">
                    <label className="block text-tech-text mb-2">Quantity</label>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="bg-tech-secondary h-10 w-10 flex items-center justify-center rounded-l-md border border-tech-border"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        min="1"
                        className="h-10 w-16 border-y border-tech-border text-center bg-tech-secondary"
                      />
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="bg-tech-secondary h-10 w-10 flex items-center justify-center rounded-r-md border border-tech-border"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button className="tech-button w-full flex items-center justify-center space-x-2 py-4">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </>
              )}
              
              {!product.inStock && (
                <button disabled className="bg-gray-600 text-gray-300 w-full py-4 rounded-md font-mono font-bold cursor-not-allowed">
                  Out of Stock
                </button>
              )}
            </div>
            
            {/* Additional details */}
            <div className="mt-8">
              <h3 className="font-mono font-bold text-white mb-4">More Information</h3>
              
              <div className="bg-tech-card rounded-lg border border-tech-border overflow-hidden">
                <div className="flex border-b border-tech-border">
                  <div className="w-1/3 p-4 border-r border-tech-border bg-tech-secondary">
                    <span className="text-tech-text">Category</span>
                  </div>
                  <div className="w-2/3 p-4">
                    <span className="capitalize">{product.category}</span>
                  </div>
                </div>
                <div className="flex border-b border-tech-border">
                  <div className="w-1/3 p-4 border-r border-tech-border bg-tech-secondary">
                    <span className="text-tech-text">SKU</span>
                  </div>
                  <div className="w-2/3 p-4">
                    <span>TX-{product.id}-{product.category.substring(0, 3).toUpperCase()}</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 p-4 border-r border-tech-border bg-tech-secondary">
                    <span className="text-tech-text">Warranty</span>
                  </div>
                  <div className="w-2/3 p-4">
                    <span>2 Years Limited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-mono font-bold text-white mb-6">
            Related <span className="text-tech-accent-blue">Products</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <div className="product-card">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-mono font-bold mb-2 group-hover:text-tech-accent-blue transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-tech-accent-orange font-bold">${relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
