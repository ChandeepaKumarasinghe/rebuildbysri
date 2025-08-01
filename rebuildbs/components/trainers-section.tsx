import { Card, CardContent } from "@/components/ui/card"

export function TrainersSection() {
  const trainers = [
    {
      name: "Nimali Fernando",
      specialty: "Yoga & Pilates",
      description:
        "Certified yoga instructor with 10 years of experience helping women improve flexibility and core strength.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Kamala Perera",
      specialty: "Strength Training",
      description: "Competitive powerlifter who specializes in helping women build strength safely and effectively.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sunethra Rajapakse",
      specialty: "Cardio & HIIT",
      description: "Former athlete who creates dynamic cardio programs tailored to individual fitness levels.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Priya Silva",
      specialty: "Nutrition & Wellness",
      description:
        "Licensed nutritionist who helps members achieve their goals through proper diet and lifestyle changes.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section id="trainers" className="py-12 sm:py-16 bg-[#080808]">
      <div className="container mx-auto px-4">
        <h2
          className="text-[#ff4f00] text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Our Trainers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="bg-[#555555]/20 border-[#555555] hover:border-[#ff4f00] transition-colors duration-300"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 border-3 border-[#ff4f00] object-cover"
                />
                <h3
                  className="text-[#ff4f00] text-lg sm:text-xl font-bold mb-2"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {trainer.name}
                </h3>
                <p
                  className="text-[#c9c0bb] italic mb-3 text-sm sm:text-base"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {trainer.specialty}
                </p>
                <p
                  className="text-[#c9c0bb] text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {trainer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
