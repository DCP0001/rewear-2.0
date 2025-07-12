"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Recycle, ArrowRight, Star, Users, Leaf, Heart, MapPin, Clock, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      brand: "Levi's",
      size: "M",
      condition: "Excellent",
      points: 45,
      image: "/placeholder.svg?height=300&width=300",
      location: "San Francisco, CA",
      timeAgo: "2 hours ago",
      liked: false,
    },
    {
      id: 2,
      title: "Floral Summer Dress",
      brand: "Zara",
      size: "S",
      condition: "Like New",
      points: 35,
      image: "/placeholder.svg?height=300&width=300",
      location: "Los Angeles, CA",
      timeAgo: "4 hours ago",
      liked: true,
    },
    {
      id: 3,
      title: "Leather Ankle Boots",
      brand: "Dr. Martens",
      size: "8",
      condition: "Good",
      points: 55,
      image: "/placeholder.svg?height=300&width=300",
      location: "New York, NY",
      timeAgo: "1 day ago",
      liked: false,
    },
    {
      id: 4,
      title: "Cashmere Sweater",
      brand: "Uniqlo",
      size: "L",
      condition: "Excellent",
      points: 40,
      image: "/placeholder.svg?height=300&width=300",
      location: "Seattle, WA",
      timeAgo: "2 days ago",
      liked: true,
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/browse"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
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
              href="/settings"
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Settings
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-transparent border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900"
            >
              Sign In
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-green-100 dark:border-gray-700 bg-white dark:bg-gray-900">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/browse"
                className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Browse
              </Link>
              <Link
                href="/how-it-works"
                className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="/dashboard"
                className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/settings"
                className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Settings
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-green-100 dark:border-gray-700">
                <Button
                  variant="outline"
                  className="bg-transparent border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900"
                >
                  Sign In
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Sustainable Fashion
            <span className="block text-green-600 dark:text-green-400">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Exchange clothing through direct swaps or our point-based system. Give your wardrobe a second life while
            discovering unique pieces from others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3" asChild>
              <Link href="/browse">
                Start Swapping
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900 px-8 py-3"
              asChild
            >
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">10K+</h3>
            <p className="text-gray-600 dark:text-gray-300">Active Members</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">50K+</h3>
            <p className="text-gray-600 dark:text-gray-300">Items Swapped</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">2M+</h3>
            <p className="text-gray-600 dark:text-gray-300">CO₂ Saved (lbs)</p>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Featured Items</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing pieces from our community. Each item is carefully curated and ready for its next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white"
                >
                  <Heart className={`w-4 h-4 ${item.liked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </Button>
                <Badge className="absolute top-3 left-3 bg-green-500 text-white">{item.condition}</Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 dark:text-white text-sm">{item.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {item.points} pts
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {item.brand} • Size {item.size}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.timeAgo}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-transparent border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900"
            asChild
          >
            <Link href="/browse">
              View All Items
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-green-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">How ReWear Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Three simple steps to start your sustainable fashion journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">List Your Items</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload photos and details of clothing you no longer wear
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Browse & Swap</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find items you love and propose swaps or use points to redeem
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Enjoy & Repeat</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive your new items and continue building a sustainable wardrobe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What Our Community Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "ReWear has completely transformed how I think about fashion. I've found amazing pieces while giving my
                old clothes new life!"
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Sarah M.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fashion Enthusiast</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The point system is genius! I can earn points from items I don't want and use them to get pieces I
                love."
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Jessica D.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sustainable Living Advocate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Not only am I saving money, but I'm also helping the environment. The community is so welcoming and
                trustworthy!"
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Maria R.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">College Student</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Wardrobe?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of fashion lovers who are making sustainable choices while discovering unique pieces. Start
            your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3" asChild>
              <Link href="/browse">Sign Up Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 bg-transparent"
            >
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/rewear-logo.png" alt="ReWear Logo" width={32} height={32} className="object-contain" />
                </div>
                <span className="text-2xl font-bold">ReWear</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making sustainable fashion accessible to everyone through community-driven clothing exchange.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/browse" className="hover:text-white transition-colors">
                    Browse Items
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white transition-colors">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/add-item" className="hover:text-white transition-colors">
                    List an Item
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Safety Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ReWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
