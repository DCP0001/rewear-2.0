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

      <div className="container mx-auto px-4 py-8">
        <Skeleton className="w-48 h-10 mb-6" />

        <div className="mb-8">
          <Skeleton className="w-64 h-10 mb-2" />
          <Skeleton className="w-96 h-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="border-0 shadow-lg dark:bg-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div>
                    <Skeleton className="w-16 h-6 mb-1" />
                    <Skeleton className="w-24 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg mb-8 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <Skeleton className="flex-1 h-10" />
              <div className="flex gap-2">
                <Skeleton className="w-24 h-10" />
                <Skeleton className="w-24 h-10" />
                <Skeleton className="w-24 h-10" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-6">
          <Skeleton className="w-48 h-6" />
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="border-0 shadow-lg dark:bg-gray-800">
              <CardContent className="p-0">
                <Skeleton className="w-full h-48 rounded-t-lg" />
                <div className="p-4">
                  <Skeleton className="w-3/4 h-5 mb-2" />
                  <Skeleton className="w-1/2 h-4 mb-3" />
                  <Skeleton className="w-full h-4 mb-3" />
                  <Skeleton className="w-full h-10" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
