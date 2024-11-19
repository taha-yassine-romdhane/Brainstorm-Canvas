'use client'

import { UserButton, SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export function Navbar() {
  const { isSignedIn, user } = useUser()

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Brainstorm Canvas</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/boards"
                  className="text-gray-700 hover:text-gray-900"
                >
                  My Boards
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
