"use client";

import { IconType } from "react-icons";
import {cn} from "@/lib/utils";
import { FaRupeeSign } from "react-icons/fa";

export type CardProps = {
label: string;
icon: IconType;
amount: string;
description?: string;
}
const Card= (props: CardProps) => {
    return (
        <CardContent>
            <section className="flex justify-between gap-2">
                <p className="text-sm font-semibold tracking-wide">{props.label}</p>
                <props.icon className="h-4 w-4 text-gray-400"/>
            </section>
            <section className="flex flex-col gap-1">
                <h2 className="text-3xl font-semibold flex"><div><FaRupeeSign size={30}/></div> <div>{props.amount}</div></h2>
                <p className="text-sm text-gray-500">{props.description}</p>
            </section>
        </CardContent>
        )
}

export function CardContent(props:React.HTMLAttributes<HTMLDivElement>){
    return (<div
        {...props}
        className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow",props.className)}
        />)
}

export default Card;