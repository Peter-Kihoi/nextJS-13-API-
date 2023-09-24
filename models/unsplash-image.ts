export interface UnsplashImage {
    description: string
    width: number
    height: number
    urls: {
        small: string
    }
    user: {
        username: string
    }
}