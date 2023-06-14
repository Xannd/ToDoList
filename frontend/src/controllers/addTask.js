import Api from "../services/api"
import { toast } from "react-toastify"
import { ToastError, ToastSuccess } from "../components/Toasts"

export async function AddTask(titleTask,getTask){
    try{
            const response = await Api.post('/createTask', {
                "title": titleTask
            }).then((r)=> {
                if(r){
                    ToastSuccess(r.data.message)
                    getTask()
                    
                }else{
                    ToastError("Title is empty! ")
                }
                toast.clearWaitingQueue();
                
            })
    }catch(err){
        ToastError(err)
        console.log(err)
    }

}