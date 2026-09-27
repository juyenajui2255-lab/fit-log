"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function SaveButton({ workout }) {
  const [saved, setSaved] = useState(false);

  // Check if workout is already saved
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
      // Remove from saved
      const updatedWorkouts = savedWorkouts.filter(
        (item) => item.id !== workout.id
      );

      localStorage.setItem(
        "savedWorkouts",
        JSON.stringify(updatedWorkouts)
      );

      setSaved(false);

      // Update Navbar Save counter
      window.dispatchEvent(
        new Event("savedWorkoutsUpdated")
      );
    } else {
      // Add to saved
      const updatedWorkouts = [
        ...savedWorkouts,
        workout,
      ];

      localStorage.setItem(
        "savedWorkouts",
        JSON.stringify(updatedWorkouts)
      );

      setSaved(true);

      // Update Navbar Save counter
      window.dispatchEvent(
        new Event("savedWorkoutsUpdated")
      );
    }
  };

  return (
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
  );
}
