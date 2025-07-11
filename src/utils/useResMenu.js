import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { useAuth } from "../context/AuthContext";

const useResMenu = (resId)=>{

    const {user} = useAuth();
    const [resInfo , setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    fetchData = async ()=>{
        const data = await fetch(MENU_API + resId, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.token}`,
                }
            }
        );
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}
export default useResMenu;