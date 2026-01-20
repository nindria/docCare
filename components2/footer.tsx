import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f546b] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/logoDoccare2.png" 
              alt="DocCare"
              width={150} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Tagline */}
          <p className="mt-4 text-sm text-white/90">
            Well-Cared <span className="text-[#67C9C3]">Health,</span> A More Meaningful{" "}
            <span className="text-[#67C9C3]">Life</span>
          </p>
        </div>

        {/* Information */}
        <div>
          <h4 className="mb-4 font-semibold">Information</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Specialist */}
        <div>
          <h4 className="mb-4 font-semibold">Specialist</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              "Dermatologist",
              "Ophthalmologist",
              "Psychiatrist",
              "Ortodontist",
              "Physiotherapist",
              "General Dentist",
              "Psychologist",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold">Contact Us</h4>
          <p className="text-sm text-white/70">help@doccare.com</p>
          <p className="mt-2 text-sm text-white/70">021-9898-4657</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center gap-4 text-lg">
          {/* Ganti dengan path ikon Anda yang sebenarnya */}
          <Link href="#">
            <Image src="/img/instagram.png" alt="Instagram" width={28} height={28} />
          </Link>
          <Link href="#">
            <Image src="/img/whatsapp.png" alt="WhatsApp" width={28} height={28} />
          </Link>
          <Link href="#">
            <Image src="/img/youtube.png" alt="YouTube" width={28} height={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}