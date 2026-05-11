# Integration Guide: Standard SQL Server (MySQL/PostgreSQL)

This guide explains how to connect your Next.js application to a standard SQL database host (e.g., cPanel, VPS, AWS RDS) using **Prisma ORM**. This is the industry-standard way to handle database connections safely in modern web apps.

## 1. Prerequisites

-   A running MySQL or PostgreSQL database.
-   Database credentials: `HOST`, `PORT`, `USER`, `PASSWORD`, `DATABASE_NAME`.
-   **Important**: If your database is on a shared host (like cPanel/Bluehost/HostGator), you must **whitelist the IP address** of where your Next.js app is deployed (e.g., Vercel/Netlify IPs), or use a connection string that allows remote access.

## 2. Install Prisma

Run the following commands in your project terminal:

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

This will create a `prisma` folder and a `.env` file in your project.

## 3. Configure Connection

Open the `.env` file and set your `DATABASE_URL`.

**For MySQL:**
```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DATABASE_NAME"
```

**For PostgreSQL:**
```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE_NAME?schema=public"
```

## 4. Define Database Schema

Open `prisma/schema.prisma` and define your tables.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // Change to "postgresql" if needed
  url      = env("DATABASE_URL")
}

model ContactSubmission {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  firstName String
  lastName  String
  email     String
  phone     String?
  country   String
  interest  String?
  message   String   @db.Text
  status    String   @default("new")
}

model QuoteRequest {
  id              Int      @id @default(autoincrement())
  createdAt       DateTime @default(now())
  firstName       String
  lastName        String
  email           String
  phone           String?
  country         String
  tripType        String
  destinations    String?
  travelDates     String?
  duration        String?
  travelers       String?
  budget          String?
  accommodation   String?
  specialRequests String?  @db.Text
  status          String   @default("new")
}
```

## 5. Sync Database

Run this command to push your schema changes to the database:

```bash
npx prisma db push
```

## 6. Create Prisma Client Instance

Create a file `src/lib/prisma.ts` to prevent multiple connection instances:

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

## 7. Update API Route

Modify your API route (e.g., `src/app/api/email/route.ts`) to save data using Prisma.

```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();
  const { firstName, lastName, email, phone, country, message, interest, ...otherData } = data;

  try {
    // 1. Save to Database
    if (!otherData.tripType) {
      // Contact Form
      await prisma.contactSubmission.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
          country,
          interest,
          message,
        },
      });
    } else {
      // Quote Request
      await prisma.quoteRequest.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
          country,
          tripType: otherData.tripType,
          destinations: otherData.destinations,
          travelDates: otherData.travelDates,
          duration: otherData.duration,
          travelers: otherData.travelers,
          budget: otherData.budget,
          accommodation: otherData.accommodation,
          specialRequests: otherData.specialRequests,
        },
      });
    }

    // 2. Send Email (Keep your existing email code here)
    // ...

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
```

## 8. View Your Data

Prisma comes with a built-in GUI to view your data. Run:

```bash
npx prisma studio
```

This will open a web page at `http://localhost:5555` where you can see all your database records.
