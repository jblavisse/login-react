import { useState } from 'react';

export default function Tasks() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // const authInfos = {
      //   email: email,
      //   password: password
      // }
      const authInfos = {email, password};
      console.log(authInfos);
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
