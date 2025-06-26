import React from 'react'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay
  return (
    <div>
      This is service page
    </div>
  )
}
