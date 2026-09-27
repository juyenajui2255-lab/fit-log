export const workouts = [
  {
    id: 1,
    name: "Barbell Bench Press",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    muscleGroups: ["Chest", "Arms"],
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    duration: 25,
    caloriesBurned: 180,
    sets: 4,
    reps: "6-8",
    rating: 4.8,
    description: "A powerful compound exercise for building chest and arm strength.",
    instructions: [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back."
    ]
  },

  {
    id: 2,
    name: "Pull-Up",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740",
    muscleGroups: ["Back", "Arms"],
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    duration: 15,
    caloriesBurned: 120,
    sets: 4,
    reps: "6-10",
    rating: 4.7,
    description: "A bodyweight exercise that targets the back and arms.",
    instructions: ["Hang from the bar with a shoulder-width overhand grip.", "Brace your core and pull your chest toward the bar.", "Pause at the top with elbows tucked, then lower with control.", "Avoid kipping unless you are training a specific variation."]
  },

  {
    id: 3,
    name: "Back Squat",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691401.jpg?w=740",
    muscleGroups: ["Legs", "Core"],
    equipment: "Barbell, Rack",
    difficulty: "Intermediate",
    duration: 30,
    caloriesBurned: 240,
    sets: 4,
    reps: "8-10",
    rating: 4.9,
    description: "A fundamental lower-body exercise for building leg strength.",
    instructions: ["Set the bar on your upper traps and unrack with a tight brace.", "Sit the hips down and back while keeping knees tracking over toes.", "Descend until thighs are at least parallel, chest tall.", "Drive through mid-foot to stand, locking hips at the top."]
  },

  {
    id: 4,
    name: "Overhead Press",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666703.jpg?w=740",
    muscleGroups: ["Shoulders", "Arms"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 20,
    caloriesBurned: 150,
    sets: 3,
    reps: "8-10",
    rating: 4.6,
    description: "A compound pressing movement that develops shoulder strength.",
    instructions: ["Hold the bar at the front rack with a vertical forearm.", "Brace abs and glutes, then press the bar over the crown of the head.", "Lock out with biceps by the ears and a stacked ribcage.", "Lower to the clavicle under control before the next rep."]
  },

  {
    id: 5,
    name: "Dumbbell Bicep Curl",
    image:"https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666702.jpg?w=740",
    muscleGroups: ["Arms"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    duration: 12,
    caloriesBurned: 80,
    sets: 3,
    reps: "10-12",
    rating: 4.3,
    description: "An isolation exercise focused on developing the biceps.",
    instructions: ["Stand tall with dumbbells at your sides, palms forward.", "Curl the weights without swinging the torso.", "Squeeze at the top, then lower until arms are fully extended.", "Keep elbows pinned near the ribs throughout."]
  },

  {
    id: 6,
    name: "Hollow-Body Plank",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691489.jpg?w=740",
    muscleGroups: ["Core"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    duration: 10,
    caloriesBurned: 60,
    sets: 3,
    reps: "30-45 sec",
    rating: 4.4,
    description: "A core exercise that improves stability and body control.",
    instructions: ["Set elbows under shoulders and squeeze glutes and quads.", "Tuck the pelvis so the lower back stays flat.", "Breathe into the brace without sagging the hips.", "Hold for the prescribed time, then rest and repeat."]
  },

  {
    id: 7,
    name: "Burpee",
    image: "https://img.magnific.com/free-photo/3d-cartoon-business-character_1048-16544.jpg?w=740",
    muscleGroups: ["Full Body"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    duration: 12,
    caloriesBurned: 160,
    sets: 3,
    reps: "10-15",
    rating: 4.2,
    description: "A full-body movement combining strength and cardiovascular conditioning.",
    instructions: ["Squat down and plant your hands on the floor.", "Kick the feet back to a solid plank, then jump them forward.", "Explode up into a jump and land softly.", "Keep a steady rhythm and a braced midline."]
  },

  {
    id: 8,
    name: "Conventional Deadlift",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666704.jpg?w=740",
    muscleGroups: ["Back", "Legs"],
    equipment: "Barbell",
    difficulty: "Advanced",
    duration: 28,
    caloriesBurned: 260,
    sets: 4,
    reps: "5-8",
    rating: 4.9,
    description: "A major compound lift targeting the posterior chain.",
    instructions: ["Stand with the bar over mid-foot and take a strong mixed or double-overhand grip.", "Set the back flat, brace hard, and push the floor away.", "Stand tall by driving hips to the bar, then reverse the path.", "Do not bounce the plates; reset tension every rep."]
  },

  {
    id: 9,
    name: "Push-Up",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691429.jpg?w=740",
    muscleGroups: ["Chest", "Arms", "Core"],
    equipment: "Bodyweight",
    difficulty: "Beginner",
    duration: 10,
    caloriesBurned: 90,
    sets: 3,
    reps: "10-15",
    rating: 4.5,
    description: "A classic bodyweight exercise for chest, arms, and core.",
    instructions: ["Place hands slightly wider than shoulders, body in a straight line.", "Lower until the chest nearly kisses the floor.", "Press up without letting hips pike or sag.", "Keep elbows about 45 degrees from the torso."]
  },

  {
    id: 10,
    name: "Walking Lunge",
    image:"https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666701.jpg?w=740",
    muscleGroups: ["Legs"],
    equipment: "Dumbbells (optional)",
    difficulty: "Beginner",
    duration: 18,
    caloriesBurned: 170,
    sets: 3,
    reps: "10-12",
    rating: 4.4,
    description: "A lower-body movement that develops leg strength and balance.",
    instructions: ["Step forward and drop the back knee toward the floor.", "Keep the front knee stacked over the mid-foot.", "Drive through the front heel to the next step.", "Stay tall through the torso and control each landing."]
  },

  {
    id: 11,
    name: "Russian Twist",
    image:"https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691487.jpg?w=740",
    muscleGroups: ["Core"],
    equipment: "Medicine Ball",
    difficulty: "Intermediate",
    duration: 8,
    caloriesBurned: 70,
    sets: 3,
    reps: "12-15",
    rating: 4.1,
    description: "A rotational core exercise that targets the abdominal muscles.",
    instructions: ["Sit with a slight lean back and feet lightly off the floor.", "Hold the ball at chest height and rotate to one side.", "Tap the floor, then rotate to the other side.", "Move from the ribcage, not just the arms."]
  },

  {
    id: 12,
    name: "Kettlebell Swing",
    image:"https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691505.jpg?w=740",
    muscleGroups: ["Full Body", "Shoulders"],
    equipment: "Kettlebell",
    difficulty: "Intermediate",
    duration: 16,
    caloriesBurned: 200,
    sets: 3,
    reps: "12-15",
    rating: 4.7,
    description: "A dynamic full-body movement focused on power and conditioning.",
    instructions: ["Hinge, hike the bell back between the legs, then snap the hips.", "Let the bell float to chest height with loose arms.", "Brace at the top, then hinge as the bell falls.", "Never squat the swing — it is a hinge, not a squat."]
  }
];