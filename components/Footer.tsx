export default function Footer() {
    return (
        <footer className="border-t border-[#1F2329] bg-[#08090C] px-6 py-8">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-dumbbell text-[#CCFF00]"></i>
                    <span className="text-sm font-bold text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-xs text-[#6B7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    )
}