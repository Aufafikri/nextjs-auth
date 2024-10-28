import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface UserType {
    profile: {
        id: string;
        username: string;
        email: string;
        loginMethod: string;
    }
}

export const useFetchProfile = () => {
    return useQuery<UserType>({
        queryKey: ["profile"],
        queryFn: async () => {
            const token = localStorage.getItem('token')

            if (!token) {
                console.error("No token found!")
                throw new Error("No token found!")
            }

            try {     
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                return response.data
            } catch (error: any) {
                console.error("Error fetching profile:", error.response?.data || error.message)
                throw error
            }
        }
    })
}