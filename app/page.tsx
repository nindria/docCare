import Image from "next/image";
import Link from "next/link";
import Footer from "../components2/footer";

/* HOW IT WORKS */
const features = [
  {
    title: "Find Doctor",
    desc: "Search doctors by specialty and location easily.",
    icon: "/img/works1.png",
  },
  {
    title: "Book Appointment",
    desc: "Schedule your visit in just a few clicks.",
    icon: "/img/works2.png",
  },
  {
    title: "Get Treatment",
    desc: "Meet trusted doctors and get proper care.",
    icon: "/img/works3.png",
  },
];

/* HEALTH ARTICLES */
const articles = [
  {
    title: "Tips Menjaga Kesehatan Jantung Sejak Dini",
    desc: "Menjaga kesehatan jantung dapat dimulai dengan pola hidup sehat seperti olahraga rutin, makan seimbang, dan mengelola stres.",
    image: "/img/articles1.jpg",
    category: "Heart Health",
  },
  {
    title: "Pentingnya Pemeriksaan Mata Secara Rutin",
    desc: "Pemeriksaan mata rutin membantu mendeteksi gangguan penglihatan lebih awal sebelum berkembang menjadi masalah serius.",
    image: "/img/articles1.jpg",
    category: "Eye Care",
  },
  {
    title: "Cara Mengelola Stres untuk Kesehatan Mental",
    desc: "Mengelola stres dengan baik dapat meningkatkan kesehatan mental dan kualitas hidup secara keseluruhan.",
    image: "/img/articles1.jpg",
    category: "Mental Health",
  },
  {
    title: "Manfaat Olahraga Ringan Setiap Hari",
    desc: "Olahraga ringan seperti berjalan kaki atau stretching membantu menjaga kebugaran tubuh dan meningkatkan energi.",
    image: "/img/articles1.jpg",
    category: "Healthy Lifestyle",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
    {/* NAVBAR */}
<header className="w-full">
  <div className="mx-auto flex h-20 max-w-7xl overflow-hidden">
    
    {/* LEFT — LOGO */}
    <div className="flex w-1/2 items-center bg-[#D7E7EE] px-8">
      <Image
        src="/img/logo.png"
        alt="DocCare Logo"
        width={120}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </div>

    {/* RIGHT — MENU */}
    <div className="flex w-1/2 items-center justify-end bg-[#1f546b] px-8">
      <nav className="flex items-center font-medium gap-12 text-sm text-white">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/find-doctor" className="hover:underline">
          Find a doctor
        </Link>

        <Link href="/articles" className="hover:underline">
          Article
        </Link>

        <Link href="/login">
        <button className="ml-2 rounded-lg bg-[#D7E7EE] hover:bg-[#D3E2E8] px-4 py-1.5 text-sm font-medium text-[#3B9797]">
          Sign in
        </button>
        </Link>

      </nav>
    </div>
  </div>
</header>

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex min-h-[420px] flex-col justify-center bg-[#D7E7EE] px-6 py-12 md:px-16">
          <h1 className="text-4xl font-bold leading-tight text-[#1f546b]">
            <span className="text-teal-500">Well-Cared Health,</span>
            <br />
            A More Meaningful
            <br />
            Life
          </h1>

          <p className="mt-6 max-w-md text-sm text-gray-600">
            Providing professional, safe, and compassionate healthcare
            to support every step of your journey toward a healthier life.
          </p>
        </div>

        <div className="flex min-h-[420px] items-center justify-center bg-[#1f546b] px-6">
          <Image
            src="/img/doctor2.png"
            alt="Doctor Illustration"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h3 className="mb-12 text-center text-3xl font-semibold text-[#1D546D]">
          How it works
        </h3>

        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          {features.map((item) => (
            <div key={item.title}>
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={65}
                  height={50}
                />
              </div>
              <h4 className="text-lg font-semibold text-[#1f546b]">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-[#E6F7FE] p-10 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-xl md:h-80">
            <Image
              src="/img/doctor1.png"
              alt="Book an Appointment"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-8 text-center text-3xl font-semibold text-[#1D546D]">
              Book an Appointment
            </h3>

            <ul className="space-y-3 text-[#1f546b]">
              <li>✓ Find the Right Specialist</li>
              <li>✓ Connect with Trusted Doctors</li>
              <li>✓ Book Appointments in Minutes</li>
              <li>✓ Schedule Your Visit with Ease</li>
            </ul>
          <Link href="/find-doctor">
            <button className="mt-8 w-full rounded-lg bg-[#1f546b] py-3 text-white hover:bg-[#173f52]">
              Book Now
            </button>
          </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h3 className="mb-12 text-center text-3xl font-semibold text-[#1D546D]">
          Health Articles
        </h3>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {articles.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <span className="text-xs font-medium text-teal-500">
                  {item.category}
                </span>

                <h4 className="mt-2 line-clamp-2 text-sm font-semibold text-[#1f546b]">
                  {item.title}
                </h4>

                <p className="mt-2 line-clamp-3 text-xs text-gray-500">
                  {item.desc}
                </p>

                <Link
                  href="/article"
                  className="mt-4 inline-block text-xs font-medium text-[#1f546b] hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
