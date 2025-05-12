declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    user: {
      id?: string;
      name?: string;
      email?: string;
      accessToken?: string;
      refreshToken?: string;
    };
  }

  interface User {
    id?: string;
    name?: string;
    email?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: {
      id?: string;
      name?: string;
      email?: string;
      accessToken?: string;
      refreshToken?: string;
    };
    accessToken?: string;
    refreshToken?: string;
  }
}
