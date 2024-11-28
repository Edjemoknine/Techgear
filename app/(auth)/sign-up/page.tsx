"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Zap, Loader2, Github, Mail } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function Component() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black">
      {/* Branding Side */}
      <div className="hidden lg:flex items-center justify-center p-8 bg-zinc-950">
        <div className="w-full max-w-md">
          <div className="space-y-2 mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              techgear
            </h1>
            <p className="text-zinc-400">
              Professional tech solutions and support services
            </p>
          </div>
          <div className="grid gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                Start your tech journey
              </h2>
              <p className="text-zinc-400">
                Create an account to access premium features
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-white">Custom Configuration</h3>
                <p className="text-sm text-zinc-400">
                  Personalized setup for your needs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-white">Fast Service</h3>
                <p className="text-sm text-zinc-400">
                  Priority handling and quick turnaround
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-white">Create an account</h2>
            <p className="text-zinc-400">
              Enter your information below to create your account
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-white">
                  First name
                </Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  required
                  disabled={isLoading}
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-white">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  required
                  disabled={isLoading}
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                disabled={isLoading}
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                required
                type="password"
                disabled={isLoading}
                className="bg-zinc-900 border-zinc-800 text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="border-zinc-800 data-[state=checked]:bg-blue-600"
              />
              <label
                htmlFor="terms"
                className="text-sm text-zinc-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  terms and conditions
                </Link>
              </label>
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-zinc-400">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
            >
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
