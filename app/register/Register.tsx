"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import FadeIn from "@/app/components/FadeIn";

const Register = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ data }),
        });
        const userInfo = await res.json();
        console.log("yAHA Register oe");
        router.push("/login");
    };

    return (
        <FadeIn>
        <div className="h-full flex flex-col overflow-y-hidden">
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-full flex flex-row justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-5"
                    >
                        <Input
                            id="name"
                            label="Name"
                            register={register}
                            disabled={false}
                            errors={errors}
                            required
                        />
                        {/* <input {...register("name", {required:true})}/>*/}
                        {/*<input id="name" type="text" defaultValue={data.name} required onChange={handleChange}/>*/}
                        <Input
                            id="username"
                            label="Username"
                            type="string"
                            register={register}
                            disabled={false}
                            errors={errors}
                            required
                        />
                        {/*<input id="username" value={data.username} type="text" required onChange={handleChange}/>*/}
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            register={register}
                            disabled={false}
                            errors={errors}
                            required
                        />

                        {/*<input id="password" value={data.passsword} type="password" required onChange={handleChange}/>*/}
                        <Button type="submit" label="Register" />
                    </form>
                </div>
            </div>
        </div>
        </FadeIn>
    );
};

export default Register;
