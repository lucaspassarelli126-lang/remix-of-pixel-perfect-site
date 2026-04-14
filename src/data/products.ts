import product1Img from "@/assets/products/product-1.webp";
import product2Img from "@/assets/products/product-2.webp";
import product3Img from "@/assets/products/product-3.webp";
import product4Img from "@/assets/products/product-4.webp";
import product5Img from "@/assets/products/product-5.webp";
import product6Img from "@/assets/products/product-6.webp";
import productRb1Img from "@/assets/products/product-rb1.webp";
import productRb2Img from "@/assets/products/product-rb2.webp";
import productRb3Img from "@/assets/products/product-rb3.webp";
import productRb4Img from "@/assets/products/product-rb4.webp";

export interface Product {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  originalPrice: number;
  discountPercent: number;
  pixPrice: number;
  installments: number;
  installmentPrice: number;
  rating: number;
  reviewCount: number;
}

export const queridinosProducts: Product[] = [
  {
    id: "1",
    name: "Óculos de Grau Dii Collection 2215",
    brand: "Dii Collection",
    imageUrl: product1Img,
    originalPrice: 299.99,
    discountPercent: 40,
    pixPrice: 161.99,
    installments: 6,
    installmentPrice: 30.0,
    rating: 4.5,
    reviewCount: 12,
  },
  {
    id: "2",
    name: "Óculos de Grau Hit Eyewear A01",
    brand: "Hit Eyewear",
    imageUrl: product2Img,
    originalPrice: 249.99,
    discountPercent: 35,
    pixPrice: 145.99,
    installments: 6,
    installmentPrice: 27.08,
    rating: 4.8,
    reviewCount: 25,
  },
  {
    id: "3",
    name: "Óculos de Sol Ray-Ban Justin RB4165L",
    brand: "Ray-Ban",
    imageUrl: product3Img,
    originalPrice: 750.00,
    discountPercent: 20,
    pixPrice: 540.00,
    installments: 10,
    installmentPrice: 60.0,
    rating: 5.0,
    reviewCount: 48,
  },
  {
    id: "4",
    name: "Óculos de Grau Guess GU2937",
    brand: "Guess",
    imageUrl: product4Img,
    originalPrice: 599.99,
    discountPercent: 30,
    pixPrice: 377.99,
    installments: 10,
    installmentPrice: 42.0,
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "5",
    name: "Óculos de Sol Dii Collection SL2001",
    brand: "Dii Collection",
    imageUrl: product5Img,
    originalPrice: 199.99,
    discountPercent: 45,
    pixPrice: 98.99,
    installments: 4,
    installmentPrice: 27.5,
    rating: 4.3,
    reviewCount: 8,
  },
  {
    id: "6",
    name: "Óculos de Sol Prada PR 17WS",
    brand: "Prada",
    imageUrl: product6Img,
    originalPrice: 1890.00,
    discountPercent: 15,
    pixPrice: 1444.50,
    installments: 10,
    installmentPrice: 160.65,
    rating: 4.9,
    reviewCount: 32,
  },
];

export const rayBanProducts: Product[] = [
  {
    id: "rb1",
    name: "Óculos de Sol Ray-Ban Aviador RB3025L",
    brand: "Ray-Ban",
    imageUrl: productRb1Img,
    originalPrice: 850.00,
    discountPercent: 20,
    pixPrice: 612.00,
    installments: 10,
    installmentPrice: 68.0,
    rating: 5.0,
    reviewCount: 120,
  },
  {
    id: "rb2",
    name: "Óculos de Sol Ray-Ban Wayfarer RB2140",
    brand: "Ray-Ban",
    imageUrl: productRb2Img,
    originalPrice: 790.00,
    discountPercent: 18,
    pixPrice: 582.60,
    installments: 10,
    installmentPrice: 64.8,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "rb3",
    name: "Óculos de Sol Ray-Ban Clubmaster RB3016L",
    brand: "Ray-Ban",
    imageUrl: productRb3Img,
    originalPrice: 820.00,
    discountPercent: 22,
    pixPrice: 575.64,
    installments: 10,
    installmentPrice: 63.96,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "rb4",
    name: "Óculos de Sol Ray-Ban Erika RB4171L",
    brand: "Ray-Ban",
    imageUrl: productRb4Img,
    originalPrice: 680.00,
    discountPercent: 25,
    pixPrice: 459.00,
    installments: 10,
    installmentPrice: 51.0,
    rating: 4.7,
    reviewCount: 55,
  },
];
