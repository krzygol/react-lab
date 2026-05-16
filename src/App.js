import './App.css';
import {useState} from "react";

function App() {
    // let email = 'krzygol@gmail.com';
    const [email, setEmail] = useState('krzygol@gmail.com');
    // const [message, setMessage] = useState("Walidacja");
    let message;

    function handleChange(event) {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

        if (email.length < 5) {
            message = "Ale masz krótki adres!";
        } else if (email.length < 10) {
            message = "Twój aadres jest w sam raz.";
        } else {
            message = "Twoj adres jest stanowczo za długi.";
        }


    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <h2>Twój e-mail to {email.toUpperCase()}</h2>

            {email.length > 0 && <p>{message}</p>}
            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;






























// import { useState } from "react";
//
// function App() {
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//
//     const checkEmail = () => {
//         if (email.length < 5) {
//             setMessage("Adres e-mail jest za krótki.");
//         } else if (email.length < 15) {
//             setMessage("Adres e-mail ma średnią długość.");
//         } else {
//             setMessage("Adres e-mail jest długi.");
//         }
//     };
//
//     return (
//         <div>
//             <input
//                 type="email"
//                 placeholder="Wpisz adres e-mail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//
//             <button onClick={checkEmail}>
//                 Sprawdź
//             </button>
//
//             <p>{message}</p>
//         </div>
//     );
// }
// export default App;