"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components2/navbar";
import Footer from "../../components2/footer";
import { articles } from "../../data/articles";

export default function ArticlePage() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#245b72] px-6 py-20 text-center text-white md:py-28">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Explore Health Articles
        </h1>
        <p className="mt-4 text-white/80">
          Read trusted articles to better understand your health
        </p>

        {/* SEARCH */}
        <form
          className="mx-auto mt-10 flex max-w-xl items-center rounded-lg bg-white px-4 py-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search health articles or topics"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-sm text-gray-700 outline-none"
          />

          <button type="submit" className="ml-2">
            <Image
              src="/img/search.png"
              alt="Search"
              width={20}
              height={20}
              className="cursor-pointer opacity-70 hover:opacity-100"
            />
          </button>
        </form>
      </section>

      {/* ARTICLES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-10 text-center text-3xl font-semibold text-[#1f546b]">
          Health Articles
        </h1>

        {filteredArticles.length === 0 ? (
          <p className="text-center text-gray-500">
            No articles found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {filteredArticles.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border shadow-sm"
              >
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#1f546b]">
                    {item.title}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600">
                    {item.excerpt}
                  </p>

                  <Link
                    href={`/article/${item.slug}`}
                    className="text-sm font-semibold text-[#1f546b] hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
