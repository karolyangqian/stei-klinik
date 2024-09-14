import exp from "constants";
import { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.SECRET,
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(authOptions);
    if (!session) return redirect("/login");
}

// export function loginIsRequiredClient() {
//     if (typeof window !== "undefined") {
//       const session = useSession();
//       const router = useRouter();
//       if (!session) router.push("/login");
//     }
//   }