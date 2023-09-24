import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
    const image: UnsplashImage = await response.json()

    const width = Math.min(500, image.width)
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Image
                src={image.urls.small}
                width={width}
                height={height}
                alt={image.urls.small}
                className="rounded shadow mw-100 h-100"
            />
        </div>
    )
    
}