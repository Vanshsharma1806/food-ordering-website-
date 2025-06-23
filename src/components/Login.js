import { useState } from "react"
const login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the login logic, e.g., API call
        console.log("Email:", email);
        console.log("Password:", password);
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
                        <p>Don't have an account? Sign up.</p>
                    </div>
                </form>
            </div>
        </div>    
    )
}
export default login;