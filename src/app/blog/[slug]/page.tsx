// src/app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc'; // 🧠 The compiler import

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  
  const filePath = path.join(process.cwd(), 'content', 'articles', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans">
      
      {/* MINIMAL NAVIGATION HEADER */}
      <nav className="border-b border-zinc-900 bg-zinc-950/50 backdrop-blur sticky top-0 z-50 px-6 md:px-12 py-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-serif font-bold tracking-tight text-zinc-200 hover:text-amber-500 transition-colors">
            ⚔️ Continent Codex
          </Link>
          <Link href="/blog" className="text-xs uppercase tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors">
            &larr; Back to Archives
          </Link>
        </div>
      </nav>

      {/* ARTICLE WRAPPER */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-8">
        
        {/* METADATA HEADER */}
        <header className="space-y-4 border-b border-zinc-800 pb-8">
          {frontmatter.faction && (
            <span className="text-xs uppercase tracking-widest text-amber-500 font-mono">
              {frontmatter.faction}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-50 leading-tight">
            {frontmatter.title}
          </h1>
          {frontmatter.title_extra && (
            <p className="text-sm italic text-zinc-400 mt-1">{frontmatter.title_extra}</p>
          )}
          <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono pt-2">
            <span>Recorded: {frontmatter.date}</span>
            {frontmatter.author && <span>• Archivist: {frontmatter.author}</span>}
          </div>
        </header>

          {/* REPLACED MARKDOWN CONTENT CONTAINER */}
          <div className="prose prose-zinc max-w-none 
            /* Core Contrast Reset for Dark Themes */
            text-zinc-300
            
            /* Heading Enhancements */
            prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-zinc-50 prose-h2:text-zinc-100 prose-h3:text-zinc-200
            prose-h2:text-2xl prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-2 prose-h2:mt-12
            
            /* Inline Formatting Elements */
            prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-zinc-50 prose-strong:font-bold
            prose-em:text-zinc-200
            prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-a:underline prose-a:decoration-amber-500/30
            
            /* Lists & Structural Markup */
            prose-ul:list-disc prose-ol:list-decimal prose-li:text-zinc-300
            prose-blockquote:border-l-2 prose-blockquote:border-amber-500/60 prose-blockquote:bg-zinc-900/40 prose-blockquote:px-5 prose-blockquote:py-2 prose-blockquote:rounded-r prose-blockquote:italic prose-blockquote:text-zinc-400">
            
            <MDXRemote source={content} />

          </div>
      </main>
    </div>
  );
}