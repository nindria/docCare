export interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

export const doctors = [
  {
    id: 1,
    name: "Dr. Astri Kartika Sari",
    specialty: "general-practitioner",
    title: "Dokter Umum",
    experience: 7,
    rating: 100,
    price: 25000,
    image: "/img/dokter1.JPG",
  },
  {
    id: 2,
    name: "Dr. Yuni Puspita Sari Manullang",
    specialty: "general-practitioner",
    title: "Dokter Umum",
    experience: 2,
    rating: 84,
    price: 25000,
    image: "/img/dokter1.JPG",
  },
  {
    id: 3,
    name: "Dr. Muhammad Albie",
    specialty: "general-practitioner",
    title: "Dokter Umum",
    experience: 7,
    rating: 83,
    price: 25000,
    image: "/img/dokter1.JPG",
  },
  {
    id: 4,
    name: "Dr. Inna Fitriana Zain",
    specialty: "general-practitioner",
    title: "Dokter Umum",
    experience: 1,
    rating: 95,
    price: 25000,
    image: "/img/dokter1.JPG",
  },


  // ====================
  // SPESIALIS JANTUNG
  // ====================
  {
    id: 5,
    name: "Dr. Ahmad Pratama, Sp.JP",
    specialty: "heart-specialist",
    title: "Spesialis Jantung",
    experience: 10,
    rating: 98,
    price: 45000,
    image: "/img/dokter1.JPG",
  },
  {
    id: 6,
    name: "Dr. Siti Rahmawati, Sp.JP",
    specialty: "heart-specialist",
    title: "Spesialis Jantung",
    experience: 6,
    rating: 92,
    price: 45000,
    image: "/img/dokter1.JPG",
  },
];


