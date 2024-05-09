"use client"

import { useState } from "react";
import { FormPropsType } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import FormFooter from "./FormFooter";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AlertModal from "../modal/alertModal";

const Success = ({ progress, user, setUser, handlePrevious, handleNext }: FormPropsType) => {
    const [open, setOpen] = useState(true);
    console.log("user from api:", user)
    return (
        <div className="">
            <div className="container md:max-w-5xl w-full md:px-8 px-4 pt-5 pb-28 overflow-y-auto">
                <h2 className="mt-8 mb-6 text-2xl text-center font-semibold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
                    Your Profile
                </h2>
                <Card>
                    <CardHeader className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-8 xl:pl-20">
                        <div className="mt-5 grid md:grid-cols-3 gap-10">
                            <div className="flex items-center gap-x-6">
                                <img
                                    className="h-20 w-20 rounded-full bg-gray-50"
                                    // src={user.avatar}
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="text-base">
                                    <CardTitle className="font-semibold text-gray-900">{user.firstName + " " + user.lastName}</CardTitle>
                                    <CardDescription className="mt-1 text-gray-500">{user.email}</CardDescription>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h2 className="mb-3 text-lg font-semibold leading-7 sm:truncate sm:text-xl sm:tracking-tight">
                                    Bio
                                </h2>
                                <CardDescription>{user.bio}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="md:px-16 px-6 md:mt-20 mt-8">
                        <h2 className="mt-2 mb-6 text-lg font-semibold leading-7 sm:truncate sm:text-2xl sm:tracking-tight">
                            Notification Settings
                        </h2>
                        <div className="flex items-center space-x-2 mb-3">
                            <Checkbox id="terms" checked={user.notificationSetting.enableSound} />
                            <Label htmlFor="terms">Enable Sound Notification</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                            <Checkbox id="terms" checked={user.notificationSetting.emailNotification} />
                            <Label htmlFor="terms">Enable Sound Notification</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                            <Checkbox id="terms" checked={user.notificationSetting.smsNotification} />
                            <Label htmlFor="terms">Enable Sound Notification</Label>
                        </div>
                    </CardContent>
                    <CardContent className="md:px-16 px-6">
                        <h2 className="mt-2 mb-6 text-lg font-semibold leading-7 sm:truncate sm:text-2xl sm:tracking-tight">
                            Privacy Settings
                        </h2>
                        <div className="flex items-center space-x-2 mb-3">
                            <Checkbox id="terms" checked={user.privacySetting.profileVisibility} />
                            <Label htmlFor="terms">Enable Sound Notification</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                            <Checkbox id="terms" checked={user.privacySetting.contactVisibility} />
                            <Label htmlFor="terms">Enable Sound Notification</Label>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <FormFooter
                progress={progress}
                handlePrevious={handlePrevious}
            />
            <AlertModal
                title={"Congratulations!"}
                description={"Your profile has been successfully saved."}
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}

export default Success;
