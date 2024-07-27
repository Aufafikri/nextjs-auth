import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type userRegister = {
    username: string;
    email: string;
    password: string
}

export const useCreateRegisterUser = () => {
    const router = useRouter()
    return useMutation({
        mutationFn: async (body: userRegister) => {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, body)
            return response.data
        },
        onSuccess: () => {
            setTimeout(() => {
                router.push("/login")
            }, 1000)
            toast.success("registration success!")
        }
    })
}