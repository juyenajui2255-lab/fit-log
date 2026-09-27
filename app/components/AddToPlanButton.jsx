"use client";

import { useState } from "react";

export default function AddToPlanButton({ workout }) {
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        try {
            const savedPlan = localStorage.getItem("todaysPlan");

            let existingPlan = [];

            if (savedPlan) {
                const parsedPlan = JSON.parse(savedPlan);

                if (Array.isArray(parsedPlan)) {
                    existingPlan = parsedPlan;
                }
            }

            const alreadyAdded = existingPlan.some(
                (item) => item.id === workout.id
            );

            if (!alreadyAdded) {
                const newPlan = [...existingPlan, workout];

                localStorage.setItem(
                    "todaysPlan",
                    JSON.stringify(newPlan)
                );
            }

            setAdded(true);

            // Navbar count update করার জন্য
            window.dispatchEvent(
                new Event("todaysPlanUpdated")
            );

        } catch (error) {
            console.log("Add plan error:", error);
        }
    };

    return (
        <button
            onClick={handleAdd}
            className="rounded-lg bg-[#baff00] px-5 py-3 font-semibold text-black hover:bg-[#a8e600]"
        >
            {added
                ? "Added to today's plan ✓"
                : "Add to today's plan"}
        </button>
    );
}