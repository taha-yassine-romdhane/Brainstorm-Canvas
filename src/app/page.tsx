'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-6xl md:text-7xl">
            Welcome to Brainstorm Canvas
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl md:text-2xl">
            Create, organize, and visualize your ideas with our intuitive canvas board.
            Perfect for brainstorming sessions, project planning, and creative thinking.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <SignedIn>
              <Link
                href="/boards"
                className="transform hover:scale-105 transition-all duration-200 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 md:py-4 md:text-lg md:px-10"
              >
                Go to My Boards
              </Link>
            </SignedIn>
            <SignedOut>
              <Link
                href="/sign-in"
                className="transform hover:scale-105 transition-all duration-200 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </SignedOut>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Brainstorm Ideas</h3>
              <p className="mt-2 text-gray-600">Capture and organize your thoughts in a visual, intuitive way.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Collaborate</h3>
              <p className="mt-2 text-gray-600">Work together with your team in real-time on shared boards.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Organize</h3>
              <p className="mt-2 text-gray-600">Keep your projects structured with multiple boards and sections.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
