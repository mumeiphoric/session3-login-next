"use client";

import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =
useState("");
    const [message,setMessage] =
useState("");
    
    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" &&
    password === "123456") {
        setMessage("Login Successful!");
    } else {
        setMessage("Invalid Email or Password.");
    }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h2>Session 3 Login</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div style={{ marginTop: "10px" }}>
                    <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            
            <div style={{ marginTop: "15px" }}>
                <button type="submit">Login</button>
            </div>
            </form>

            {message && <p style={{ marginTop:"20px" }}>{message}</p>}
        </div>
    );
}