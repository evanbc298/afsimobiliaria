export interface Property {
  id: string;
  slug: string;
  name: string;
  developer: string;
  location: string;
  city: "Itajaí" | "Balneário Camboriú";
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
  city: "Itajaí" | "Balneário Camboriú";
  description: string;
  pricePerSqm: number;
  highlights: string[];
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
