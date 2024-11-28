"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Shield, Clock, Loader2, Github, Mail } from "lucide-react";

const Icons = {
  spinner: Loader2,
  shield: Shield,
  clock: Clock,
  gitHub: Github,
  google: Mail,
};

export default function SignIn() {
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
                Join our tech community
              </h2>
              <p className="text-zinc-400">
                Access premium tech support and services
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                <Icons.shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-white">Secure Platform</h3>
                <p className="text-sm text-zinc-400">
                  Enterprise-grade security protocols
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                <Icons.clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-white">24/7 Support</h3>
                <p className="text-sm text-zinc-400">
                  Round-the-clock technical assistance
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
            <h2 className="text-3xl font-bold text-white">
              Sign in to your account
            </h2>
            <p className="text-zinc-400">
              Enter your email below to access your account
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
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
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </form>
          <div className="text-center text-sm">
            <Link
              href="/reset-password"
              className="text-blue-600 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
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
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="text-center text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
