import { IconType } from "react-icons";

type BillsCardProps = {
name: string;
category: string;
icon: IconType;
amount: string;
}

const BillsCard = (props: BillsCardProps) => {
    return (
        <div className="flex flex-wrap justify-between gap-3">
            <section className="flex justify-between gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
                    <props.icon size={40}/>
                </div>
                <div className="text-sm">
                    <p>{props.name}</p>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto  text-gray-400">{props.category}</div>
                </div>
                <p className="text-semibold">{props.amount}</p>
            </section>
        </div>
        )
}

export default BillsCard;