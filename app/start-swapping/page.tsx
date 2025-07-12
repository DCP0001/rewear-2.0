"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Search,
  Heart,
  Star,
  MapPin,
  Clock,
  ArrowLeftRight,
  Send,
  ChevronLeft,
  Grid3X3,
  List,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for available items
const mockItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    size: "M",
    condition: "Excellent",
    category: "Outerwear",
    color: "Blue",
    owner: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      swaps: 23,
      location: "San Francisco, CA",
    },
    images: ["/placeholder.svg?height=300&width=300"],
    description: "Classic vintage Levi's denim jacket in excellent condition. Perfect for layering!",
    pointValue: 45,
    tags: ["vintage", "denim", "classic"],
    postedDate: "2 days ago",
    likes: 12,
    isLiked: false,
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    brand: "Zara",
    size: "S",
    condition: "Like New",
    category: "Dresses",
    color: "Multicolor",
    owner: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      swaps: 31,
      location: "Los Angeles, CA",
    },
    images: ["/placeholder.svg?height=300&width=300"],
    description: "Beautiful floral dress, worn only once to a wedding. Perfect for summer events!",
    pointValue: 35,
    tags: ["floral", "summer", "wedding"],
    postedDate: "1 day ago",
    likes: 8,
    isLiked: true,
  },
  {
    id: 3,
    title: "Designer Leather Boots",
    brand: "Dr. Martens",
    size: "8",
    condition: "Good",
    category: "Shoes",
    color: "Black",
    owner: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      swaps: 18,
      location: "Seattle, WA",
    },
    images: ["/placeholder.svg?height=300&width=300"],
    description: "Authentic Dr. Martens boots with some wear but still in great shape. Very comfortable!",
    pointValue: 55,
    tags: ["leather", "boots", "designer"],
    postedDate: "3 days ago",
    likes: 15,
    isLiked: false,
  },
  {
    id: 4,
    title: "Silk Blouse",
    brand: "Equipment",
    size: "M",
    condition: "Excellent",
    category: "Tops",
    color: "White",
    owner: {
      name: "Maya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5.0,
      swaps: 42,
      location: "New York, NY",
    },
    images: ["/placeholder.svg?height=300&width=300"],
    description: "Luxurious silk blouse perfect for professional or casual wear. Timeless piece!",
    pointValue: 40,
    tags: ["silk", "professional", "timeless"],
    postedDate: "4 days ago",
    likes: 20,
    isLiked: false,
  },
  {
    id: 5,
    title: "Vintage Band T-Shirt",
    brand: "Vintage",
    size: "L",
    condition: "Good",
    category: "Tops",
    color: "Black",
    owner: {
      name: "Jordan Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
      swaps: 15,
      location: "Austin, TX",
    },
    images: ["/placeholder.svg?height=300&width=300"],
    description: "Authentic vintage band tee from the 90s. Great conversation starter!",
    pointValue: 25,
    tags: ["vintage", "band", "90s"],
    postedDate: "5 days ago",
    likes: 6,
    isLiked: true,
  },
  {
    id: 6,
    title: "Cashmere Sweater",
    brand: "Everlane",
    size: "S",
    condition: "Like New",
    category: "Tops",
    color: "Beige",
    owner: {
      name: "Riley Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      swaps: 28,
      location: "Portland, OR",
    },
    images: ["/placeholder.svg?height=300&width=300"],
    description: "Soft cashmere sweater in neutral beige. Perfect for layering in any season.",
    pointValue: 50,
    tags: ["cashmere", "neutral", "layering"],
    postedDate: "1 week ago",
    likes: 18,
    isLiked: false,
  },
]

export default function StartSwappingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSize, setSelectedSize] = useState("all")
  const [selectedCondition, setSelectedCondition] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [swapMessage, setSwapMessage] = useState("")
  const [likedItems, setLikedItems] = useState<number[]>([2, 5])

  const categories = ["all", "Tops", "Dresses", "Outerwear", "Shoes", "Accessories"]
  const sizes = ["all", "XS", "S", "M", "L", "XL", "XXL"]
  const conditions = ["all", "Like New", "Excellent", "Good", "Fair"]

  const filteredItems = mockItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSize = selectedSize === "all" || item.size === selectedSize
    const matchesCondition = selectedCondition === "all" || item.condition === selectedCondition

    return matchesSearch && matchesCategory && matchesSize && matchesCondition
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
      case "oldest":
        return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()
      case "points-high":
        return b.pointValue - a.pointValue
      case "points-low":
        return a.pointValue - b.pointValue
      case "popular":
        return b.likes - a.likes
      default:
        return 0
    }
  })

  const toggleLike = (itemId: number) => {
    setLikedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const handleSwapRequest = () => {
    // Handle swap request logic here
    console.log("Swap request sent for item:", selectedItem?.id, "Message:", swapMessage)
    setSelectedItem(null)
    setSwapMessage("")
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
            <Link href="/start-swapping" className="text-green-600 dark:text-green-400 font-medium">
              Start Swapping
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 -ml-4" asChild>
          <Link href="/dashboard">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Start Swapping</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover amazing items from our community and start your sustainable fashion journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">1,247</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Items Available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">892</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Active Swappers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <ArrowLeftRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">3,456</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Successful Swaps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">24</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">New Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg mb-8 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search items, brands, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Quick Filters */}
              <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full lg:w-[140px] dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full lg:w-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                    {sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size === "all" ? "All Sizes" : size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="dark:border-gray-600 dark:text-gray-300"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Condition</Label>
                    <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                      <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        {conditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition === "all" ? "All Conditions" : condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Sort By</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="points-high">Highest Points</SelectItem>
                        <SelectItem value="points-low">Lowest Points</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">View</Label>
                    <div className="flex gap-2 mt-1">
                      <Button
                        variant={viewMode === "grid" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setViewMode("grid")}
                        className="flex-1"
                      >
                        <Grid3X3 className="w-4 h-4 mr-2" />
                        Grid
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setViewMode("list")}
                        className="flex-1"
                      >
                        <List className="w-4 h-4 mr-2" />
                        List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {sortedItems.length} of {mockItems.length} items
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">View:</span>
            <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Items Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
                <div className="relative">
                  <Image
                    src={item.images[0] || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleLike(item.id)}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedItems.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-green-500 text-white">{item.pointValue} pts</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.brand} • Size {item.size}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {item.condition}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={item.owner.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {item.owner.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item.owner.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{item.owner.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.owner.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.postedDate}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => setSelectedItem(item)}
                  >
                    <ArrowLeftRight className="w-4 h-4 mr-2" />
                    Request Swap
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative">
                      <Image
                        src={item.images[0] || "/placeholder.svg"}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                        {item.pointValue} pts
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.brand} • Size {item.size}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => toggleLike(item.id)}>
                          <Heart
                            className={`w-4 h-4 ${
                              likedItems.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                            }`}
                          />
                        </Button>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{item.description}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.condition}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={item.owner.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {item.owner.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{item.owner.name}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-gray-500 dark:text-gray-400">{item.owner.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.owner.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.postedDate}
                            </div>
                          </div>
                        </div>
                        <Button
                          className="bg-green-500 hover:bg-green-600 text-white"
                          onClick={() => setSelectedItem(item)}
                        >
                          <ArrowLeftRight className="w-4 h-4 mr-2" />
                          Request Swap
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {sortedItems.length === 0 && (
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">No items found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Try adjusting your search criteria or filters to find more items.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSelectedSize("all")
                  setSelectedCondition("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Swap Request Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Request Swap</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-6">
              <div className="flex gap-4">
                <Image
                  src={selectedItem.images[0] || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={120}
                  height={120}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{selectedItem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedItem.brand} • Size {selectedItem.size}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-green-500 text-white">{selectedItem.pointValue} points</Badge>
                    <Badge variant="secondary">{selectedItem.condition}</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Avatar>
                  <AvatarImage src={selectedItem.owner.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {selectedItem.owner.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedItem.owner.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {selectedItem.owner.rating}
                    </div>
                    <span>•</span>
                    <span>{selectedItem.owner.swaps} swaps</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedItem.owner.location}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="swapMessage" className="dark:text-gray-200">
                  Message to {selectedItem.owner.name.split(" ")[0]}
                </Label>
                <Textarea
                  id="swapMessage"
                  placeholder="Hi! I'm interested in swapping for this item. I have..."
                  value={swapMessage}
                  onChange={(e) => setSwapMessage(e.target.value)}
                  className="mt-1 min-h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">How it works:</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                  <li>• Your swap request will be sent to {selectedItem.owner.name.split(" ")[0]}</li>
                  <li>• They can accept, decline, or counter-offer</li>
                  <li>• If accepted, you'll coordinate the exchange details</li>
                  <li>• Both parties confirm completion to earn points</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setSelectedItem(null)}>
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  onClick={handleSwapRequest}
                  disabled={!swapMessage.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Request
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
