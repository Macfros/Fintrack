import bcrypt from "bcrypt";
import {PrismaClient} from "@prisma/client"
import { NextResponse } from "next/server";

const prisma =new PrismaClient();

export async function POST(request){
const body =await request.json();
const {name,username,password} = body.data;
        if(!name || !username || !password){
            return new NextResponse("Missing name,email,password",{status: 400});
        }


        const exist =await prisma.user.findUnique({
                where: {
                email: username
                }
        });

            if(exist) {
                return new NextResponse("User already exists",{status: 400});
            }

                const hashedpassword =await bcrypt.hash(password,10);
                    const user =await prisma.user.create({
                            data:{
                                name,
                                email: username,
                                hashedpassword,
                            }
                    });

            return NextResponse.json(user);
}

