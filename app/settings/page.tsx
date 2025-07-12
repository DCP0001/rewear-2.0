"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import {
  User,
  Bell,
  Shield,
  MapPin,
  Camera,
  Moon,
  Sun,
  Monitor,
  Trash2,
  Download,
  Upload,
  ChevronLeft,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
  })
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showLocation: true,
    showSwapHistory: false,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-green-100 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src="/rewear-logo.png" alt="ReWear Logo" width={32} height={32} className="object-contain" />
            </div>
            <span className="text-2xl font-bold text-gray-800 dark:text-white">ReWear</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/browse"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link href="/settings" className="text-green-600 dark:text-green-400 font-medium">
              Settings
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" className="mb-6 -ml-4" asChild>
          <Link href="/dashboard">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Settings</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your account preferences and privacy settings</p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-green-500 hover:bg-green-600"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Jordan Davis</h3>
                  <p className="text-gray-600 dark:text-gray-300">Member since January 2024</p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      Verified
                    </Badge>
                    <Badge variant="outline">42 Swaps</Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="dark:text-gray-200">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="Jordan"
                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="dark:text-gray-200">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue="Davis"
                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="dark:text-gray-200">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="jordan.davis@example.com"
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <Label htmlFor="bio" className="dark:text-gray-200">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself and your style..."
                  defaultValue="Sustainable fashion enthusiast who loves vintage finds and unique pieces. Always looking for quality items to add to my wardrobe!"
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location" className="dark:text-gray-200">
                    Location
                  </Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="location"
                      defaultValue="San Francisco, CA"
                      className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="sizes" className="dark:text-gray-200">
                    Preferred Sizes
                  </Label>
                  <Input
                    id="sizes"
                    defaultValue="S, M (tops), 28-30 (bottoms)"
                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Monitor className="w-5 h-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Theme</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Choose how ReWear looks to you. Select a single theme, or sync with your system and automatically
                    switch between day and night themes.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant={theme === "light" ? "default" : "outline"}
                      className="flex flex-col items-center gap-2 h-auto py-3"
                      onClick={() => setTheme("light")}
                    >
                      <Sun className="w-5 h-5" />
                      <span className="text-sm">Light</span>
                    </Button>
                    <Button
                      variant={theme === "dark" ? "default" : "outline"}
                      className="flex flex-col items-center gap-2 h-auto py-3"
                      onClick={() => setTheme("dark")}
                    >
                      <Moon className="w-5 h-5" />
                      <span className="text-sm">Dark</span>
                    </Button>
                    <Button
                      variant={theme === "system" ? "default" : "outline"}
                      className="flex flex-col items-center gap-2 h-auto py-3"
                      onClick={() => setTheme("system")}
                    >
                      <Monitor className="w-5 h-5" />
                      <span className="text-sm">System</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Email Notifications</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive notifications about swap requests and updates
                    </p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <Separator className="dark:bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Push Notifications</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Get instant notifications on your device</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <Separator className="dark:bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">SMS Notifications</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive text messages for important updates
                    </p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                  />
                </div>

                <Separator className="dark:bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Marketing Communications
                    </Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive updates about new features and promotions
                    </p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Shield className="w-5 h-5" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Public Profile</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Allow other users to view your profile and swap history
                    </p>
                  </div>
                  <Switch
                    checked={privacy.profileVisible}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, profileVisible: checked })}
                  />
                </div>

                <Separator className="dark:bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Show Location</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Display your city to help with local swaps
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showLocation}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showLocation: checked })}
                  />
                </div>

                <Separator className="dark:bg-gray-700" />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Show Swap History</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Let others see your successful swaps and ratings
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showSwapHistory}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showSwapHistory: checked })}
                  />
                </div>
              </div>

              <Separator className="dark:bg-gray-700" />

              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3 block">
                  Change Password
                </Label>
                <div className="space-y-3">
                  <Input
                    type="password"
                    placeholder="Current password"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <Input
                    type="password"
                    placeholder="New password"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <Button className="bg-green-500 hover:bg-green-600 text-white">Update Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data & Account */}
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Download className="w-5 h-5" />
                Data & Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">
                    Export Your Data
                  </Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Download a copy of your ReWear data including your profile, items, and swap history.
                  </p>
                  <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Request Data Export
                  </Button>
                </div>

                <Separator className="dark:bg-gray-700" />

                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">Import Data</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Import your wardrobe data from other platforms or spreadsheets.
                  </p>
                  <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Import Data
                  </Button>
                </div>

                <Separator className="dark:bg-gray-700" />

                <div>
                  <Label className="text-sm font-medium text-red-600 dark:text-red-400 mb-2 block">
                    Delete Account
                  </Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button variant="destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Changes */}
          <div className="flex justify-end gap-3 pt-6">
            <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 bg-transparent">
              Cancel
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
