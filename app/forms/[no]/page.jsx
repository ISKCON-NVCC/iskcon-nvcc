
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SundayFeastPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    peopleCount: "",
    dietary: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName || !formData.email || !formData.peopleCount || !formData.dietary) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2]">


      {/* HEADER */}
      <header className="bg-white py-4 text-center shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">
          🕉️ ISKCON NVCC
        </h1>
      </header>

      {/* MAIN CONTENT (NO vertical centering → NO movement) */}
      <main className="flex-grow py-10 px-4 flex justify-center">
        {submitted ? (
          <Card className="max-w-md w-full text-center">
            <CardHeader>
              <CardTitle>🙏 Registration Successful</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Thank you for registering for the Sunday Feast at ISKCON NVCC!
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              
              <CardTitle className="text-2xl font-bold">
                Sunday Feast Registration
              </CardTitle>
              <p className="text-gray-600 text-sm mt-1">
                Register for the weekly Sunday Feast program at ISKCON NVCC
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <Label>Full Name *</Label>
                  <Input
                    placeholder="Your answer..."
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                  />
                </div>

                <div>
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    placeholder="Your answer..."
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div>
                  <Label>Number of people attending *</Label>
                  <Input
                    type="number"
                    placeholder="Enter a number..."
                    value={formData.peopleCount}
                    onChange={(e) => handleChange("peopleCount", e.target.value)}
                  />
                </div>

                <div>
                  <Label>Dietary Preference *</Label>
                  <RadioGroup
                    onValueChange={(value) => handleChange("dietary", value)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="regular" id="regular" />
                      <Label htmlFor="regular">Regular Prasadam</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no-onion-garlic" id="no-onion-garlic" />
                      <Label htmlFor="no-onion-garlic">No Onion/Garlic</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="gluten-free" id="gluten-free" />
                      <Label htmlFor="gluten-free">Gluten Free</Label>
                    </div>
                  </RadioGroup>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  {loading ? "Submitting..." : "Submit Response"}
                </Button>

              </form>
            </CardContent>
          </Card>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-3 text-center text-sm text-gray-600">
        © 2025 ISKCON NVCC. Hare Krishna!
      </footer>

    </div>
  );
}
