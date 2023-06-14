import { ToastError, ToastSuccess } from "../components/Toasts"
import Api from "../services/api"

export async function EditTask(data, fieldTitle, fieldStatus, getAll, setActiveButton, setTitleStatus, setEditFieldTask){
    try{
        const response = await Api.put(`/tasks/${data.id}`,{
            "title":fieldTitle != '' ? fieldTitle : data.title,
            "status": fieldStatus
        }).then((r)=> {
            if(r.status == 200){
                ToastSuccess(r.data.message)
                getAll()
                setActiveButton(true)
                setTitleStatus(false)
                setEditFieldTask("")
            }else ToastError(r.data.message)
        })
    }catch(err){
        ToastError(err)
        console.log(err)
    }

}