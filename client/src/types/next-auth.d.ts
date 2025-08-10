

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      firstName?: string
      lastName?: string
      accessToken?: string
    }
  }

  interface User {
    id: string
    email: string
    name: string
    firstName: string
    lastName: string
    accessToken: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    firstName?: string
    lastName?: string
    accessToken?: string
  }
} 