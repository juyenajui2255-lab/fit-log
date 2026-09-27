import { workouts } from "@/data/workouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFire,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Library() {
  return (
    <section className="px-9 py-10">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          THE LIBRARY
        </h2>

        <p className="text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <a
            key={workout.id}
            href={`/workouts/${workout.id}`}
            className="block"
          >
            <div className="overflow-hidden rounded-2xl border border-[#252a32] bg-[#15181e] transition hover:-translate-y-1 hover:border-[#baff00]">

              {/* Image */}
              <img
                src={workout.image}
                alt={workout.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-[#baff00] px-3 py-1 text-xs font-bold text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h3 className="mt-4 text-xl font-bold uppercase text-white">
                  {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-1 text-sm text-gray-400">
                  {workout.equipment}
                </p>

                <div className="my-5 border-t border-[#2a2f38]" />

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-400">

                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} />
                    {workout.duration} min
                  </span>

                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faFire} />
                    {workout.caloriesBurned} kcal
                  </span>

                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faStar} />
                    {workout.rating}
                  </span>

                </div>

              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}