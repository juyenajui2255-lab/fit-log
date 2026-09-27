import banner from '@/assets/banner.png'
export default function Hero() {
    return (
        <section className="mx-9 mt-12 rounded-2xl border border-[#272B33] bg-[#15171C]">
            <div className="flex items-center justify-between px-14 py-14">

                {/* Left Side */}
                <div>
                    <p className="mb-6 text-sm font-bold tracking-widest text-[#CCFF00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-6xl font-bold leading-none text-white">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-[#9CA3AF]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <button className="mt-7 rounded-lg bg-[#CCFF00] px-6 py-4 font-bold text-black">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right Side - Image */}
                <div>
                    <img
                        src={banner.src}
                        alt="Workout"
                        className="w-80"
                    />
                </div>

            </div>
        </section>
    )
}