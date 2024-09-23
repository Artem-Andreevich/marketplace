import { useEffect, useRef, useState } from "react"
import { useCreateProductMutation } from "../store/api/productApi"

export const useForm = () => {

    const [ data, setData ] = useState<any>()

    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     const formData = new FormData(form.current)

    //     const jsonObj: any = {}
    //     formData.forEach( (value: any, key: any): any => {
    //         jsonObj[key] = value
    //     })
    //     const json = JSON.stringify(jsonObj)
    //     setData(json)
    // }

    useEffect( () => {
        createProduct(data)
    }, [data])
    
    const [createProduct, { isLoading, isError, error, isSuccess }] = useCreateProductMutation();

    function cl(event: any, form: any) {
        event.preventDefault()
        const formData = new FormData(form)

        const jsonObj: any = {}
        formData.forEach( (value: any, key: any): any => {
            jsonObj[key] = value
        })
        const json = JSON.stringify(jsonObj)
        setData(json)
        console.log(json)
    }
    return cl
}

