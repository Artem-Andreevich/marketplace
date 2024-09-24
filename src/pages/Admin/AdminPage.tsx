import { useRef } from "react"
import { useCreateProductMutation } from "../../store/api/productApi";
import { useForm } from "react-hook-form";



export const AdminPage = () => {

    // const form = useRef<any>()

    // const [createProduct, { isLoading, isError, error, isSuccess }] = useCreateProductMutation();

    // function cl(event: any, form: any) {
    //     event.preventDefault()
    //     const formData = new FormData(form)

    //     // const jsonObj: any = {}
    //     // formData.forEach( (value: any, key: any): any => {
    //     //     jsonObj[key] = value
    //     // })
    //     // const json = JSON.stringify(jsonObj)
    //     console.log(formData.get(article))
    //     // createProduct(json)
    // }
    const { register, handleSubmit, formState: { errors }, } = useForm();



    return (
        <main className="page inner-page">
            <div className="container">
                {/* <form action="" onSubmit={ (event) => {useForm(event)}} ref={form}> */}
                {/* <form action="" onSubmit={(event) => {cl(event, form.current)}} ref={form}> */}
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <input 
                        type="file" 
                        {...register('id', { required: true })} 
                        accept="image/png, image/jpeg"
                    />
                    {errors.lastName && <p>Last name is required.</p>}
                    {/* <input type="text" placeholder="id" name="id" required/>
                    <select name="category" id="">
                        <option value="iphone">iphone</option>
                        <option value="ipad">ipad</option>
                        <option value="iwatch">iwatch</option>
                        <option value="macbook">macbook</option>
                        <option value="airpods">airpods</option>
                        <option value="accessories">accessories</option>
                        <option value="gadget">gadget</option>
                    </select>
                    <input type="text" placeholder="article" name="article" required/>
                    <input type="text" placeholder="name" name="name" required/>
                    <input type="file" placeholder="images" name="img" required/>
                    <input type="text" placeholder="label" name="label" /> */}
                    <button className="btn btn-dark">Добавить товар</button>
                </form>

            </div>
        </main>
    )
}

