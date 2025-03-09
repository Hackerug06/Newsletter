import { SubscribeForm } from "@/components/subscribe-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Join Our Newsletter
          </h1>
          <p className="mb-10 text-xl text-gray-600">
            Stay updated with the latest news, promotions, and insights. Subscribe to our newsletter today!
          </p>

          <SubscribeForm />

          <div className="mt-12">
            <p className="text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

