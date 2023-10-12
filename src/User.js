import { useState } from "react";

const UserCreation = () => {
    const [user, setUser] = useState({
        email: '', 
        username: '',
        password: '',
    });

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {

    }
    
    return (
        <div>
            <h1>User Creation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>


                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default UserCreation;