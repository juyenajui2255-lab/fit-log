import { workouts } from "@/data/workouts";
import { notFound } from "next/navigation";
import AddToPlanButton from "@/app/components/AddToPlanButton";
import SaveButton from "@/app/components/SaveButton";

export default async function WorkoutDetails({ params }) {
    const { id } = await params;

    const workout = workouts.find(
        (item) => item.id === Number(id)
    );

    if (!workout) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0d0f12] px-10 py-10 text-white">

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">

                {/* LEFT - IMAGE */}
                <div>
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-[500px] w-full rounded-xl object-cover"
                    />
                </div>

                {/* RIGHT - DETAILS */}
                <div>

                    {/* Name */}
                    <h1 className="text-4xl font-extrabold uppercase">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#baff00] px-4 py-1 text-xs font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Information */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-[#252a32] bg-[#15181e]">

                        <div className="flex justify-between border-b border-[#252a32] px-5 py-4">
                            <span className="text-xs uppercase text-gray-400">
                                Equipment
                            </span>

                            <span className="text-sm">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a32] px-5 py-4">
                            <span className="text-xs uppercase text-gray-400">
                                Difficulty
                            </span>

                            <span className="text-sm">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a32] px-5 py-4">
                            <span className="text-xs uppercase text-gray-400">
                                Sets
                            </span>

                            <span className="text-sm">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a32] px-5 py-4">
                            <span className="text-xs uppercase text-gray-400">
                                Reps
                            </span>

                            <span className="text-sm">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a32] px-5 py-4">
                            <span className="text-xs uppercase text-gray-400">
                                Duration
                            </span>

                            <span className="text-sm">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a32] px-5 py-4">
                            <span className="text-xs uppercase text-gray-400">
                                Calories
                            </span>

                            <span className="text-sm">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between px-5 py-4">
                            <span className="text-xs uppercase text-gray-400">
                                Rating
                            </span>

                            <span className="text-sm">
                                {workout.rating}
                            </span>
                        </div>

                    </div>

                    {/* Instructions */}
                    <h2 className="mt-7 text-sm font-bold uppercase">
                        Instructions
                    </h2>

                    <ol className="mt-4 space-y-3 text-sm text-gray-400">
                        {workout.instructions.map((instruction, index) => (
                            <li key={index} className="flex gap-3">
                                <span>{index + 1}.</span>
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>

                    {/* Buttons */}
                    <div className="mt-7 flex gap-3">

                        <AddToPlanButton workout={workout} />

                        <SaveButton workout={workout} />

                    </div>

                </div>
            </div>

        </main>
    );
}