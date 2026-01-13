import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { message: "Email dan password wajib diisi" },
                { status: 400 }
            )
        };
        const exist = await prisma.user.findUnique({
            where: { email },
        });
        if (exist) {
            return NextResponse.json(
                { message: "Email sudah terdaftar" },
                { status: 400 },
            )
        };

        const hashed = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashed,
            },
        });

        return NextResponse.json(user, { status: 201 });
    } catch (err) {
        return NextResponse.json(
            { message: "Register gagal" },
            { status: 500 }
        );
    }
}