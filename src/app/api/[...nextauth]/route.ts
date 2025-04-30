import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "ایمیل", type: "text" },
        password: { label: "رمز عبور", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            "https://delta-project.liara.run/api/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const rawText = await res.text();

          try {
            const data = JSON.parse(rawText);

            if (!res.ok || !data || !data.token) {
              console.error("Login failed (bad response):", data);
              return null;
            }

            return {
              id: data.id,
              name: data.fullName,
              email: data.email,
              token: data.token,
            };
          } catch (jsonErr) {
            console.error("Failed to parse JSON:", jsonErr);
            console.error("Raw response text:", rawText);
            return null;
          }
        } catch (err) {
          console.error("Network or server error:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
