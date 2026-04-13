import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const salePrice = product.originalPrice * (1 - product.discountPercent / 100);

  return (
    <div className="bg-background border border-border rounded-lg p-3 flex flex-col h-full group hover:shadow-lg transition-shadow">
      {product.discountPercent > 0 && (
        <div className="flex justify-end mb-1">
          <span className="bg-primary text-primary-foreground text-[11px] font-bold px-2 py-0.5 rounded">
            -{product.discountPercent}%
          </span>
        </div>
      )}

      <div className="flex items-center justify-center h-36 mb-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>

      <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
        {product.brand}
      </span>

      <h3 className="text-xs font-medium text-foreground mt-1 line-clamp-2 min-h-[32px]">
        {product.name}
      </h3>

      <div className="flex items-center gap-1 mt-1.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < Math.floor(product.rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-border"
            }`}
          />
        ))}
        <span className="text-[10px] text-muted-foreground">({product.reviewCount})</span>
      </div>

      <div className="mt-2 flex-1">
        {product.discountPercent > 0 && (
          <p className="text-xs text-muted-foreground line-through">
            R$ {product.originalPrice.toFixed(2).replace(".", ",")}
          </p>
        )}
        <p className="text-base font-bold text-foreground">
          R$ {salePrice.toFixed(2).replace(".", ",")}
        </p>
        <p className="text-[11px] font-semibold flex items-center gap-1 mt-0.5 text-emerald-700">
          <span className="bg-emerald-700 text-primary-foreground text-[9px] px-1 rounded font-bold">PIX</span>
          R$ {product.pixPrice.toFixed(2).replace(".", ",")}
        </p>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          ou {product.installments}x de R$ {product.installmentPrice.toFixed(2).replace(".", ",")} sem juros
        </p>
      </div>

      <div className="flex flex-col gap-1.5 mt-3">
        <button className="w-full bg-primary text-primary-foreground text-xs font-bold py-2 rounded hover:bg-primary/90 transition-colors">
          Comprar com Grau
        </button>
        <button className="w-full border border-primary text-primary text-xs font-bold py-2 rounded hover:bg-primary/5 transition-colors flex items-center justify-center gap-1.5">
          <ShoppingCart className="h-3.5 w-3.5" />
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
