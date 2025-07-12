"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, X, Plus, Camera, ChevronLeft, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = ["Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories", "Activewear", "Sleepwear"]

const sizes = {
  Tops: ["XS", "S", "M", "L", "XL", "XXL"],
  Bottoms: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "38"],
  Dresses: ["XS", "S", "M", "L", "XL", "XXL"],
  Outerwear: ["XS", "S", "M", "L", "XL", "XXL"],
  Shoes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
  Accessories: ["One Size"],
  Activewear: ["XS", "S", "M", "L", "XL", "XXL"],
  Sleepwear: ["XS", "S", "M", "L", "XL", "XXL"],
}

const conditions = [
  { value: "new", label: "New with tags", points: 60 },
  { value: "like-new", label: "Like new", points: 50 },
  { value: "excellent", label: "Excellent", points: 40 },
  { value: "good", label: "Good", points: 30 },
  { value: "fair", label: "Fair", points: 20 },
]

export default function AddItem() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedCondition, setSelectedCondition] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [swapPreferences, setSwapPreferences] = useState({
    directSwap: true,
    pointRedemption: true,
  })

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleImageUpload = () => {
    // Simulate image upload
    const newImage = "/placeholder.svg?height=200&width=200"
    setUploadedImages([...uploadedImages, newImage])
  }

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index))
  }

  const selectedConditionData = conditions.find((c) => c.value === selectedCondition)

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
            <Link href="/add-item" className="text-green-600 dark:text-green-400 font-medium">
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" className="mb-6 -ml-4" asChild>
          <Link href="/dashboard">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Add New Item</h1>
          <p className="text-gray-600 dark:text-gray-300">Share your unused clothes with the ReWear community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Camera className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Photos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Upload ${index + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6"
                        onClick={() => removeImage(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}

                  {uploadedImages.length < 8 && (
                    <button
                      onClick={handleImageUpload}
                      className="w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900 transition-colors"
                    >
                      <Upload className="w-6 h-6 text-gray-400 dark:text-gray-500 mb-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Add Photo</span>
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Add up to 8 photos. First photo will be the main image.
                </p>
              </CardContent>
            </Card>

            {/* Basic Info */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title" className="dark:text-gray-200">
                    Item Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g., Vintage Denim Jacket"
                    className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="dark:text-gray-200">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your item, its condition, fit, and any special features..."
                    className="mt-1 min-h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="dark:text-gray-200">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Select category" />
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
                    <Label className="dark:text-gray-200">Size</Label>
                    <Select disabled={!selectedCategory}>
                      <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        {selectedCategory &&
                          sizes[selectedCategory as keyof typeof sizes]?.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="dark:text-gray-200">Condition</Label>
                  <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                    <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                      {conditions.map((condition) => (
                        <SelectItem key={condition.value} value={condition.value}>
                          <div className="flex items-center justify-between w-full">
                            <span>{condition.label}</span>
                            <Badge className="ml-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                              {condition.points} pts
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add tags (e.g., vintage, designer, casual)"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addTag()}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <Button onClick={addTag} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="flex items-center gap-1 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tag}
                        <button onClick={() => removeTag(tag)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Swap Preferences */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Swap Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="direct-swap"
                    checked={swapPreferences.directSwap}
                    onCheckedChange={(checked) =>
                      setSwapPreferences((prev) => ({ ...prev, directSwap: checked as boolean }))
                    }
                  />
                  <Label htmlFor="direct-swap" className="dark:text-gray-200">
                    Allow direct item swaps
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="point-redemption"
                    checked={swapPreferences.pointRedemption}
                    onCheckedChange={(checked) =>
                      setSwapPreferences((prev) => ({ ...prev, pointRedemption: checked as boolean }))
                    }
                  />
                  <Label htmlFor="point-redemption" className="dark:text-gray-200">
                    Allow point redemption
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    {uploadedImages.length > 0 ? (
                      <Image
                        src={uploadedImages[0] || "/placeholder.svg"}
                        alt="Preview"
                        width={200}
                        height={160}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center text-gray-400 dark:text-gray-500">
                        <Camera className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Add photos to see preview</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Item Title</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Category • Size • Condition</p>
                    {selectedConditionData && (
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          {selectedConditionData.points} points
                        </span>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          {selectedConditionData.label}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-0 shadow-lg bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-300">
                  <Info className="w-5 h-5" />
                  Tips for Success
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-700 dark:text-blue-400 space-y-2">
                <p>• Take clear, well-lit photos from multiple angles</p>
                <p>• Be honest about condition and any flaws</p>
                <p>• Include measurements for better fit guidance</p>
                <p>• Use relevant tags to help others find your item</p>
                <p>• Respond promptly to swap requests</p>
              </CardContent>
            </Card>

            {/* Point Calculator */}
            {selectedConditionData && (
              <Card className="border-0 shadow-lg bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-300">Estimated Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {selectedConditionData.points}
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      Based on {selectedConditionData.label} condition
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end gap-4">
          <Button variant="outline" size="lg" className="dark:border-gray-600 dark:text-gray-300 bg-transparent">
            Save as Draft
          </Button>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8">
            List Item
          </Button>
        </div>
      </div>
    </div>
  )
}
