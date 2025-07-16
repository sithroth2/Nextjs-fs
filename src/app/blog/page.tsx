import BlogCard from '@/components/blog/BlogCard'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "About",
  description: "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "About",
    description: "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    url: "https://nextjs-fullstack-evening.vercel.app/about",
    siteName: "Home",
    images: [
      {
        url: "https://cdn.sanity.io/images/vftxng62/production/1262ed785d4f6cc55e479961a6d009543b1adf04-1000x582.png?w=1200&fit=max&auto=format",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Blog() {
  return (
    <div>
      <BlogCard />
    </div>
  )
}
