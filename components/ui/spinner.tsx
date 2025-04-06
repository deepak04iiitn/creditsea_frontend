"use client"

import React from "react"

interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export const Spinner = ({ size = "md", className = "" }: SpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  }
  
  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-t-2 border-b-2 border-primary ${sizeClasses[size]}`}></div>
    </div>
  )
}