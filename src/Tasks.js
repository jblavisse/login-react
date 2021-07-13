import { useState } from 'react';
import axios from 'axios';

export default function Tasks() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3003/login", {
          email: email,
          password: password
      })
      .then((res) => {
        console.log(res);
      })
    }

    return (
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
