export interface IProduct {
    id: number,
    categoriesID: number,
    category: string,
    article: string,
    name: string,
    img: [string],
    label: string,
    oldPrice: number,
    newPrice: number,
    details?: {
        color?: string,
        memory?: string,
    },
    priceHistory?: {
        prices: number[],
        months: string[]
    },
    description?: [{
        [key: string]: [value: []]
    }]
}