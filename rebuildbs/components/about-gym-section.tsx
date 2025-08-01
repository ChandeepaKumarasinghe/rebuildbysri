export function AboutGymSection() {
  return (
    <section id="about-gym" className="py-12 sm:py-16 bg-[#080808]">
      <div className="container mx-auto px-4">
        <h2
          className="text-[#ff4f00] text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          About Our Gym
        </h2>

        <div className="max-w-4xl mx-auto text-[#c9c0bb] text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6 px-4">
          <p style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            Rebuild Ladies Only Gym is a sanctuary for women who want to focus on their health and fitness in a
            comfortable, judgment-free environment.
          </p>

          <p style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            Our facility features state-of-the-art equipment, personalized training programs, and a supportive community
            of like-minded women. We offer a variety of classes including yoga, pilates, strength training, and cardio
            workouts.
          </p>

          <div>
            <h3
              className="text-[#ff4f00] text-lg sm:text-xl font-semibold mb-3 sm:mb-4"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              What sets us apart:
            </h3>
            <ul className="space-y-2 list-disc list-inside pl-4" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
              <li>100% women-only environment</li>
              <li>Certified female trainers</li>
              <li>Personalized fitness plans</li>
              <li>Nutrition guidance</li>
              <li>Supportive community</li>
            </ul>
          </div>

          <p className="text-center italic pt-4" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            Join us and become part of a fitness community that empowers women to be their strongest selves.
          </p>
        </div>
      </div>
    </section>
  )
}
