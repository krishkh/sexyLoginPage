"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
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
    // Here you would typically handle the login logic
    // For this example, we'll just show a success message
    toast.success("You are logged in!", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your details to access your account
          </p>
        </div>
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
              <Button
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out"
                onClick={prevStep}
              >
                Back to Email
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
        </div>
        <div className="text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-purple-400 hover:text-purple-300 transition duration-300 ease-in-out"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
