import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  Share2,
  Star,
  MapPin,
  Calendar,
  Package,
  ArrowUpDown,
  MessageCircle,
  Shield,
  ChevronLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const itemImages = [
  "/placeholder.svg?height=500&width=500",
  "/placeholder.svg?height=500&width=500",
  "/placeholder.svg?height=500&width=500",
  "/placeholder.svg?height=500&width=500",
]

export default function ItemDetail() {
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
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
          <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/browse" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
            Browse
          </Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-white">Vintage Denim Jacket</span>
        </div>

        <Button variant="ghost" className="mb-6 -ml-4" asChild>
          <Link href="/browse">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={itemImages[0] || "/placeholder.svg"}
                alt="Vintage Denim Jacket"
                width={500}
                height={500}
                className="w-full h-96 object-cover"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-600 rounded-full p-2"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {itemImages.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`View ${index + 2}`}
                    width={120}
                    height={120}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Outerwear</Badge>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Excellent Condition
                </Badge>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Vintage Denim Jacket</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Classic 90s style denim jacket in excellent condition. Perfect for layering!
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <div className="flex items-center">
                  <Package className="w-4 h-4 mr-1" />
                  Size: Medium
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Listed 2 days ago
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Sarah Martinez</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        4.9 (127 reviews)
                      </div>
                      <div className="flex items-center">
                        <ArrowUpDown className="w-4 h-4 mr-1" />
                        89 swaps completed
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <Shield className="w-4 h-4" />
                  <span>Verified member since 2023</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-100 dark:border-green-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Redeem with Points</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Use your earned points to get this item</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">45 pts</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">You have 245 pts</div>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Redeem with Points</Button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Request a Swap</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Offer one of your items in exchange</p>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Request Swap
                </Button>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Item Description */}
        <Card className="border-0 shadow-lg mb-8 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Description</h2>
            <div className="prose max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                This vintage denim jacket is a true classic! It's from the 90s and has that perfect worn-in feel without
                any damage. The fit is relaxed and perfect for layering over t-shirts, sweaters, or dresses.
              </p>
              <p className="mb-4">Features include:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>100% cotton denim</li>
                <li>Classic button closure</li>
                <li>Two chest pockets</li>
                <li>Adjustable button tabs at waist</li>
                <li>No stains, tears, or significant wear</li>
              </ul>
              <p>
                I'm looking to swap for something in a similar style category or redeem for points. Open to offers and
                happy to answer any questions!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Item Details Grid */}
        <Card className="border-0 shadow-lg mb-8 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Item Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Category</span>
                  <span className="font-medium text-gray-800 dark:text-white">Outerwear</span>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Size</span>
                  <span className="font-medium text-gray-800 dark:text-white">Medium</span>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Condition</span>
                  <span className="font-medium text-gray-800 dark:text-white">Excellent</span>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Brand</span>
                  <span className="font-medium text-gray-800 dark:text-white">Vintage/Unbranded</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Color</span>
                  <span className="font-medium text-gray-800 dark:text-white">Classic Blue</span>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Material</span>
                  <span className="font-medium text-gray-800 dark:text-white">100% Cotton</span>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Availability</span>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Available</Badge>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Point Value</span>
                  <span className="font-medium text-green-600 dark:text-green-400">45 points</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Similar Items */}
        <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Similar Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt={`Similar item ${item}`}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 dark:text-white mb-1">Denim Jacket</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Size L • Good</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 dark:text-green-400 font-semibold">38 pts</span>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                          4.7
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
