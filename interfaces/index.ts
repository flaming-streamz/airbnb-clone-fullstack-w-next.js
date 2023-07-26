import { User as PrismaUser } from "@prisma/client";

export interface SafeUser extends Omit<PrismaUser, "createdAt" | "updatedAt" | "emailVerified"> {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}
