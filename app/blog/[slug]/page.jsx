import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Tag,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogPosts';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | CSA Technologies CO Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Article Header */}
      <section className="relative bg-[#060e1a] text-white py-16 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-main relative z-10 max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4 text-xs">
            <Badge className="bg-brand-blue/20 text-brand-blue border border-brand-blue/30 text-xs">
              {post.category}
            </Badge>
            <span className="text-white/60 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-white/60 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-[1.15] text-white mb-6">
            {post.title}
          </h1>

          {/* Author Strip */}
          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm">
              CK
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author.name}</div>
              <div className="text-xs text-white/60">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner & Content */}
      <section className="py-12 bg-white">
        <div className="container-main max-w-3xl mx-auto">
          {/* Article Banner Graphic */}
          <div className="rounded-2xl overflow-hidden border border-brand-border bg-[#061426] shadow-card-light mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Render Content */}
          <article className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-brand-text-dark prose-p:leading-relaxed prose-p:text-[16px] prose-li:text-brand-text-dark prose-strong:text-brand-text-dark">
            <div className="whitespace-pre-line text-brand-text-dark leading-relaxed text-[16px]">
              {post.content.trim()}
            </div>
          </article>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-brand-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-brand-text-muted mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium bg-brand-light-bg border border-brand-border rounded-lg text-brand-text-dark"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 bg-brand-light-bg rounded-2xl border border-brand-border p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-heading font-bold text-xl flex items-center justify-center shrink-0">
              CK
            </div>
            <div>
              <div className="text-base font-heading font-bold text-brand-text-dark">
                {post.author.name}
              </div>
              <div className="text-xs text-brand-blue font-semibold mb-2">
                {post.author.role}
              </div>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Leads web engineering and cloud systems at CSA Technologies CO. Focused on high-throughput microservices, React Server Components, and zero-downtime continuous deployment.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-brand-border">
              <h3 className="text-xl font-heading font-bold text-brand-text-dark mb-6">
                Related Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.id}
                    href={`/blog/${rPost.slug}`}
                    className="group bg-white rounded-xl border border-brand-border p-5 hover:shadow-card-hover hover:border-brand-blue/30 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-brand-blue uppercase">
                        {rPost.category}
                      </span>
                      <h4 className="text-sm font-heading font-bold text-brand-text-dark mt-1 group-hover:text-brand-blue transition-colors">
                        {rPost.title}
                      </h4>
                    </div>
                    <div className="text-xs text-brand-blue font-semibold mt-4 flex items-center gap-1">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blue-hover"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="bg-[#060e1a] py-16 text-white relative overflow-hidden">
        <div className="container-main text-center relative z-10 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-2 block">
            READY TO UPGRADE YOUR TECH STACK?
          </span>
          <h2 className="text-3xl font-heading font-extrabold tracking-tight">
            Consult With Our Principal Architects
          </h2>
          <p className="text-white/70 text-sm mt-3 mb-6">
            Get an objective architecture evaluation and modern web development plan for your company.
          </p>
          <Button href="/contact" size="lg">
            Schedule an Inquiry Call
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>
    </div>
  );
}
