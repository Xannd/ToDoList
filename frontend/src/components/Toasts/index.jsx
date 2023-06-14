import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ToastSuccess = (msg)=> {

    return toast.success(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    

}

export const ToastError = (msg)=> {

    return toast.error(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    

}