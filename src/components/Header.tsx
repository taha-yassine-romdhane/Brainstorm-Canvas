'use client';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
            <span className="text-xl font-bold">Brainstorm Canvas</span>
          </Link>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link 
                href="/boards"
                className="text-white hover:text-indigo-100 transition-colors px-4 py-2 rounded-md"
              >
                My Boards
              </Link>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 rounded-full border-2 border-white hover:border-indigo-200 transition-colors"
                  }
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors duration-200 font-medium">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
