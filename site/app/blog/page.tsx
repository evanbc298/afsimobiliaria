import type { Metadata } from "next";
import { BlogPageClient } from "@/components/blog-page-client";

const title = "Blog — Mercado Imobiliário Itajaí e Balneário Camboriú";
const description =
  "Análises, guias práticos e conteúdo de lifestyle sobre o mercado imobiliário do litoral norte de Santa Catarina.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/" },
  openGraph: { title, description, type: "website", url: "https://afsimobiliaria.com.br/blog/" },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
