import { useRef } from "react"
import { useForm } from "../../hooks"


export const AdminPage = () => {

    const form = useRef<any>()

   const cl  = useForm()
    // console.log(form)

    return (
        <main className="page inner-page">
            <div className="container">
                {/* <form action="" onSubmit={ (event) => {useForm(event)}} ref={form}> */}
                <form action="" onSubmit={(event) => {cl(event, form.current)}} ref={form}>
                    <input type="text" placeholder="id" name="id" required/>
                    <input type="text" placeholder="category" name="category" required/>
                    <input type="text" placeholder="article" name="article" required/>
                    <input type="text" placeholder="name" name="name" required/>
                    <button className="btn btn-dark">Добавить товар</button>
                </form>

            </div>
        </main>
    )
}

