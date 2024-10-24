import React from 'react'

export const Loader = () => {
  return (
   <div className="flex justify-center items-center h-screen">
      <div className="loader w-16 h-16 border-4 border-t-red-500 border-t-4 border-gray-400 rounded-full animate-spin"></div>
    </div>
  )
}
