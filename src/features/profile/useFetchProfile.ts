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

const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');

    if(!refreshToken) {
        throw new Error("No refresh token found, please log in again.");
    }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`, {
        refresh_token: refreshToken
    })

    const newAccessToken = response.data.access_token
    localStorage.setItem('access_token', newAccessToken)

    return newAccessToken
    
}

export const useFetchProfile = () => {
    return useQuery<UserType>({
        queryKey: ["profile"],
        queryFn: async () => {
            const accessToken = localStorage.getItem('access_token')

            if (!accessToken) {
                console.error("No token found!")
                throw new Error("No token found!")
            }

            try {     
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                return response.data
            } catch (error: any) {
                if(error.response?.status === 401) {
                    console.log("Access token expired. Attempting to refresh...");

                    try {
                        const newAccessToken = await refreshAccessToken()

                        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile`, {
                            headers: {
                                Authorization: `Bearer ${newAccessToken}`
                            }
                        })

                        return response.data
                    } catch (refreshError: any) {
                        console.error("Failed to refresh token:", refreshError);
                        localStorage.removeItem("access_token");
                        localStorage.removeItem("refresh_token");
                        throw new Error("Session expired. Please log in again.");
                    }
                }

                console.error("Error fetching profile:", error.response?.data || error.message);
                throw error;
            }
        },
        
    })
}