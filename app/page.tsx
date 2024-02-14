import Image from "next/image";
import Link from "next/link";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Button from "@/app/components/Button";
import Switching from "@/app/components/Switching";
import Info from "@/app/components/Info";

export default async function Home() {
  return (
    <main className="absolute -top-2">
      <Image
        src="/backimg.png"
        alt="Background Image"
        width={500}
        height={500}
        className="absolute -z-10 h-screen w-screen"
      />
      <div className="flex md:p-20 h-full md:h-screen">
        <div className="flex flex-col md:flex-row h-full w-11/12 md:w-4/5 lg:w-3/4 justify-center items-center mx-auto shadow-xl">
          <div className="bg-blue-200 h-full w-1/2 p-8 overflow-y-hidden">
            <Info />
          </div>
          <div className="backdrop-blur-sm bg-white/30 h-full w-1/2 align-middle flex justify-center items-center">
            <Switching />
          </div>
        </div>
      </div>
      {/*<h1> NextAuth JS </h1>
      <Link href="/register" > Register </Link>
      <Link href="/login" > Login </Link>*/}
    </main>
  );
}
