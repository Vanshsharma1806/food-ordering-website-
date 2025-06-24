import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, isLoggedIn} = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect (()=>{
        if(isLoggedIn){
            navigate("/", { replace: true });
        }
    },[isLoggedIn, navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result.success) {
          navigate("/", { replace: true });
        } else {
          setError(result.message || "Login failed");
        }
    }

    return(
        <div className="bg-gray-100 h-screen flex flex-col items-center pt-32">
            <div className=" bg-white gap-1 p-6 rounded shadow-md w-96 ">
                <div className="flex  items-center justify-center pb-10">
                    <h2 className=" text-2xl font-bold mb-4">
                        Log In 
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="flex gap-10">
                        <label className="text-sm font-medium">Email:</label>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-black  rounded-md border-2 "/>
                    </div>
                    <div className="flex gap-4">
                        <label className="text-sm font-medium">Password:</label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-black  rounded-md border-2 " />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 rounded-3xl hover:bg-blue-600">
                        Submit
                    </button>
                    <div>
                        <p><Link to="/signup">Don't have an account? Sign up.</Link></p>
                    </div>
                </form>
            </div>
            {
                error && (
                    <p className="text-red-500 text-sm mb-2 text-center" >{error}</p>
                )
            }
        </div>    
    )
}
export default Login;