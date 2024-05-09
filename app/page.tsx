"use client";

import { useState } from "react";
import Preferences from "@/components/multistepForms/Preferences";
import ProfileInformation from "@/components/multistepForms/ProfileInformation";
import Success from "@/components/multistepForms/Success";
import UserDetails from "@/components/multistepForms/UserDetails";
import { UserType, MockResponseDataType } from "@/lib/types";
import { defautlUser } from "@/lib/constants";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType>(defautlUser);
  const [activeTab, setActiveTab] = useState(0);
  const [formElementsCount, setFormElementsCount] = useState(4);
  const [userFromAPI, setUserFromAPI] = useState<any>();

  const handlePrevious = () => {
    activeTab > 0 && setActiveTab(prev => prev - 1)
  }

  const handleNext = async () => {
    if (activeTab == formElementsCount - 2) {
      // call mock api
      const response = await fetch('/api/mock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      setUserFromAPI(data);
      activeTab < formElementsCount - 1 && setActiveTab(prev => prev + 1);
    } else {
      activeTab < formElementsCount - 1 && setActiveTab(prev => prev + 1)
    }
  }

  const formElements = [
    <UserDetails
      progress={((activeTab + 1) * 100) / formElementsCount}
      user={user}
      setUser={setUser}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />,
    <ProfileInformation
      progress={((activeTab + 1) * 100) / formElementsCount}
      user={user}
      setUser={setUser}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />,
    <Preferences
      progress={((activeTab + 1) * 100) / formElementsCount}
      user={user}
      setUser={setUser}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />,
    <Success
      progress={((activeTab + 1) * 100) / formElementsCount}
      user={userFromAPI}
      setUser={setUser}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />,
  ];

  return (
    <main className="">
      {formElements[activeTab]}
    </main>
  );
}
