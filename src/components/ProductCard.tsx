// ProductCard.tsx
import React from 'react';

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
    };
    onImageClick: (image: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onImageClick }) => {
    return (
        <div key={product.id} className="w-72 h-auto shadow rounded bg-white mb-2">
            <div className="p-2">
                <div className="flex justify-center h-52">
                    <img
                        onClick={() => onImageClick(product.image)}
                        className="w-40 cursor-pointer"
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <h1 className="my-2 text-sm text-black text-center">{product.category}</h1>
                <p className="my-2 text-bold text-xl text-orange-400">${product.price}</p>
                <div className="flex gap-2">
                    <button onClick={() => onImageClick(product.image)} className="px-3 py-1 rounded w-full bg-slate-800 text-white">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
