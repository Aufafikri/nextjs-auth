import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface UserType {
    id: string;
    email: string
    username: string
}

export const useFetchProfile = () => {
    return useQuery<UserType>({
        queryKey: ["profile"],
        queryFn: async () => {
            const token = localStorage.getItem('token')

            if (!token) {
                console.error("Not token Found!")
            }

            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response.data)

            return response.data
        }
    })
}