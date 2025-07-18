import { useAuth } from "../context/AuthContext"

const useAuthHeaders = ()=>{
    const {user} = useAuth();
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    };
}
export default useAuthHeaders;