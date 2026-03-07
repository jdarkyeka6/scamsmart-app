'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
      router.push('/dashboard')
    } else {
      router.push('/signup')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center max-w-xl">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ScamSmart
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          ScamSmart is an AI-powered scam protection platform that helps detect
          phishing emails, scam websites, and online fraud.
        </p>

        <a
          href="/scamsmart"
          className="text-blue-600 underline"
        >
          Learn what ScamSmart is
        </a>

        <div className="mt-8 animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading ScamSmart...</p>

      </div>
    </main>
  )
}