
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
import { Textarea } from "@/components/ui/textarea"
import FormFooter from "@/components/multistepForms/FormFooter";

const formSchema = z.object({
    bio: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(300, {
            message: "Bio must not be longer than 300 characters.",
        }),
    avatar: z.string().min(1, {
        message: "Profile picture is required",
    })
})

const ProfileInformation = ({ progress, user, setUser, handlePrevious, handleNext }: FormPropsType) => {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bio: user.bio,
            avatar: "",
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
                            name="bio"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Textarea
                                                placeholder="Tell us a little bit about yourself"
                                                className="resize-none"
                                                rows={5}
                                                {...field}
                                            />
                                            <div className="absolute -bottom-7 right-0 w-full flex justify-end">
                                                <p className="text-sm font-normal">
                                                    {field.value?.length < 300
                                                        ? <>
                                                            {300 - field.value?.length}
                                                            <span className="ml-1">characters left</span>
                                                        </>
                                                        : <span className="text-red-500">reached to the limit</span>
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="avatar"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Profile Picture</FormLabel>
                                    <FormControl>
                                        <Input id="picture" type="file" {...field} />
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

export default ProfileInformation;
