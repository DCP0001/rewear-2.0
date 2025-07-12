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
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Skeleton className="w-48 h-6 mb-6" />
        <Skeleton className="w-32 h-10 mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <Skeleton className="w-full h-96 rounded-xl" />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-full h-24 rounded-lg" />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Skeleton className="w-48 h-8 mb-3" />
            <Skeleton className="w-full h-6 mb-2" />
            <Skeleton className="w-full h-16 mb-4" />
            <Skeleton className="w-full h-12 mb-6" />

            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="w-3/4 h-5 mb-2" />
                    <Skeleton className="w-full h-4" />
                  </div>
                  <Skeleton className="w-24 h-10" />
                </div>
                <Skeleton className="w-1/2 h-4" />
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Skeleton className="w-full h-32 rounded-xl" />
              <Skeleton className="w-full h-32 rounded-xl" />
              <div className="flex gap-3">
                <Skeleton className="flex-1 h-10" />
                <Skeleton className="flex-1 h-10" />
              </div>
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-lg mb-8 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-8">
            <Skeleton className="w-48 h-8 mb-4" />
            <Skeleton className="w-full h-32" />
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg mb-8 dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-8">
            <Skeleton className="w-48 h-8 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="w-full h-8" />
                ))}
              </div>
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="w-full h-8" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-8">
            <Skeleton className="w-48 h-8 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="border-0 shadow-md dark:bg-gray-700">
                  <CardContent className="p-0">
                    <Skeleton className="w-full h-40 rounded-t-lg" />
                    <div className="p-4">
                      <Skeleton className="w-3/4 h-5 mb-1" />
                      <Skeleton className="w-1/2 h-4 mb-2" />
                      <div className="flex justify-between">
                        <Skeleton className="w-1/4 h-4" />
                        <Skeleton className="w-1/4 h-4" />
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
