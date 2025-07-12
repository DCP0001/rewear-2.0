"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Recycle,
  Plus,
  Heart,
  MessageCircle,
  Star,
  TrendingUp,
  Package,
  Users,
  Settings,
  Bell,
  Search,
  Grid,
  List,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const userStats = {
    totalSwaps: 23,
    pointsEarned: 450,
    itemsListed: 12,
    rating: 4.8,
    joinDate: "March 2024",
  }

  const myItems = [
    {
      id: 1,
      title: "Vintage Band T-Shirt",
      brand: "Nirvana",
      size: "M",
      condition: "Good",
      points: 25,
      image: "/placeholder.svg?height=200&width=200",
      status: "active",
      views: 45,
      likes: 8,
      timeAgo: "2 days ago",
    },
    {
      id: 2,
      title: "Designer Handbag",
      brand: "Coach",
      size: "One Size",
      condition: "Excellent",
      points: 85,
      image: "/placeholder.svg?height=200&width=200",
      status: "pending",
      views: 23,
      likes: 12,
      timeAgo: "1 week ago",
    },
    {
      id: 3,
      title: "Wool Winter Coat",
      brand: "Zara",
      size: "L",
      condition: "Like New",
      points: 65,
      image: "/placeholder.svg?height=200&width=200",
      status: "swapped",
      views: 67,
      likes: 15,
      timeAgo: "2 weeks ago",
    },
  ]

  const recentActivity = [
    {
      type: "swap_completed",
      message: "Your swap with Sarah M. was completed",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      type: "new_message",
      message: "New message from Alex about your denim jacket",
      time: "5 hours ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      type: "item_liked",
      message: "Someone liked your vintage sweater",
      time: "1 day ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      type: "points_earned",
      message: "You earned 45 points from a successful swap",
      time: "2 days ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const swapRequests = [
    {
      id: 1,
      user: "Emma Wilson",
      userAvatar: "/placeholder.svg?height=40&width=40",
      userRating: 4.9,
      requestedItem: "Vintage Denim Jacket",
      offeredItem: "Silk Scarf Collection",
      message: "Hi! I love your denim jacket. Would you be interested in swapping for my silk scarf collection?",
      time: "3 hours ago",
      status: "pending",
    },
    {
      id: 2,
      user: "Michael Chen",
      userAvatar: "/placeholder.svg?height=40&width=40",
      userRating: 4.7,
      requestedItem: "Designer Handbag",
      offeredItem: "Leather Boots + 20 points",
      message: "Your handbag is exactly what I'm looking for! I can offer my leather boots plus 20 points.",
      time: "1 day ago",
      status: "pending",
    },
  ]

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
            <Link href="/dashboard" className="text-green-600 dark:text-green-400 font-medium">
              Dashboard
            </Link>
            <Link
              href="/settings"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Settings
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Welcome back, Abhi!</h1>
          <p className="text-gray-600 dark:text-gray-300">Here's what's happening with your sustainable wardrobe</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Total Swaps</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{userStats.totalSwaps}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Points Earned</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{userStats.pointsEarned}</p>
                </div>
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Items Listed</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{userStats.itemsListed}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Rating</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white mr-2">{userStats.rating}</p>
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white h-auto py-4 flex flex-col items-center"
                    asChild
                  >
                    <Link href="/add-item">
                      <Plus className="w-6 h-6 mb-2" />
                      Add New Item
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center bg-transparent" asChild>
                    <Link href="/browse">
                      <Search className="w-6 h-6 mb-2" />
                      Browse Items
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center bg-transparent" asChild>
                    <Link href="/settings">
                      <Settings className="w-6 h-6 mb-2" />
                      Settings
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* My Items */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="dark:text-white">My Items</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-green-100 dark:bg-green-900" : ""}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-green-100 dark:bg-green-900" : ""}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
                  {myItems.map((item) => (
                    <div
                      key={item.id}
                      className={`border border-gray-200 dark:border-gray-600 rounded-lg p-4 ${
                        viewMode === "list" ? "flex items-center space-x-4" : ""
                      }`}
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className={`rounded-lg object-cover ${viewMode === "grid" ? "w-full h-32 mb-3" : "w-16 h-16"}`}
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-800 dark:text-white text-sm">{item.title}</h3>
                          <Badge
                            variant={
                              item.status === "active" ? "default" : item.status === "pending" ? "secondary" : "outline"
                            }
                            className="text-xs"
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {item.brand} • Size {item.size} • {item.condition}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                          <span>{item.points} points</span>
                          <span>{item.timeAgo}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {item.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              {item.likes}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-700">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Swap Requests */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Swap Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {swapRequests.map((request) => (
                    <div key={request.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={request.userAvatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {request.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-800 dark:text-white">{request.user}</h4>
                              <div className="flex items-center">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-xs text-gray-500 dark:text-gray-400">{request.userRating}</span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{request.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            Wants: <span className="font-medium">{request.requestedItem}</span>
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            Offers: <span className="font-medium">{request.offeredItem}</span>
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">"{request.message}"</p>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                              Accept
                            </Button>
                            <Button size="sm" variant="outline" className="bg-transparent">
                              Decline
                            </Button>
                            <Button size="sm" variant="ghost">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="text-xl">JD</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Jane Doe</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Fashion Enthusiast</p>
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{userStats.rating}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">(23 reviews)</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Member since {userStats.joinDate}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/settings">Edit Profile</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">U</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 dark:text-white">{activity.message}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Points Balance */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Points Balance</h3>
                <p className="text-3xl font-bold mb-4">{userStats.pointsEarned}</p>
                <p className="text-sm opacity-90 mb-4">Use your points to redeem items without direct swaps</p>
                <Button variant="outline" size="sm" className="border-white text-green-600 bg-white hover:bg-gray-100">
                  Browse Items
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
