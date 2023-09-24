export interface PixabayImage {
    hits: [
        {
            tags: string
            id: number
            largeImageURL: string
        }
    ]
}