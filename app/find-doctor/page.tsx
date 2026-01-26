"use client";

import Navbar from "../../components2/navbar";
import Footer from "../../components2/footer";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "General practitioners", slug: "general-practitioner", icon: "/img/dokterumum.png" },
  { title: "Heart Specialist", slug: "heart-specialist", icon: "/img/spesialisjantung.png" },
  { title: "Neurologist", slug: "neurologist", icon: "/img/health.png" },
  { title: "Pediatric Specialist", slug: "pediatric-specialist", icon: "/img/dokteranak.png" },
  { title: "Dentist", slug: "dentist", icon: "/img/doktergigi.png" },
  { title: "Veterinarian", slug: "veterinarian", icon: "/img/dokterhewan.png" },
  { title: "Psychiatrist", slug: "psychiatrist", icon: "/img/psikiater.png" },
  { title: "ENT Specialist", slug: "ent-specialist", icon: "/img/THT.png" },
];

export default function FindDoctor() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#245b72] px-6 py-20 text-center text-white md:py-28">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Find a Doctor or Specialist
        </h1>

        <p className="mt-4 text-white/80">
          Choose an available category based on your condition
        </p>

        {/* SEARCH */}
        <form
          className="mx-auto mt-10 flex max-w-xl items-center rounded-lg bg-white px-4 py-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search doctor, specialist, or symptoms"
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

      {/* CATEGORY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-3 md:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`/find-doctor/${item.slug}`}
              className="flex flex-col items-center gap-4 transition hover:scale-105"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e9f6fb] md:h-28 md:w-28">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                />
              </div>

              <p className="text-sm font-medium text-[#1f546b] md:text-base">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
