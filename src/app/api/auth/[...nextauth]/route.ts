import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  // Extending the Session type
  interface Session {
    user: {
      username: string;
      uid: string;
    } & DefaultSession["user"];
  }
}

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error(
    "Missing Google OAuth credentials: Check GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables."
  );
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.username = (session.user.name ?? "John Doe")
          ?.split(" ")
          .join("")
          .toLocaleLowerCase();
        session.user.uid = token.sub!;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
