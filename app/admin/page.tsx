"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Search,
  Filter,
  Eye,
  Flag,
  Users,
  Package,
  TrendingUp,
  Star,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const pendingItems = [
  {
    id: 1,
    title: "Designer Handbag",
    category: "Accessories",
    user: "Emma Wilson",
    condition: "Like New",
    points: 85,
    image: "/placeholder.svg?height=150&width=150",
    submittedAt: "2024-01-15T10:30:00Z",
    status: "pending",
  },
  {
    id: 2,
    title: "Vintage Leather Jacket",
    category: "Outerwear",
    user: "Mike Johnson",
    condition: "Good",
    points: 65,
    image: "/placeholder.svg?height=150&width=150",
    submittedAt: "2024-01-15T09:15:00Z",
    status: "pending",
  },
  {
    id: 3,
    title: "Summer Dress",
    category: "Dresses",
    user: "Sarah Chen",
    condition: "Excellent",
    points: 45,
    image: "/placeholder.svg?height=150&width=150",
    submittedAt: "2024-01-15T08:45:00Z",
    status: "pending",
  },
]

const flaggedContent = [
  {
    id: 1,
    title: "Suspicious Designer Item",
    user: "Unknown User",
    reason: "Potential counterfeit",
    reportedBy: "Community",
    image: "/placeholder.svg?height=100&width=100",
    flaggedAt: "2024-01-14T16:20:00Z",
  },
  {
    id: 2,
    title: "Inappropriate Description",
    user: "John Doe",
    reason: "Inappropriate content",
    reportedBy: "User Report",
    image: "/placeholder.svg?height=100&width=100",
    flaggedAt: "2024-01-14T14:10:00Z",
  },
]

export default function AdminPanel() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const handleApprove = (itemId: number) => {
    console.log(`Approved item ${itemId}`)
  }

  const handleReject = (itemId: number) => {
    console.log(`Rejected item ${itemId}`)
  }

  const handleRemoveContent = (contentId: number) => {
    console.log(`Removed flagged content ${contentId}`)
  }

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
          <div className="flex items-center gap-4">
            <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
              <Shield className="w-4 h-4 mr-1" />
              Admin Panel
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage listings, moderate content, and oversee platform activity
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">Pending Reviews</p>
                  <p className="text-2xl font-bold text-blue-800 dark:text-blue-300">23</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 dark:text-red-400 mb-1">Flagged Content</p>
                  <p className="text-2xl font-bold text-red-800 dark:text-red-300">7</p>
                </div>
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Flag className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-1">Active Users</p>
                  <p className="text-2xl font-bold text-green-800 dark:text-green-300">1,247</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 dark:text-amber-400 mb-1">Daily Swaps</p>
                  <p className="text-2xl font-bold text-amber-800 dark:text-amber-300">89</p>
                </div>
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700">
            <TabsTrigger
              value="pending"
              className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-300"
            >
              Pending Approvals
            </TabsTrigger>
            <TabsTrigger
              value="flagged"
              className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-300"
            >
              Flagged Content
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-300"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-300"
            >
              Users
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-300"
            >
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            {/* Filters */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full md:w-48 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                      <SelectItem value="all">All Items</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Pending Items */}
            <div className="space-y-4">
              {pendingItems.map((item) => (
                <Card key={item.id} className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="w-24 h-24 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">by {item.user}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                              <span>{item.category}</span>
                              <span>•</span>
                              <span>{item.condition}</span>
                              <span>•</span>
                              <span>{item.points} points</span>
                            </div>
                          </div>
                          <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                            Pending Review
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Submitted {new Date(item.submittedAt).toLocaleDateString()}
                          </p>

                          <div className="flex gap-3">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent dark:text-red-400 dark:border-red-700 dark:hover:bg-red-900"
                              onClick={() => handleReject(item.id)}
                            >
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                            <Button
                              size="sm"
                              className="bg-green-500 hover:bg-green-600 text-white"
                              onClick={() => handleApprove(item.id)}
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flagged" className="space-y-6">
            <div className="space-y-4">
              {flaggedContent.map((content) => (
                <Card
                  key={content.id}
                  className="border-0 shadow-lg border-l-4 border-l-red-500 dark:bg-gray-800 dark:border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <Image
                        src={content.image || "/placeholder.svg"}
                        alt={content.title}
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                              {content.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">by {content.user}</p>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                {content.reason}
                              </Badge>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Reported by {content.reportedBy}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Flagged {new Date(content.flaggedAt).toLocaleDateString()}
                          </p>

                          <div className="flex gap-3">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Investigate
                            </Button>
                            <Button variant="outline" size="sm">
                              Dismiss
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => handleRemoveContent(content.id)}>
                              <XCircle className="w-4 h-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">Platform Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">New Users (This Week)</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">+127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Items Listed (This Week)</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">+89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Successful Swaps (This Week)</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">+156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Points Redeemed (This Week)</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">2,340</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">Content Moderation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Items Approved (Today)</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">34</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Items Rejected (Today)</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Reports Resolved (Today)</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Average Review Time</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">2.3 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">User Management</h2>
              <div className="flex gap-3">
                <Input
                  placeholder="Search users..."
                  className="w-64 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <Select defaultValue="all">
                  <SelectTrigger className="w-48 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="new">New (Last 7 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  name: "Sarah Martinez",
                  email: "sarah.m@example.com",
                  joinDate: "2024-01-10",
                  swaps: 47,
                  rating: 4.9,
                  status: "active",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                  id: 2,
                  name: "Emma Wilson",
                  email: "emma.w@example.com",
                  joinDate: "2024-01-08",
                  swaps: 23,
                  rating: 4.7,
                  status: "active",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                  id: 3,
                  name: "Mike Johnson",
                  email: "mike.j@example.com",
                  joinDate: "2024-01-05",
                  swaps: 12,
                  rating: 4.2,
                  status: "suspended",
                  avatar: "/placeholder.svg?height=40&width=40",
                },
              ].map((user) => (
                <Card key={user.id} className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">{user.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{user.swaps} swaps</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                              {user.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          className={
                            user.status === "active"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          }
                        >
                          {user.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                        {user.status === "active" ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent dark:text-red-400 dark:border-red-700 dark:hover:bg-red-900"
                          >
                            Suspend
                          </Button>
                        ) : (
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                            Reactivate
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reports" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Platform Reports</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">Daily Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">New Users</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">+12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Items Listed</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">+34</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Swaps Completed</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">+28</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Points Redeemed</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">1,240</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">Top Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Tops", count: 156, percentage: 35 },
                      { name: "Dresses", count: 89, percentage: 20 },
                      { name: "Outerwear", count: 67, percentage: 15 },
                      { name: "Shoes", count: 45, percentage: 10 },
                    ].map((category) => (
                      <div key={category.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">{category.name}</span>
                          <span className="font-medium">{category.count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Server Status</span>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        Healthy
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Database</span>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        Online
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Image Storage</span>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        98% Available
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Response Time</span>
                      <span className="font-medium text-green-600 dark:text-green-400">142ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>Recent Activity Log</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "2 minutes ago", action: "User sarah.m@example.com listed new item", type: "info" },
                    {
                      time: "5 minutes ago",
                      action: "Swap completed between users emma.w and mike.j",
                      type: "success",
                    },
                    { time: "12 minutes ago", action: "Item flagged for review by community", type: "warning" },
                    { time: "18 minutes ago", action: "New user registration: jane.doe@example.com", type: "info" },
                    { time: "25 minutes ago", action: "Admin approved 3 pending items", type: "success" },
                  ].map((log, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          log.type === "success"
                            ? "bg-green-500"
                            : log.type === "warning"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 dark:text-white">{log.action}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
