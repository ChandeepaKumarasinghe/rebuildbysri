"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function JoinFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your interest! We will contact you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="join" className="py-12 sm:py-16 bg-[#080808]">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-[#555555]/20 border-[#555555]">
          <CardHeader>
            <CardTitle
              className="text-[#ff4f00] text-xl sm:text-2xl font-bold text-center"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Join Our Gym
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-[#c9c0bb] text-sm sm:text-base"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-[#080808]/50 border-[#555555] text-[#c9c0bb] focus:border-[#ff4f00]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[#c9c0bb] text-sm sm:text-base"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-[#080808]/50 border-[#555555] text-[#c9c0bb] focus:border-[#ff4f00]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-[#c9c0bb] text-sm sm:text-base"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-[#080808]/50 border-[#555555] text-[#c9c0bb] focus:border-[#ff4f00]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                />
              </div>

              <div className="space-y-2">
                <Label
                  className="text-[#c9c0bb] text-sm sm:text-base"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Fitness Level
                </Label>
                <Select onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger className="bg-[#080808]/50 border-[#555555] text-[#c9c0bb] focus:border-[#ff4f00]">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#080808] border-[#555555]">
                    <SelectItem value="beginner" className="text-[#c9c0bb] focus:bg-[#ff4f00] focus:text-[#080808]">
                      Beginner
                    </SelectItem>
                    <SelectItem value="intermediate" className="text-[#c9c0bb] focus:bg-[#ff4f00] focus:text-[#080808]">
                      Intermediate
                    </SelectItem>
                    <SelectItem value="advanced" className="text-[#c9c0bb] focus:bg-[#ff4f00] focus:text-[#080808]">
                      Advanced
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="goals"
                  className="text-[#c9c0bb] text-sm sm:text-base"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Your Fitness Goals
                </Label>
                <Textarea
                  id="goals"
                  rows={4}
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  className="bg-[#080808]/50 border-[#555555] text-[#c9c0bb] resize-none focus:border-[#ff4f00]"
                  placeholder="Tell us about your fitness goals..."
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ff4f00] hover:bg-[#ff4f00]/90 text-[#080808] font-bold text-sm sm:text-base py-2 sm:py-3"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
