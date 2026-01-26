"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { doctors } from "../../../data/doctors";
import Navbar from "../../../components2/navbar";
import Footer from "../../../components2/footer";
import DoctorCard from "../../../components2/doctorCard";
import FormBook from "../../../components2/formBook";

type FormData = {
  name: string;
  birth: string;
  phone: string;
  email: string;
  gender: string;
};

export default function DoctorsPage() {
  const { slug } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    birth: "",
    phone: "",
    email: "",
    gender: "",
  });

  const handleSubmit = () => {
    console.log("DATA FORM:", form);

    if (!form.name || !form.phone || !form.email) {
      alert("Mohon lengkapi data terlebih dahulu");
      return;
    }

    alert("Pendaftaran berhasil!");
    setOpenModal(false);

    // reset form
    setForm({
      name: "",
      birth: "",
      phone: "",
      email: "",
      gender: "",
    });
  };

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.slug === slug
  );

  if (filteredDoctors.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        Doctor not found for this category
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              doctor={doctor}
              onChat={() => setOpenModal(true)}
            />
          ))}
        </div>
      </section>

      <FormBook
        open={openModal}
        onClose={() => setOpenModal(false)}
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
      />

      <Footer />
    </>
  );
}
