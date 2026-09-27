"use client";

import { useState } from "react";

export default function AddToPlanButton({ workout }) {
    const [added, setAdded] = useState(false);
    const [showToast, setShowToast] = useState(false);

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

                setAdded(true);

                // Navbar count update
                window.dispatchEvent(
                    new Event("todaysPlanUpdated")
                );

                // Toast
                setShowToast(true);

                setTimeout(() => {
                    setShowToast(false);
                }, 2500);
            } else {
                setAdded(true);
            }

        } catch (error) {
            console.log("Add plan error:", error);
        }
    };

    return (
        <>
            <button
                onClick={handleAdd}
                className="rounded-lg bg-[#baff00] px-5 py-3 font-semibold text-black hover:bg-[#a8e600]"
            >
                {added
                    ? "Added to today's plan ✓"
                    : "Add to today's plan"}
            </button>

            {/* Toast */}
            {showToast && (
                <div className="fixed bottom-6 right-6 z-50 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-semibold text-black shadow-lg">
                    Added to today's plan
                </div>
            )}
        </>
    );
}

