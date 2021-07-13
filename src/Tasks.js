import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tasks() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(window.localStorage.getItem('user')) {
            // Dans le cas où il y a un token
            console.log("Je suis connecté");
            setIsLoggedIn(true);
        }
        else {
            // Dans le cas où on n'a pas de token
            console.log("MEH!");
            setIsLoggedIn(false);
        }
    }, [])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3003/login", {
          email: email,
          password: password
      })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('user',res.data.accessToken)
        setIsLoggedIn(true);
      })
    }

    const logout = () => {
        window.localStorage.removeItem('user');
        setIsLoggedIn(false);
    }

    if(isLoggedIn) {
        return (<div>
            <h1>Je suis connecté!</h1>
            <button onClick={logout}>Se déconnecter</button>
        </div>)
    }
    else return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}
