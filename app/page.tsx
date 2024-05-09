"use client";

import { useState } from "react";
import Preferences from "@/components/multistepForms/Preferences";
import ProfileInformation from "@/components/multistepForms/ProfileInformation";
import Success from "@/components/multistepForms/Success";
import UserDetails from "@/components/multistepForms/UserDetails";
import { UserType, MockResponseDataType } from "@/lib/types";
import { defautlUser } from "@/lib/constants";
import Axios from "axios";

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
      setLoading(true);
      Axios.post('/api/mock', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        setUserFromAPI(res.data.user);
        setLoading(false)
        activeTab < formElementsCount - 1 && setActiveTab(prev => prev + 1);
      }).catch(err => {
        setLoading(false)
      })

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
