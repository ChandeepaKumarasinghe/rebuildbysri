export function AboutOwnerSection() {
  return (
    <section id="about-owner" className="py-12 sm:py-16 bg-[#080808]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[#ff4f00] text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">About The Owner</h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <img
              src="https://i.pinimg.com/736x/11/80/4c/11804cf36bb9421d5952c8e2338a1107.jpg"
              alt="Sripali Weerakkody"
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover mx-auto"
            />
          </div>

          <h3 className="text-[#ff4f00] text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Sripali Weerakkody</h3>

          <div className="text-center max-w-3xl mx-auto px-4">
            <h4 className="text-[#ff4f00] text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Qualifications:</h4>
            <ul className="text-[#c9c0bb] text-lg space-y-2 mb-8">
              <li className="flex justify-center">
                <span className="mr-2">•</span>
                <span>Certified Personal Trainer (ACE)</span>
              </li>
              <li className="flex justify-center">
                <span className="mr-2">•</span>
                <span>Nutrition Specialist (NASM)</span>
              </li>
              <li className="flex justify-center">
                <span className="mr-2">•</span>
                <span>15+ Years of Experience</span>
              </li>
              <li className="flex justify-center">
                <span className="mr-2">•</span>
                <span>Women's Fitness Specialist</span>
              </li>
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
