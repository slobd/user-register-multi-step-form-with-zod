import React from "react";
import zxcvbn from "zxcvbn";

type PasswordStrengthProps = {
    password: string;
};

const strengthLabels = ["Very Weak", "Weak", "Normal", "Strong", "Very Strong"];
const colors: Record<string, string> = {
    "0": " text-red-500",
    "1": " text-orange-500",
    "2": " text-yellow-500",
    "3": " text-green-400",
    "4": " text-green-600",
};

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
    const result = zxcvbn(password);
    const strength = result.score; // Strength score ranges from 0 to 4

    return (
        <div>
            <p className={`${colors[strength]} text-sm font-medium`}>Password Strength: {strengthLabels[strength]}</p>
        </div>
    );
};

export default PasswordStrength;