export type FormPropsType = {
    progress: number,
    user: UserType,
    setUser: (e: any) => void,
    handlePrevious: () => void,
    handleNext: () => void,
}

export type UserType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    bio: string,
    avatar: string,
    notificationSetting: NotificationSettingType
    privacySetting: PrivacySettingType
}

export type NotificationSettingType = {
    enableSound: boolean | true,
    emailNotification: boolean | true,
    smsNotification: boolean | false,
}

export type PrivacySettingType = {
    profileVisibility: boolean | true,
    contactVisibility: boolean | false,
}

export type MockResponseDataType = {
    message: string;
    user?: UserType;
}