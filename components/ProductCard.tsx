
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { generateProductImage } from '../services/geminiService';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const url = await generateProductImage(product.imagePrompt);
      setImageUrl(url);
      setLoading(false);
    };
    fetchImage();
  }, [product.imagePrompt]);

  return (
    <div className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden bg-neutral-950 flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs text-neutral-500 animate-pulse">Forging Visual...</span>
          </div>
        ) : imageUrl ? (
          <img 
            src={imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="text-neutral-700 italic">Preview Unavailable</div>
        )}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border border-white/10">
          {product.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">{product.name}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">In Production</span>
          <button className="text-red-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-2">
            Details <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
