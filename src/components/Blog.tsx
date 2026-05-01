import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

export const Blog = () => {
  return (
    <section id="blog" className="py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Le journal</p>
          <h2 className="heading-section mb-6">Inspirations & récits</h2>
          <span className="gold-divider" />
          <p className="lead-muted max-w-xl mx-auto mt-6">
            Plongez dans nos articles dédiés à l'art, à la gastronomie et à la culture béninoise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <article
              key={post.slug}
              className="group bg-card border border-border hover-lift shadow-soft animate-fade-in flex flex-col"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Link to={`/blog/${post.slug}`} className="block image-zoom aspect-[16/10] bg-muted">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-accent mb-3">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                  <span className="text-muted-foreground normal-case tracking-normal">{post.readTime}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3 leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-smooth">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs uppercase tracking-widest text-primary-deep hover:text-accent transition-smooth mt-auto"
                >
                  Lire l'article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
