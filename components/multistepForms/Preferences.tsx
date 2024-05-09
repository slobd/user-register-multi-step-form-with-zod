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
    FormDescription,
    FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import FormFooter from "@/components/multistepForms/FormFooter";

const formSchema = z.object({
    enableSound: z.boolean().default(true).optional(),
    emailNotification: z.boolean().default(true).optional(),
    smsNotification: z.boolean().default(false).optional(),
    profileVisibility: z.boolean().default(true).optional(),
    contactVisibility: z.boolean().default(false).optional(),
})

const Preferences = ({ progress, user, setUser, handlePrevious, handleNext }: FormPropsType) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            enableSound: user.notificationSetting.enableSound,
            emailNotification: user.notificationSetting.emailNotification,
            smsNotification: user.notificationSetting.smsNotification,
            profileVisibility: user.privacySetting.profileVisibility,
            contactVisibility: user.privacySetting.contactVisibility,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setUser({
            ...user,
            notificationSetting: {
                enableSound: values.enableSound,
                emailNotification: values.emailNotification,
                smsNotification: values.smsNotification,
            },
            privacySetting: {
                profileVisibility: values.profileVisibility,
                contactVisibility: values.contactVisibility,
            }
        })
        handleNext();
    }

    return (
        <div className="">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="container md:max-w-3xl w-full md:px-8 px-4 py-20 pb-28 overflow-y-auto">
                        <h2 className="mb-6 text-2xl font-semibold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
                            Notification Settings
                        </h2>
                        <FormField
                            control={form.control}
                            name="enableSound"
                            render={({ field }) => (
                                <FormItem className="mb-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Enable sounds alert.
                                        </FormLabel>
                                        <FormDescription>
                                            You can manage your sounds settings in the setting page.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="emailNotification"
                            render={({ field }) => (
                                <FormItem className="mb-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Allow default email notifications
                                        </FormLabel>
                                        <FormDescription>
                                            You can manage your email notifications in the setting page.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="smsNotification"
                            render={({ field }) => (
                                <FormItem className="mb-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Allow default sms notifications
                                        </FormLabel>
                                        <FormDescription>
                                            You can manage your email notifications in the setting page.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <h2 className="mt-4 mb-6 text-2xl font-semibold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
                            Privacy Settings
                        </h2>
                        <FormField
                            control={form.control}
                            name="profileVisibility"
                            render={({ field }) => (
                                <FormItem className="mb-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Share my profile to everybody.
                                        </FormLabel>
                                        <FormDescription>
                                            You can manage your profile visibility in the setting page.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contactVisibility"
                            render={({ field }) => (
                                <FormItem className="mb-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Share my contact to everybody.
                                        </FormLabel>
                                        <FormDescription>
                                            You can manage your contact visibility in the setting page.
                                        </FormDescription>
                                    </div>
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

export default Preferences;
