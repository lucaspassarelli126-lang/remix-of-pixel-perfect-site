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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/304889/oculos-de-grau-dii-collection-2215-c3-52.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/307273/oculos-de-grau-hit-eyewear-a01-c2-51.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/286994/oculos-de-sol-ray-ban-justin-rb4165l-622-55.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/309508/oculos-de-grau-guess-gu2937-005-54.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/305120/oculos-de-sol-dii-collection-sl2001-c1-55.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/298737/oculos-de-sol-prada-pr-17ws-1ab5s0-49.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/286753/oculos-de-sol-ray-ban-aviador-rb3025l-001-58.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/286808/oculos-de-sol-ray-ban-wayfarer-rb2140-901-54.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/286824/oculos-de-sol-ray-ban-clubmaster-rb3016l-w0365-51.jpg",
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
    imageUrl: "https://oticasdiniz.vtexassets.com/arquivos/ids/286860/oculos-de-sol-ray-ban-erika-rb4171l-622-8g-54.jpg",
    originalPrice: 680.00,
    discountPercent: 25,
    pixPrice: 459.00,
    installments: 10,
    installmentPrice: 51.0,
    rating: 4.7,
    reviewCount: 55,
  },
];
