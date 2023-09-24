import { UnsplashUser } from "@/models/Unsplash-user"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { use } from "react"

interface PageProps {
    params: {
        username: string
    }
}

async function getUser(username: string): Promise<UnsplashUser> {
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    if (response.status === 404) notFound();
    
    return await response.json()
}

export async function generateMetadata({params: {username}}: PageProps): Promise<Metadata> {
    const user = await getUser(username);
    return {
        title: user.username + "- nextJS Mastery"
    }
}

export default async function Page({params: {username}}: PageProps) {
    const user = await getUser(username);

    return (
        <div>
            <h1>{user.username}</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <a href={"https://unsplash.com/" + user.username}>Unsplash Profile</a>
        </div>
        
       
    )
}