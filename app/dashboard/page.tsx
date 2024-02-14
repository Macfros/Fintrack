"use client"

import {useSession} from "next-auth/react";
import SubNavbar from "./../components/subNavbar/SubNavbar";
import Sidebar from "./../components/sidebar/Sidebar";
import BaseLayout from "./../components/BaseLayout";
import PageTitle from "./../components/PageTitle";
import BarChart from "./../components/BarChart";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import {CardProps} from "./../components/Card";
import Card,{CardContent} from "./../components/Card";
import BillsCard,{BillsCardProps} from "./../components/BillsCard";

const CardData: CardProps[] =[
    {label: "Total Spending",
     amount: "45,231",
    description: "+20.1% from last month",
    icon: FaRupeeSign,
    },
    {label: "Bills",
     amount: "10,599",
    description: "Same as last month",
    icon: LiaMoneyBillSolid,
    },
    {label: "Groceries",
     amount: "30,432",
    description: "+2.9% from last month",
    icon: MdOutlineLocalGroceryStore,
    },
    {label: "Miscellaneous",
     amount: "4,300",
    description: "+5.63% from last month",
    icon: MdMiscellaneousServices,
    },
]

const BillsData: BillsCardProps[] = [
{
    name: "Vegetables",
    category: "Groceries",
    icon: MdOutlineLocalGroceryStore,
    amount:"530",
},
{
    name: "Capacitor",
    category: "Miscellaneous",
    icon: MdMiscellaneousServices,
    amount:"100",
},
{
    name: "Electricity Bill",
    category: "Bills",
    icon: LiaMoneyBillSolid,
    amount:"5000",
},
{
    name: "Maintenance",
    category: "Bills",
    icon: LiaMoneyBillSolid,
    amount:"2500",
},
{
    name: "Stationary",
    category: "Miscellaneous",
    icon: MdMiscellaneousServices,
    amount:"300",
},
{
    name: "Football",
    category: "Miscellaneous",
    icon: MdMiscellaneousServices,
    amount:"450",
},
{
    name: "Restaurant",
    category: "Miscellaneous",
    icon: MdMiscellaneousServices,
    amount:"530",
},
{
    name: "Dals and Eatables",
    category: "Groceries",
    icon: MdOutlineLocalGroceryStore,
    amount:"530",
},
]

const Dashbboard = () => {
    const {data: session, status} =useSession();
    console.log(session);
    return (
        <BaseLayout>
        <div className="flex w-full">
        <Sidebar />
        <div className="flex flex-col w-full">
        <SubNavbar />
        <div className="flex flex-col gap-5 w-full pl-16 pr-16 p-5">
        <PageTitle title="Dashboard"/>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2  xl:grid-cols-4">
                {CardData.map((data,index)=> (
                    <Card key={index}
                    amount={data.amount}
                    description={data.description}
                    icon={data.icon}
                    label={data.label}
                    />
                    ))}
        </section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
            <CardContent>
                    <p className="p-4 font-semibold">Overview</p>
                    <BarChart />
            </CardContent>
            <CardContent className="flex justify-between gap-4 max-h-[500px] overflow-scroll scroll-smooth">
                <section>
                <p className="font-semibold"> Recent Bills </p>
                <p className="text-sm text-gray-400"> You Paid 25 Bills his month</p>
                </section>

                {BillsData.map((data,index)=>(
                    <BillsCard
                    key={index}
                    name={data.name}
                    category={data.category}
                    icon={data.icon}
                    amount={data.amount}
                    />
                    ))}
            </CardContent>
        </section>
        </div>
        </div>
        </div>
        </BaseLayout>
        )
}

export default Dashbboard;