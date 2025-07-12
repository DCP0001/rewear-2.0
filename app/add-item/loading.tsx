import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Skeleton className="w-48 h-10 mb-6" />

        <div className="mb-8">
          <Skeleton className="w-64 h-10 mb-2" />
          <Skeleton className="w-96 h-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="w-full h-32 rounded-lg" />
                  ))}
                </div>
                <Skeleton className="w-full h-4" />
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-24" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Skeleton className="w-full h-10" />
                  <Skeleton className="w-full h-10" />
                </div>
                <Skeleton className="w-full h-10" />
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Skeleton className="flex-1 h-10" />
                  <Skeleton className="w-10 h-10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="w-20 h-8" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="w-full h-8" />
                <Skeleton className="w-full h-8" />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-40 mb-4" />
                <Skeleton className="w-3/4 h-5 mb-2" />
                <Skeleton className="w-1/2 h-4 mb-2" />
                <Skeleton className="w-full h-8" />
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-32" />
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-24" />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Skeleton className="w-32 h-12" />
          <Skeleton className="w-32 h-12" />
        </div>
      </div>
    </div>
  )
}
