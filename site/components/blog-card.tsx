import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-afs-navy/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-afs-navy/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-afs-navy text-afs-cream">{post.category}</Badge>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-afs-gold">{post.city}</p>
        <h3 className="mt-1 text-lg font-bold leading-snug text-afs-navy group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-afs-navy/70">{post.excerpt}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-afs-navy">Saiba mais →</span>
      </div>
    </Link>
  );
}
