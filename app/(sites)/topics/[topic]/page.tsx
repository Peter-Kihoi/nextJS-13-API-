import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image"
import styles from "./Topic.module.css"
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

interface PageProps {
    params: {
        topic: string,
    }
}

export function generateMetadata({params: {topic}}: PageProps): Metadata{
    return {
        title: topic + ' - nextJS Mastery'
    }

}

// only those in the generateStaticParams will be rendered
//export const dynamicParams = false

// When we want to render them when we build the project but not when the user access them the first time
export function generateStaticParams() {
    return ["cars", "coding", "lifestyle"].map(topic => ({topic})) // {} they are to make it not to be recognised as the function body
}


export default async function Page({params: {topic}}: PageProps) {
const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
const images :UnsplashImage[] = await response.json()
    return (
        <div>
            <Alert>
                This page uses <strong>generateStaticParams</strong> to render and cache static pages at build time,
                even though the URL has a dynamic parameter.Pages that are not included in generateStaticParams will be fetched and rendered on first
                access and the <strong>cached for subsequent requests</strong> (this can be disabled)
            </Alert>
            <h1>{topic}</h1>
            {
                images.map(image => (
                    <Image
                        src={image.urls.small}
                        width={250}
                        height={250}
                        alt={image.description}
                        key={image.urls.small}
                        className={styles.image}
                    />
                ))
            }

        </div>
    )
    
}