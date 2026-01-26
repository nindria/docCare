import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components2/navbar";
import Footer from "../../../components2/footer";
import { articles } from "../../../data/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticleDetail({ params }: Props) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold text-[#1f546b]">
            Article not found
          </h2>
          <Link href="/articles" className="mt-4 inline-block underline">
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
        <Link
          href="/articles"
          className="mb-6 inline-block text-sm text-[#1f546b]"
        >
          ← Back to Article
        </Link>

        <h1 className="mb-4 text-3xl font-bold text-[#1f546b]">
          {article.title}
        </h1>

        <div className="mb-6 flex gap-4 text-sm text-gray-500">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          {article.content
            .trim()
            .split("\n")
            .filter(Boolean)
            .map((text, i) => (
              <p key={i}>{text}</p>
            ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
