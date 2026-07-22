import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts";
import { whatsappLink } from "@/lib/whatsapp";

const SITE_URL = "https://afsimobiliaria.com.br";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}/`,
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}/`,
    author: { "@type": "Organization", name: "AFS Imobiliária" },
    publisher: { "@type": "Organization", name: "AFS Imobiliária", logo: `${SITE_URL}/logo.png` },
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd data={jsonLd} />

      <p className="text-sm text-afs-navy/50">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>{" "}
        / {post.category}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Badge className="bg-afs-navy text-afs-cream">{post.category}</Badge>
        <span className="text-sm text-afs-navy/60">{post.city}</span>
        <span className="text-sm text-afs-navy/40">·</span>
        <span className="text-sm text-afs-navy/60">{post.readingTime} min de leitura</span>
      </div>

      <h1 className="mt-4 text-3xl font-bold leading-tight text-afs-navy sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-8 overflow-hidden rounded-lg bg-afs-navy/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} className="w-full object-cover" />
      </div>
      <p className="mt-2 text-xs text-afs-navy/40">{post.imageCredit}</p>

      <div className="mt-8 space-y-6">
        {post.sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="mb-3 text-xl font-bold text-afs-navy">{section.heading}</h2>
            )}
            {section.body.map((paragraph, j) => (
              <p key={j} className="mb-4 leading-relaxed text-afs-navy/80">
                {paragraph}
              </p>
            ))}
            {section.links && section.links.length > 0 && (
              <p className="mb-4 flex flex-wrap gap-x-2 gap-y-1 text-sm">
                <span className="text-afs-navy/50">Confira:</span>
                {section.links.map((link, k) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium text-afs-navy underline decoration-afs-gold decoration-2 underline-offset-2 hover:text-afs-gold"
                  >
                    {link.label}
                    {k < section.links!.length - 1 && <span className="text-afs-navy/30 no-underline">,</span>}
                  </Link>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg bg-afs-navy px-6 py-8 text-center">
        <p className="text-lg font-semibold text-afs-cream">
          Quer conversar sobre isso com um especialista?
        </p>
        <p className="mt-1 text-sm text-afs-cream/70">
          A AFS te ajuda a encontrar o imóvel certo, do início às chaves.
        </p>
        <Button asChild size="lg" className="mt-5 bg-afs-gold text-afs-navy hover:bg-afs-gold/90">
          <a
            href={whatsappLink(`Olá! Li o artigo "${post.title}" no blog e quero saber mais.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </Button>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-5 text-xl font-bold text-afs-navy">Continue lendo</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group block overflow-hidden rounded-lg border border-afs-navy/10 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden bg-afs-navy/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="p-3 text-sm font-semibold text-afs-navy group-hover:underline">
                  {r.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
