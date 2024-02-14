"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import FadeIn from "@/app/components/FadeIn";
import { signIn } from "next-auth/react";

const Login = () => {
    const router = useRouter();

    const {
        register,

        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        signIn("credentials", {
            ...data,
            redirect: false,
        });
        router.push("/dashboard");
        console.log(data);
    };

    return (
        <FadeIn>
        <div className="h-full w-full flex flex-col justify-center gap-5 text-center">
            <h1 className="text-4xl title"> Login </h1>
            <div className="flex flex-col justify-center items-center">
                <form
                    className="flex flex-col justify-center gap-5 w-full"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        id="username"
                        label="Username"
                        register={register}
                        disabled={false}
                        errors={errors}
                        required
                    />
                    {/* <input id="username" type="text" value={data.username} required onChange={handleChange}/>*/}
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        register={register}
                        disabled={false}
                        errors={errors}
                        required
                    />
                    {/*<input id="password" type="password" value={data.password} required onChange={handleChange}/>*/}
                    <Button type="submit" label="Login" />
                </form>
            </div>
        </div>
        </FadeIn>
    );
};

export default Login;
