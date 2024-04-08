import Updateform from "@/components/editForm"
import { getContactById } from "@/lib/data"
import { notFound } from "next/navigation"


const UpdateContactPage = async({params}: {params:{id:string}}) => {
    const id = params.id
    const contact = await getContactById(id)

    if(!contact){
        notFound()
    }
    
  return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add new Contact</h1>
        <Updateform contact={contact}/>
    </div>
  )
}

export default UpdateContactPage