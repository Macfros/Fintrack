"use client"

import { SessionProvider } from "next-auth/react";
import {NextUIProvider} from '@nextui-org/react'

export default function Provider({ children, session}){
    return (
        <NextUIProvider>
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
        </NextUIProvider>
        )
}