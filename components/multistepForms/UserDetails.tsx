"use client"

import { FormPropsType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FormFooter from "@/components/multistepForms/FormFooter";
import PasswordStrength from "../common/PasswordStrength";

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "First Name is required.",
    }),
    lastName: z.string().min(1, {
        message: "Last Name is required.",
    }),
    email: z.string().min(1, {
        message: "Email is required.",
    }).email({
        message: "Please input valid email."
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(1, {
        message: "Please confirm password.",
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const UserDetails = ({ progress, user, setUser, handlePrevious, handleNext }: FormPropsType) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setUser({
            ...user,
            ...values,
        })
        handleNext();
    }

    return (
        <div className="">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="container md:max-w-3xl w-full md:px-8 px-4 py-20 pb-28 overflow-y-auto">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <>
                                            <Input type="password" placeholder="" {...field} />
                                            {field.value && field.value.length > 5 && <PasswordStrength password={field.value} />}
                                        </>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormFooter
                        type="form"
                        progress={progress}
                        handlePrevious={handlePrevious}
                    />
                </form>
            </Form>
        </div>
    );
}

export default UserDetails;
