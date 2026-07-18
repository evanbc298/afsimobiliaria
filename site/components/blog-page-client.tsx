"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog-posts";
import { BlogCard } from "@/components/blog-card";

const CATEGORIES = ["Todos", "Investimento", "Guia Prático", "Bairros", "Lifestyle"] as const;

export function BlogPageClient() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Todos");

  const [featured, ...rest] = blogPosts;
  const filtered =
    category === "Todos" ? rest : rest.filter((p) => p.category === category);
  const showFeatured = category === "Todos";

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-afs-gold">Blog</p>
        <h1 className="mt-2 text-3xl font-bold text-afs-navy sm:text-4xl">
          Conteúdo sobre o litoral de Santa Catarina
        </h1>
        <p className="mt-3 max-w-2xl text-afs-navy/70">
          Investimento, bairros, guias práticos e lifestyle de Itajaí e Balneário Camboriú —
          escrito por quem acompanha o mercado de perto.
        </p>
      </div>

      {showFeatured && (
        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 overflow-hidden rounded-lg border border-afs-navy/10 bg-white shadow-sm transition-shadow hover:shadow-lg md:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden bg-afs-navy/5 md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span className="w-fit rounded-full bg-afs-navy px-3 py-1 text-xs font-semibold text-afs-cream">
                {featured.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-afs-navy sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-afs-navy/70">{featured.excerpt}</p>
              <span className="mt-5 inline-block w-fit text-sm font-semibold text-afs-navy group-hover:underline">
                Ler artigo →
              </span>
            </div>
          </Link>
        </div>
      )}

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-2 px-4 sm:px-6">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              category === c
                ? "border-afs-navy bg-afs-navy text-afs-cream"
                : "border-afs-navy/20 text-afs-navy/70 hover:border-afs-navy/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {filtered.length === 0 ? (
          <p className="text-center text-afs-navy/60">Nenhum artigo nessa categoria ainda.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
