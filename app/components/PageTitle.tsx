

import {cn} from "@/lib/utils";


type PageTitleProps = {
title: string;
className?: string;
};


const PageTitle = ({title,className}: PageTitleProps) => {
    return (
        <h1 className={cn('text-2xl font-semibold',className)}>
        {title}
        </h1>
        )
}

export default PageTitle;