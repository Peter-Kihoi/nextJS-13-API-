import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import { Alert } from "@/components/bootstrap";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISR - nextJS Mastery',
}

export const revalidate = 15

export default async function Page() {
  const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width)
  const height = (width / image.width) * image.height
  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
      This page uses <strong>Increamental static regeneration. </strong>A new image is fetched every
      15 seconds (after refreshing the page) and then served from the cache for that duration
      </Alert>
      <Image
        src={image.urls.small}
        height={height}
        width={width}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
       />
    </div>

  )
}