import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} | ARTISTIK`;
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute("content", post.excerpt);
    if (!meta.parentNode) document.head.appendChild(meta);
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
    };
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-40 text-center">
          <h1 className="heading-section mb-4">Article introuvable</h1>
          <Link to="/#blog" className="text-primary-deep hover:text-accent transition-smooth">
            Retour au blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-smooth mb-8"
          >
            <ArrowLeft size={14} /> Retour au journal
          </Link>

          <p className="eyebrow mb-4">{post.category}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground mb-10">
            <time>{new Date(post.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}</time>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span>{post.readTime} de lecture</span>
          </div>

          <div className="aspect-[16/9] overflow-hidden mb-12 shadow-elegant">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" width={1200} height={675} />
          </div>

          <div className="prose-artistik space-y-6">
            {post.content.map((p, i) => (
              <p key={i} className="text-lg text-foreground/85 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 p-8 bg-primary-deep text-white text-center">
            <p className="eyebrow text-gold mb-3">Envie d'aller plus loin ?</p>
            <h3 className="font-display text-2xl mb-4">Découvrez nos œuvres et notre cuisine</h3>
            <Link
              to="/#galerie"
              className="inline-block px-8 py-3 bg-gradient-gold text-accent-foreground uppercase tracking-widest text-xs font-medium shadow-gold hover:opacity-90 transition-smooth"
            >
              Explorer la galerie
            </Link>
          </div>
        </div>
      </article>

      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="heading-section text-center mb-12">À lire aussi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-card border border-border hover-lift shadow-soft block"
              >
                <div className="image-zoom aspect-[16/10]">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-2">{p.category}</p>
                  <h3 className="font-display text-xl text-foreground leading-snug group-hover:text-primary transition-smooth">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
