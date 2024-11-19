'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/Navbar'

interface Board {
  id: string
  title: string
  description: string | null
  createdAt: Date
}

export default function BoardsPage() {
  const { isSignedIn, user } = useUser()
  const router = useRouter()
  const [boards, setBoards] = useState<Board[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [newBoardTitle, setNewBoardTitle] = useState('')
  const [newBoardDescription, setNewBoardDescription] = useState('')

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/')
    }
  }, [isSignedIn, router])

  useEffect(() => {
    if (isSignedIn) {
      fetchBoards()
    }
  }, [isSignedIn])

  const fetchBoards = async () => {
    const response = await fetch('/api/boards')
    const data = await response.json()
    setBoards(data)
  }

  const createBoard = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newBoardTitle,
          description: newBoardDescription,
        }),
      })

      if (response.ok) {
        setIsCreating(false)
        setNewBoardTitle('')
        setNewBoardDescription('')
        fetchBoards()
      }
    } catch (error) {
      console.error('Error creating board:', error)
    }
  }

  if (!isSignedIn) {
    return null
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">My Boards</h1>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Create New Board
            </button>
          </div>

          {isCreating && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Create New Board</h2>
                <form onSubmit={createBoard}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newBoardTitle}
                      onChange={(e) => setNewBoardTitle(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      value={newBoardDescription}
                      onChange={(e) => setNewBoardDescription(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsCreating(false)}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boards.map((board) => (
              <div
                key={board.id}
                className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => router.push(`/boards/${board.id}`)}
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {board.title}
                  </h3>
                  {board.description && (
                    <p className="mt-1 text-sm text-gray-500">
                      {board.description}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-gray-400">
                    Created on {new Date(board.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
