"use client";

import {ReactNode} from "react";
import SidebarProvider from "./sidebar/SidebarContext";

interface Props{
    children:ReactNode | ReactNode[]
}

const BaseLayout = ({children}: Props) => {
    return (
        <SidebarProvider>
        <div className="layout">
            {children}
        </div>
        </SidebarProvider>
        )
}
export default BaseLayout;