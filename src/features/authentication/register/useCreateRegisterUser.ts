import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios";
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
            try {
                console.log("Sending request to:", `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`)
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, body);
                return response.data;
            } catch (error) {
                console.error("registration error:", error)
                throw error
            }
        },
        onError: (error: any) => {
            if (axios.isAxiosError(error)) {
                toast.error("Axios error:", error.response?.data);
                toast.error(`Registration failed wei: ${error.response?.data?.message || error.message}`);
            } else {
                toast.error(`Registration failed. ${error?.message}.`);
            }
        }
    })
}