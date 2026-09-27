"use client";

import { useEffect, useMemo, useState } from "react";
import { workouts } from "@/data/workouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFire,
  faStar,
  faCheck,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [plan, setPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  // Today's Plan localStorage 
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("todaysPlan");

      if (savedPlan) {
        const parsedPlan = JSON.parse(savedPlan);

        if (Array.isArray(parsedPlan)) {
          setPlan(parsedPlan);
        }
      }
    } catch (error) {
      console.log("Plan data error:", error);
    }
  }, []);

  // Saved Workouts localStorage 
  useEffect(() => {
    try {
      const saved = localStorage.getItem("savedWorkouts");

      if (saved) {
        const parsedSaved = JSON.parse(saved);

        if (Array.isArray(parsedSaved)) {
          setSavedWorkouts(parsedSaved);
        }
      }
    } catch (error) {
      console.log("Saved workouts error:", error);
    }
  }, []);

  // Library's original workout data
  const getWorkoutData = (workout) => {
    return workouts.find((item) => item.id === workout.id) || workout;
  };

  // Today's Plan sort
  const sortedPlan = useMemo(() => {
    const sorted = [...plan];

    if (sortBy === "duration") {
      sorted.sort((a, b) => b.duration - a.duration);
    }

    if (sortBy === "calories") {
      sorted.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [plan, sortBy]);

  // tab active workout list
  const displayWorkouts =
    activeTab === "today" ? sortedPlan : savedWorkouts;

  // tab active stats
  const currentWorkouts =
    activeTab === "today" ? plan : savedWorkouts;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned || 0),
    0
  );

  // Today's Plan remove
  const handleRemove = (id) => {
    const updatedPlan = plan.filter(
      (workout) => workout.id !== id
    );

    setPlan(updatedPlan);

    localStorage.setItem(
      "todaysPlan",
      JSON.stringify(updatedPlan)
    );

    // Navbar Plan counter update
    window.dispatchEvent(
      new Event("todaysPlanUpdated")
    );
  };

  // Mark as Done
  const handleDone = (id) => {
    const updatedPlan = plan.filter(
      (workout) => workout.id !== id
    );

    setPlan(updatedPlan);

    localStorage.setItem(
      "todaysPlan",
      JSON.stringify(updatedPlan)
    );

    // Navbar Plan counter update
    window.dispatchEvent(
      new Event("todaysPlanUpdated")
    );
  };

  // Saved remove
  const handleUnsave = (id) => {
    const updatedSaved = savedWorkouts.filter(
      (workout) => workout.id !== id
    );

    setSavedWorkouts(updatedSaved);

    localStorage.setItem(
      "savedWorkouts",
      JSON.stringify(updatedSaved)
    );

    // Navbar Save counter update
    window.dispatchEvent(
      new Event("savedWorkoutsUpdated")
    );
  };

  return (
    <main className="min-h-screen bg-[#0b0e13] px-9 py-10 text-white">

      {/* HEADER */}
      <div className="flex items-start justify-between">

        <div>
          <h1 className="text-2xl font-bold">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-[#858c97]">
            Keep track of your workouts and stay consistent.
          </p>
        </div>

      </div>

      {/* TABS */}
      <div className="mt-8 flex w-fit rounded-xl bg-[#13161c] p-1">

        <button
          onClick={() => setActiveTab("today")}
          className={`rounded-lg px-5 py-2.5 text-xs transition ${
            activeTab === "today"
              ? "bg-[#202630] font-medium text-white"
              : "text-[#858c97]"
          }`}
        >
          Today's Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-lg px-6 py-2.5 text-xs transition ${
            activeTab === "saved"
              ? "bg-[#202630] font-medium text-white"
              : "text-[#858c97]"
          }`}
        >
          Saved
        </button>

      </div>

      {/* STATS */}
      <div className="mt-6 grid grid-cols-3 gap-4">

        <div className="rounded-2xl border border-[#272c35] bg-[#13161c] p-5">
          <p className="text-xs text-[#858c97]">
            Exercises
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {currentWorkouts.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#272c35] bg-[#13161c] p-5">
          <p className="text-xs text-[#858c97]">
            Minutes
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {totalMinutes}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#272c35] bg-[#13161c] p-5">
          <p className="text-xs text-[#858c97]">
            Calories
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {totalCalories}
          </h2>
        </div>

      </div>

      {/* SORT */}
      {activeTab === "today" && (
        <div className="mt-6 flex justify-end">

          <div className="relative">

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-lg border border-[#303641] bg-[#13161c] px-4 py-2 pr-10 text-xs text-white outline-none"
            >
              <option value="duration">
                Sort by Duration
              </option>

              <option value="calories">
                Sort by Calories
              </option>

              <option value="rating">
                Sort by Rating
              </option>
            </select>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#858c97]"
            />

          </div>

        </div>
      )}

      {/* WORKOUT LIST */}
      <div className="mt-6">

        {displayWorkouts.length > 0 ? (

          <div className="space-y-4">

            {displayWorkouts.map((workout) => {

              const workoutData = getWorkoutData(workout);

              return (
                <div
                  key={workout.id}
                  className="flex min-h-27.75 items-center justify-between rounded-2xl border border-[#272c35] bg-[#13161c] px-4 py-4"
                >

                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4">

                    {/* IMAGE */}
                    <img
                      src={workoutData.image}
                      alt={workoutData.name}
                      className="h-20 w-35 rounded-xl object-cover"
                    />

                    {/* INFO */}
                    <div>

                      <h3 className="text-base font-bold uppercase">
                        {workoutData.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#858c97]">
                        {workoutData.equipment}
                      </p>

                      {/* STATS */}
                      <div className="mt-2 flex items-center gap-4 text-xs text-[#a1a7b0]">

                        <span className="flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="text-[#c8ff00]"
                          />
                          {workoutData.duration} min
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faFire}
                            className="text-[#c8ff00]"
                          />
                          {workoutData.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-[#c8ff00]"
                          />
                          {workoutData.rating}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex items-center gap-3">

                    {/* VIEW DETAILS */}
                    <a
                      href={`/workouts/${workoutData.id}`}
                      className="rounded-full border border-[#344052] px-5 py-2.5 text-xs text-white transition hover:bg-[#1b2028]"
                    >
                      View Details
                    </a>

                    {/* TODAY'S PLAN BUTTONS */}
                    {activeTab === "today" && (
                      <>
                        {/* MARK AS DONE */}
                        <button
                          onClick={() =>
                            handleDone(workout.id)
                          }
                          className="flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#d5ff3d]"
                        >
                          <FontAwesomeIcon icon={faCheck} />
                          Mark as Done
                        </button>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            handleRemove(workout.id)
                          }
                          className="ml-1 flex h-8 w-8 items-center justify-center text-[#68717e] transition hover:text-white"
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                      </>
                    )}

                    {/* SAVED TAB REMOVE */}
                    {activeTab === "saved" && (
                      <button
                        onClick={() =>
                          handleUnsave(workout.id)
                        }
                        className="ml-1 flex h-8 w-8 items-center justify-center text-[#68717e] transition hover:text-white"
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

        ) : (

          /* EMPTY STATE */
          <div className="flex min-h-62.5 items-center justify-center rounded-2xl border border-dashed border-[#292e37]">

            <div className="text-center">

              <h2 className="text-base font-bold uppercase">
                {activeTab === "today"
                  ? "NOTHING HERE YET"
                  : "NO SAVED WORKOUTS"}
              </h2>

              <p className="mt-2 text-xs text-[#858c97]">
                {activeTab === "today"
                  ? "Browse the library and add a lift to get today moving."
                  : "Save a workout for later to see it here."}
              </p>

              <a
                href="/"
                className="mt-5 inline-block rounded-full bg-[#c8ff00] px-6 py-2.5 text-xs font-bold text-black"
              >
                Go to workouts
              </a>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}

