export function AboutOwnerSection() {
  return (
    <section id="about-owner" className="py-12 sm:py-16 bg-[#080808]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[#ff4f00] text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">About The Owner</h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="Sripali Weerakkody"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full mx-auto border-4 border-[#ff4f00] object-cover shadow-lg"
            />
          </div>

          <h3 className="text-[#ff4f00] text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Sripali Weerakkody</h3>

          <div className="text-left max-w-3xl mx-auto px-4">
            <h4 className="text-[#ff4f00] text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Qualifications:</h4>
            <ul className="text-[#c9c0bb] text-lg space-y-2 mb-8 list-disc list-inside">
              <li>Certified Personal Trainer (ACE)</li>
              <li>Nutrition Specialist (NASM)</li>
              <li>15+ Years of Experience</li>
              <li>{"Women's Fitness Specialist"}</li>
            </ul>

            <p className="text-[#c9c0bb] text-lg leading-relaxed text-center">
              Sripali has dedicated her career to helping women achieve their fitness goals in a comfortable and
              supportive environment. Her passion for {"women's"} health and wellness led her to establish Rebuild
              Ladies Only Gym.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
