import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation";

type userLogin = {
    email: string;
    password: string;
}

export const useCreateLoginUser = () => {
    const router = useRouter()
    return useMutation({
        mutationFn: async (body: userLogin) => {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, body)
            return response.data
        },
        onSuccess: (data) => {
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('refresh_token', data.refresh_token)
            setTimeout(() => {
                router.push(`/dashboard`)
            }, 1000);
        }
    })
}