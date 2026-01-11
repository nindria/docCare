"use client";

import { useState } from "react";

export default function registerPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/auth/register", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(form),
        });
        if (res.ok) {
            alert("Register berhasil");
        } else {
            alert("Register gagal");
        }
    }
    return (
        <form onSubmit={submit}>
            <h1>Register</h1>
            <input placeholder="Nama"
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input placeholder="Email"
                onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input placeholder="Password"
                onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

