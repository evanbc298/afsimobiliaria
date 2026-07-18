import { Neighborhood } from "@/lib/types";

export const neighborhoods: Neighborhood[] = [
  {
    id: "fazenda",
    slug: "fazenda",
    name: "Fazenda",
    city: "Itajaí",
    description: "Bairro consolidado e em valorização constante, concentra boa parte dos lançamentos de Itajaí.",
    pricePerSqm: 12848,
    highlights: ["Consolidado", "Em valorização", "Vários lançamentos"],
  },
  {
    id: "centro-itajai",
    slug: "centro-itajai",
    name: "Centro",
    city: "Itajaí",
    description: "Alta demanda de busca, próximo ao porto — ótimo para quem busca ticket de entrada mais baixo.",
    pricePerSqm: 12848,
    highlights: ["Alta demanda de busca", "Próximo ao porto", "Ticket de entrada"],
  },
  {
    id: "praia-brava",
    slug: "praia-brava",
    name: "Praia Brava",
    city: "Itajaí",
    description: "O bairro mais hypado da região — o \"novo Balneário Camboriú\", em plena ascensão.",
    pricePerSqm: 13500,
    highlights: ["Bairro nobre em ascensão", "Vista para o mar", "Maior valorização da região"],
  },
  {
    id: "barra-sul",
    slug: "barra-sul",
    name: "Barra Sul",
    city: "Balneário Camboriú",
    description: "Marina e luxo — endereço dos empreendimentos mais exclusivos de Balneário Camboriú.",
    pricePerSqm: 15000,
    highlights: ["Marina", "Luxo", "Empreendimentos de grife"],
  },
  {
    id: "centro-bc",
    slug: "centro-bc",
    name: "Centro",
    city: "Balneário Camboriú",
    description: "Consolidado e de alto padrão — endereço do Senna Tower.",
    pricePerSqm: 15000,
    highlights: ["Consolidado", "Alto padrão"],
  },
];
