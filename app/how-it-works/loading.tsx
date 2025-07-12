import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b border-green-100 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-24 h-6" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Skeleton className="w-16 h-6" />
            <Skeleton className="w-20 h-6" />
            <Skeleton className="w-16 h-6" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <Skeleton className="w-3/4 h-10 mx-auto mb-4" />
          <Skeleton className="w-1/2 h-6 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                <Skeleton className="w-3/4 h-6 mx-auto mb-2" />
                <Skeleton className="w-full h-16 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <Skeleton className="w-3/4 h-10 mx-auto mb-4" />
          <Skeleton className="w-1/2 h-6 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6 flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <Skeleton className="w-3/4 h-6 mb-2" />
                  <Skeleton className="w-full h-12" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Skeleton className="w-3/4 h-10 mx-auto mb-4" />
          <Skeleton className="w-1/2 h-6 mx-auto mb-8" />
          <Skeleton className="w-48 h-12 mx-auto" />
        </div>
      </div>
    </div>
  )
}
