import User from '../types/User'


const url = "http://localhost:3001"


export function getUserById(id: number): Promise<{}> {
    return fetch(`${url}/users/`)
        .then( res => res.json() )
        .then( data => data.filter((user: User) => user.id === id))
        // .then( dataUser => console.log(...dataUser))
        .catch( err => { console.log(err) })
}


export async function getPhone( fn: any ): Promise<any> {
    try {
        const res = await fetch(`${url}/iPhone/`)
        const data = await res.json()
        fn( data )

    } catch {
        console.log('Ошибка')
    }
    
}