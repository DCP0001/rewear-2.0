"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, Heart, Star, MapPin, SlidersHorizontal, Grid3X3, List, ArrowUpDown, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const items = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    category: "Outerwear",
    size: "M",
    condition: "Excellent",
    points: 45,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
    user: "Sarah M.",
    rating: 4.8,
    location: "San Francisco, CA",
    distance: "2.3 miles",
    brand: "Levi's",
    color: "Blue",
    isLiked: false,
    tags: ["vintage", "classic", "denim"],
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    category: "Dresses",
    size: "S",
    condition: "Like New",
    points: 35,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop&crop=center",
    user: "Emma K.",
    rating: 4.9,
    location: "Oakland, CA",
    distance: "5.1 miles",
    brand: "Zara",
    color: "Floral",
    isLiked: true,
    tags: ["summer", "floral", "casual"],
  },
  {
    id: 3,
    title: "Designer Sneakers",
    category: "Shoes",
    size: "8",
    condition: "Good",
    points: 55,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    user: "Alex R.",
    rating: 4.7,
    location: "Berkeley, CA",
    distance: "8.7 miles",
    brand: "Nike",
    color: "White",
    isLiked: false,
    tags: ["designer", "sneakers", "athletic"],
  },
  {
    id: 4,
    title: "Cozy Knit Sweater",
    category: "Tops",
    size: "L",
    condition: "Excellent",
    points: 40,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center",
    user: "Maya P.",
    rating: 4.8,
    location: "Palo Alto, CA",
    distance: "12.4 miles",
    brand: "H&M",
    color: "Beige",
    isLiked: false,
    tags: ["cozy", "winter", "knit"],
  },
  {
    id: 5,
    title: "Leather Handbag",
    category: "Accessories",
    size: "One Size",
    condition: "Like New",
    points: 65,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    user: "Lisa W.",
    rating: 4.9,
    location: "San Jose, CA",
    distance: "15.2 miles",
    brand: "Coach",
    color: "Brown",
    isLiked: true,
    tags: ["leather", "designer", "handbag"],
  },
  {
    id: 6,
    title: "Casual Jeans",
    category: "Bottoms",
    size: "32",
    condition: "Good",
    points: 30,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    user: "Tom H.",
    rating: 4.6,
    location: "Mountain View, CA",
    distance: "18.9 miles",
    brand: "Gap",
    color: "Dark Blue",
    isLiked: false,
    tags: ["casual", "jeans", "everyday"],
  },
  {
    id: 7,
    title: "Silk Blouse",
    category: "Tops",
    size: "M",
    condition: "Like New",
    points: 42,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=400&fit=crop&crop=center",
    user: "Grace L.",
    rating: 4.7,
    location: "San Francisco, CA",
    distance: "3.1 miles",
    brand: "Everlane",
    color: "Cream",
    isLiked: false,
    tags: ["silk", "elegant", "professional"],
  },
  {
    id: 8,
    title: "Wool Coat",
    category: "Outerwear",
    size: "M",
    condition: "Excellent",
    points: 75,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop&crop=center",
    user: "David K.",
    rating: 4.9,
    location: "Los Angeles, CA",
    distance: "6.8 miles",
    brand: "COS",
    color: "Camel",
    isLiked: true,
    tags: ["wool", "winter", "classic"],
  },
  {
    id: 9,
    title: "Athletic Leggings",
    category: "Activewear",
    size: "S",
    condition: "Good",
    points: 28,
    image: "https://images.unsplash.com/photo-1506629905607-c7a5b8e8e3c8?w=400&h=400&fit=crop&crop=center",
    user: "Mia R.",
    rating: 4.5,
    location: "Oakland, CA",
    distance: "4.2 miles",
    brand: "Lululemon",
    color: "Black",
    isLiked: false,
    tags: ["athletic", "yoga", "comfortable"],
  },
  {
    id: 10,
    title: "Vintage Watch",
    category: "Accessories",
    size: "One Size",
    condition: "Excellent",
    points: 85,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
    user: "James P.",
    rating: 4.8,
    location: "Berkeley, CA",
    distance: "7.5 miles",
    brand: "Seiko",
    color: "Gold",
    isLiked: false,
    tags: ["vintage", "luxury", "timepiece"],
  },
  {
    id: 11,
    title: "Maxi Dress",
    category: "Dresses",
    size: "L",
    condition: "Like New",
    points: 38,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center",
    user: "Sophie T.",
    rating: 4.6,
    location: "San Jose, CA",
    distance: "11.3 miles",
    brand: "Free People",
    color: "Navy",
    isLiked: true,
    tags: ["maxi", "bohemian", "elegant"],
  },
  {
    id: 12,
    title: "Leather Boots",
    category: "Shoes",
    size: "9",
    condition: "Good",
    points: 52,
    image: "https://images.unsplash.com/photo-1608256246200-53e8b47b2dc1?w=400&h=400&fit=crop&crop=center",
    user: "Ryan M.",
    rating: 4.7,
    location: "Palo Alto, CA",
    distance: "14.7 miles",
    brand: "Dr. Martens",
    color: "Brown",
    isLiked: false,
    tags: ["leather", "boots", "durable"],
  },
]

const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories", "Activewear"]
const conditions = ["All", "New with tags", "Like New", "Excellent", "Good", "Fair"]
const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL"]
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "points-low", label: "Points: Low to High" },
  { value: "points-high", label: "Points: High to Low" },
  { value: "distance", label: "Distance" },
  { value: "rating", label: "Highest Rated" },
]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [selectedSize, setSelectedSize] = useState("All")
  const [pointRange, setPointRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [onlySwappable, setOnlySwappable] = useState(false)
  const [nearbyOnly, setNearbyOnly] = useState(false)

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesCondition = selectedCondition === "All" || item.condition === selectedCondition
    const matchesSize = selectedSize === "All" || item.size === selectedSize
    const matchesPoints = item.points >= pointRange[0] && item.points <= pointRange[1]
    const matchesDistance = !nearbyOnly || Number.parseFloat(item.distance) <= 10

    return matchesSearch && matchesCategory && matchesCondition && matchesSize && matchesPoints && matchesDistance
  })

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedCondition("All")
    setSelectedSize("All")
    setPointRange([0, 100])
    setOnlySwappable(false)
    setNearbyOnly(false)
    setSearchTerm("")
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
            <Link href="/browse" className="text-green-600 dark:text-green-400 font-medium">
              Browse
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/add-item"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Add Item
            </Link>
            <Link
              href="/settings"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Settings
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-500/90 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&crop=center"
            alt="Fashion marketplace"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Amazing Fashion</h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                Browse thousands of pre-loved items from our sustainable fashion community
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">🌱 Sustainable</Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">♻️ Eco-Friendly</Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">💚 Community-Driven</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for items, brands, or styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg bg-white dark:bg-gray-800 border-green-200 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-400 shadow-lg"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.slice(1, 6).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-green-500 hover:bg-green-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                }
              >
                {category}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">Condition</Label>
                    <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        {conditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">Size</Label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 block">
                      Points Range: {pointRange[0]} - {pointRange[1]}
                    </Label>
                    <Slider
                      value={pointRange}
                      onValueChange={setPointRange}
                      max={100}
                      min={0}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="swappable" checked={onlySwappable} onCheckedChange={setOnlySwappable} />
                    <Label htmlFor="swappable" className="text-sm">
                      Only show swappable items
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nearby" checked={nearbyOnly} onCheckedChange={setNearbyOnly} />
                    <Label htmlFor="nearby" className="text-sm">
                      Nearby only (within 10 miles)
                    </Label>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button variant="outline" onClick={clearFilters} className="bg-transparent">
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300 font-medium">{filteredItems.length} items found</p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-white dark:bg-gray-800 shadow-md">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={
                viewMode === "grid"
                  ? "bg-green-500 hover:bg-green-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 shadow-md"
              }
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={
                viewMode === "list"
                  ? "bg-green-500 hover:bg-green-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 shadow-md"
              }
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Items Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-white dark:bg-gray-800 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className={`absolute top-3 right-3 rounded-full p-2 backdrop-blur-sm transition-all duration-300 ${
                        item.isLiked
                          ? "bg-red-100/80 text-red-600 hover:bg-red-200/80"
                          : "bg-white/80 hover:bg-white text-gray-600"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${item.isLiked ? "fill-current" : ""}`} />
                    </Button>
                    <Badge className="absolute top-3 left-3 bg-green-500/90 text-white backdrop-blur-sm border-0 shadow-lg">
                      {item.condition}
                    </Badge>
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        {item.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {item.rating}
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1 line-clamp-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Size {item.size} • {item.brand}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <MapPin className="w-3 h-3 mr-1" />
                      {item.distance} • {item.user}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-green-600 dark:text-green-400 font-bold text-lg">{item.points} pts</span>
                      <Link href={`/item/${item.id}`}>
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                            <span>{item.category}</span>
                            <span>•</span>
                            <span>Size {item.size}</span>
                            <span>•</span>
                            <span>{item.brand}</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              {item.condition}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                              {item.rating} • {item.user}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.distance}
                            </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            {item.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                            {item.points} pts
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className={`${item.isLiked ? "text-red-600" : "text-gray-600"} hover:scale-110 transition-transform`}
                            >
                              <Heart className={`w-4 h-4 ${item.isLiked ? "fill-current" : ""}`} />
                            </Button>
                            <Link href={`/item/${item.id}`}>
                              <Button
                                size="sm"
                                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-800 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Load More Items
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredItems.length === 0 && (
          <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">No items found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search criteria or filters</p>
              <Button
                onClick={clearFilters}
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
