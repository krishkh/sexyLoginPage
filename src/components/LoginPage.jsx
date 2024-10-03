"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { ArrowLeft, Sun } from "lucide-react";

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (step === 1) {
        nextStep();
      } else if (step === 2) {
        handleLogin();
      }
    } else if (e.key === "Backspace" && e.target.value === "") {
      prevStep();
    }
  };

  const handleLogin = () => {
    toast.success("You are logged in!", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
    setIsLoggedIn(true);
    nextStep(); // Move to step 3 after login
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (
        e.key === "Backspace" &&
        !["INPUT", "TEXTAREA"].includes(e.target.tagName)
      ) {
        prevStep();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-md w-full space-y-8">
        <div className="relative">
          {/* Show back button if step > 1 */}
          {step == 2 && (
            <Button
              onClick={prevStep}
              className="absolute -top-2 -left-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              aria-label="Back"
            >
              <ArrowLeft className="h-6 w-6 text-gray-400" />
            </Button>
          )}
          {step == 3 && (
            <Button
              onClick={() => {
                if (step > 2) setStep(step - 2);
              }}
              className="absolute -top-2 -left-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              aria-label="Back"
            >
              <ArrowLeft className="h-6 w-6 text-gray-400" />
            </Button>
          )}
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              {step === 3 ? "Welcome!" : "LOG IN ;D"}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {step === 3
                ? "You're successfully logged in. Have a nice day!"
                : "Enter your details to access your account"}
            </p>
          </div>
        </div>

        {/* Step 1 and Step 2 Form */}
        <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl p-8 backdrop-blur-sm">
          {step === 1 && (
            <div className="space-y-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
              />
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={nextStep}
              >
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
              />
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleLogin}
              >
                Login
              </Button>
              <div className="text-sm text-center">
                <Link
                  href="/forgot-password"
                  className="text-purple-400 hover:text-purple-300 transition duration-300 ease-in-out"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          )}

          {/* Step 3: After login */}
          {step === 3 && (
            <div className="space-y-2 text-center">
              <div className="relative">
                <svg
                  className="w-48 h-48 mx-auto text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <Sun className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-yellow-400 animate-pulse" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-white">
                Have a nice day today!
              </h2>
            </div>
          )}
        </div>

        {/* Sign up Link */}
        {step === 1 && (
          <div className="text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-purple-400 hover:text-purple-300 transition duration-300 ease-in-out"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
