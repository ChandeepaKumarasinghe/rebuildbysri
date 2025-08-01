"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle } from "lucide-react"

export function JoinFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setIsLoading(true);
    setIsSuccess(false);
    
    try {
      const response = await fetch('/api/join-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", experience: "", goals: "" });
      } else {
        setShowModal(false);
        alert('There was an error. Please try again.');
      }
    } catch (err) {
      setShowModal(false);
      alert('There was an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const closeModal = () => {
    setShowModal(false);
    setIsSuccess(false);
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label
                  className="text-[#c9c0bb] text-sm sm:text-base"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Fitness Level
                </Label>
                <Select onValueChange={(value) => handleInputChange("experience", value)} disabled={isLoading}>
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
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#ff4f00] hover:bg-[#ff4f00]/90 text-[#080808] font-bold text-sm sm:text-base py-2 sm:py-3 disabled:opacity-50"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/80 backdrop-blur-sm">
          <div className="bg-[#555555]/95 border-2 border-[#ff4f00] rounded-lg p-8 max-w-md mx-4 text-center">
            {isLoading ? (
              <div className="space-y-4">
                <Loader2 className="w-12 h-12 text-[#ff4f00] animate-spin mx-auto" />
                <h3 className="text-[#ff4f00] text-xl font-bold" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                  Processing Your Application
                </h3>
                <p className="text-[#c9c0bb] text-base" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                  Please wait while we submit your application to Rebuild Ladies Only Gym...
                </p>
              </div>
            ) : isSuccess ? (
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 text-[#ff4f00] mx-auto" />
                <h3 className="text-[#ff4f00] text-xl font-bold" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                  Application Submitted!
                </h3>
                <p className="text-[#c9c0bb] text-base" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                  Rebuild would reach out to you, have a great week!
                </p>
                <Button
                  onClick={closeModal}
                  className="mt-4 bg-[#ff4f00] hover:bg-[#ff4f00]/90 text-[#080808] font-bold"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Okay
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  )
}
