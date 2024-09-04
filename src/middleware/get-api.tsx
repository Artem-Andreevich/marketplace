
export async function getPhone(endpoint: string, fn: any ): Promise<any> {
    try {
        const path =
            process.env.NODE_ENV === 'development'
            ? `http://localhost:3001/${endpoint}`
            : `https://raw.githubusercontent.com/artem-andreevich/marketplace/gh-pages/static/db/${endpoint}.json`;
        console.log(path)
        const res = await fetch(path)
        const data = await res.json()
        console.log(data)
        fn( data )

    } catch {
        console.log('Ошибка')
    }
}
