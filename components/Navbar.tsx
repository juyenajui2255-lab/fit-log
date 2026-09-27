
"use client";

import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export default function Navbar() {
    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);

    // Plan Counter
    useEffect(() => {
        const updatePlanCount = () => {
            try {
                const savedPlan = localStorage.getItem("todaysPlan");

                if (savedPlan) {
                    const parsedPlan = JSON.parse(savedPlan);

                    setPlanCount(
                        Array.isArray(parsedPlan)
                            ? parsedPlan.length
                            : 0
                    );
                } else {
                    setPlanCount(0);
                }
            } catch (error) {
                console.log("Plan data error:", error);
                setPlanCount(0);
            }
        };

        updatePlanCount();

        window.addEventListener(
            "todaysPlanUpdated",
            updatePlanCount
        );

        return () => {
            window.removeEventListener(
                "todaysPlanUpdated",
                updatePlanCount
            );
        };
    }, []);

    // Save Counter
    useEffect(() => {
        const updateSavedCount = () => {
            try {
                const savedWorkouts =
                    localStorage.getItem("savedWorkouts");

                if (savedWorkouts) {
                    const parsedSaved = JSON.parse(savedWorkouts);

                    setSavedCount(
                        Array.isArray(parsedSaved)
                            ? parsedSaved.length
                            : 0
                    );
                } else {
                    setSavedCount(0);
                }
            } catch (error) {
                console.log("Saved data error:", error);
                setSavedCount(0);
            }
        };

        updateSavedCount();

        window.addEventListener(
            "savedWorkoutsUpdated",
            updateSavedCount
        );

        return () => {
            window.removeEventListener(
                "savedWorkoutsUpdated",
                updateSavedCount
            );
        };
    }, []);

    return (
        <nav className="flex items-center justify-between border-b border-[#272B33] px-6 py-4">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img
                    src={logo.src}
                    alt="FitLog Logo"
                    className="h-8 w-8"
                />

                <h1 className="text-xl font-bold">
                    FITLOG
                </h1>
            </div>

            {/* Menu */}
            <div className="flex items-center gap-3 text-[#9CA3AF]">

                <a
                    href="/"
                    className="rounded-full px-3 py-2 hover:bg-[#1A2312] hover:text-[#CCFF00]"
                >
                    Workouts
                </a>

                <a
                    href="/todays-plan"
                    className="rounded-full px-3 py-2 hover:bg-[#1A2312] hover:text-[#CCFF00]"
                >
                    My Plan
                </a>

            </div>

            {/* Badges */}
            <div className="flex items-center gap-4">

                {/* Plan */}
                <a
                    href="/todays-plan"
                    className="flex items-center gap-2"
                >
                    <span>
                        Plan
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-black">
                        {planCount}
                    </span>
                </a>

                {/* Save */}
                <a
                    href="/todays-plan"
                    className="flex items-center gap-2"
                >
                    <span className="text-[#9CA3AF]">
                        Save
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#9CA3AF] text-[#9CA3AF]">
                        {savedCount}
                    </span>
                </a>

            </div>

        </nav>
    );
}
