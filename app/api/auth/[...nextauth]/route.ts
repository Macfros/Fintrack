import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const handler =   NextAuth({
        adapter: PrismaAdapter(prisma),
        providers: [
                CredentialsProvider({
                    name: 'credentials',
                   credentials: {
                      username: { label: "Username", type: "text", placeholder: "jsmith" },
                      password: { label: "Password", type: "password" },
                      email: {label: "email", type: "email"}
                    },
                    async authorize(credentials) {
                      // Add logic here to look up the user from the credentials supplied

                        if(!credentials.username || !credentials.password) {
                            return null;
                        }

                        const user = prisma.user.findUnique({
                            where: {
                                email: credentials.username,
                            }
                        });

                        if(!user){
                            return null;
                        }

                        const passwordmatch = bcrypt.compare(user.hashedpassword, credentials.password);
                        if(!passwordmatch){
                            return null;
                        }

                        return user;
                    }
                })
            ],
        session : {
            strategy: "jwt",
        },
        secret:process.env.NEXTAUTH_SECRET,
        debug:process.env.NODE_ENV=="development",
})

export { handler as GET, handler as POST }
