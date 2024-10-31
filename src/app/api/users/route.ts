import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define the shape of the request body
interface UserRequest {
  username: string;
  phonenumber: string;
  email: string;
  address: string;
}

console.log("API route initialized: /api/user");

export async function GET() {
    console.log("GET request received on /api/user");
    return NextResponse.json({ message: "GET request successful" });
  }

export async function POST(request: Request) {
  console.log("Received POST request on /api/user");

  try {
    const data: UserRequest = await request.json();
    console.log("Request data:", data);

    const { username, phonenumber, email, address } = data;

    // Save the new user to the database
    const newUser = await prisma.users.create({
      data: { username, phonenumber, email, address },
    });

    console.log("New user created:", newUser);

    // Return a JSON response with the new user
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
    console.log("Prisma Client disconnected");
  }
}

