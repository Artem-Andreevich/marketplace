
export const useSales = (newPrice: number | undefined, oldPrice: number | undefined): number | string => {
    if( !newPrice || !oldPrice) {
        return ''
    }
    return Math.floor( 100 - ((newPrice * 100) / oldPrice) )
}