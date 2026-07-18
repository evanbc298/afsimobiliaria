export interface Property {
  id: string;
  slug: string;
  name: string;
  developer: string;
  location: string;
  city: "Itajaí" | "Balneário Camboriú" | "Itapema";
  neighborhood: string;
  typology: string;
  area: string;
  priceMin: number;
  priceMax: number;
  priceDisplay: string;
  status: "Lançamento" | "Em Construção" | "Pronto" | "Últimas Unidades";
  tier: 1 | 2 | 3;
  description: string;
  differentials: string[];
  images: string[];
  keywords: string[];
}

export interface Neighborhood {
  id: string;
  slug: string;
  name: string;
  city: "Itajaí" | "Balneário Camboriú" | "Itapema";
  description: string;
  pricePerSqm: number;
  highlights: string[];
}

export interface BlogSection {
  heading?: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Investimento" | "Guia Prático" | "Bairros" | "Lifestyle";
  city: "Balneário Camboriú" | "Itajaí" | "Itajaí e Balneário Camboriú";
  image: string;
  imageCredit: string;
  date: string;
  readingTime: number;
  sections: BlogSection[];
  seoDescription: string;
  keywords: string[];
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message?: string;
  source: string;
  propertyId?: string;
}
