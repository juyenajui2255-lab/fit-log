"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function SaveButton({ workout }) {
  const [saved, setSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem("savedWorkouts")) || [];

    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    setSaved(alreadySaved);
  }, [workout.id]);

  const handleSave = () => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem("savedWorkouts")) || [];

    if (saved) {
      const updatedWorkouts = savedWorkouts.filter(
        (item) => item.id !== workout.id
      );

      localStorage.setItem(
        "savedWorkouts",
        JSON.stringify(updatedWorkouts)
      );

      setSaved(false);

      window.dispatchEvent(
        new Event("savedWorkoutsUpdated")
      );
    } else {
      const updatedWorkouts = [
        ...savedWorkouts,
        workout,
      ];

      localStorage.setItem(
        "savedWorkouts",
        JSON.stringify(updatedWorkouts)
      );

      setSaved(true);

      window.dispatchEvent(
        new Event("savedWorkoutsUpdated")
      );

      // Toast
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    }
  };

  return (
    <>
      <button
        onClick={handleSave}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 ${
          saved
            ? "bg-green-600 text-white"
            : "bg-gray-700 text-white"
        }`}
      >
        <FontAwesomeIcon icon={faBookmark} />

        {saved
          ? "Saved for later"
          : "Save for later"}
      </button>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-semibold text-black shadow-lg">
          Saved for later
        </div>
      )}
    </>
  );
}
