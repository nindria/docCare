"use client";

import { useState } from "react";
import DoctorSidebar from "../../../components2/sidebarDoctor";

type Message = {
  id: number;
  sender: "patient" | "doctor";
  text: string;
  time: string;
};

export default function DoctorChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "patient",
      text: "Dok, saya demam sejak tadi malam",
      time: "08:15",
    },
    {
      id: 2,
      sender: "doctor",
      text: "Apakah disertai batuk atau sakit tenggorokan?",
      time: "08:17",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "doctor",
      text: input,
      time: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <DoctorSidebar />

<main className="flex-1 ml-64 p-8">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Chat Pasien</h1>
          <p className="mt-1 text-sm text-slate-500">
            Balas pesan dan konsultasi dari pasien
          </p>
        </div>

        {/* CHAT CONTAINER */}
        <div className="mt-6 flex flex-1 flex-col rounded-xl bg-white shadow-sm">
          
          {/* MESSAGES */}
          <div className="flex-1 space-y-4 overflow-y-auto p-6 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "doctor" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs rounded-2xl px-4 py-2 text-sm shadow ${
                    msg.sender === "doctor"
                      ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-br-none"
                      : "bg-white text-slate-700 rounded-bl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="mt-1 block text-[10px] opacity-70 text-right">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT AREA */}
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Ketik balasan untuk pasien..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                onClick={handleSend}
                className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
