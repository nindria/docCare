import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components2/navbar";
import Footer from "../../../components2/footer";
import { articles } from "../../../data/articles";

export default function ArticleDetail({ params }) {
  
  const article = articles.find(
    (item) => item.slug === params.slug
  );

  if (!article) {
    return (
      <>
        <Navbar />
        
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold text-[#1f546b]">
            Article not found
          </h2>
          <Link
            href="/article"
            className="mt-4 inline-block text-[#1f546b] underline"
          >
            Back to Article
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* BACK */}
        <Link
          href="/article"
          className="mb-6 inline-block text-sm text-[#1f546b]"
        >
          ← Back to Article
        </Link>

        {/* TITLE */}
        <h1 className="mb-4 text-3xl font-bold text-[#1f546b]">
          {article.title}
        </h1>

        {/* META */}
        <div className="mb-6 flex gap-4 text-sm text-gray-500">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        {/* IMAGE */}
        <div className="mb-8 overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {article.content
            .trim()
            .split("\n")
            .map((text, index) => (
              <p key={index}>{text}</p>
            ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
