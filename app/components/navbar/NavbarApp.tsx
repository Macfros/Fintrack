
import Link from "next/link";
import Image from "next/image";

const NavbarApp = () => {
    return (
        <div className="p-2 flex justify-between align-middle items-center backdrop-blur-sm bg-white/30 w-screen h-17 pl-5 pr-5 overflow-hidden">
         <div className="hover:text-blue-400 text-2xl">
            <Link href="/"> Fintrack </Link>
         </div>
         <div className="   ">
            <Image src="/logo.png" height={45} width={45} alt="Logo" className="rounded-md"/>
         </div>
         <div>
         </div>
        </div>
        )
}

export default NavbarApp;