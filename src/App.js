import './App.css';
import {useState} from "react";

function App() {
    // let email = 'krzygol@gmail.com';
    const [email, setEmail] = useState('krzygol@gmail.com');
    // const [message, setMessage] = useState("Walidacja");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {!isLoggedIn &&
            <p>Zaloguj się e-mailem
            <input type="text" onChange={(event) => setEmail(event.target.value)}/>
            <button onClick={() => setIsLoggedIn(true)}>Wchodzę</button></p>}

            {isLoggedIn && <div>
            <h1>Witaj {email}</h1>
                <a
                    onClick={() => setIsLoggedIn(false)}
                    style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer"
                    }}>Wyloguj</a>
            </div>}


            {/*<h2>Twój e-mail to {email.toUpperCase()}</h2>*/}

            {/*{email.length > 0 && <p>{message}</p>}*/}


        </div>
    );
}

export default App;


// function App() {
//     // let email = 'krzygol@gmail.com';
//     const [email, setEmail] = useState('krzygol@gmail.com');
//     // const [message, setMessage] = useState("Walidacja");
//     let message;
//
//     function handleChange(event) {
//         // console.log(event.target.value);
//         setEmail(event.target.value);
//     }
//
//     // const showAlert = () => {
//     //     alert(email);
//     // };
//
//     if (email.length < 5) {
//         message = "Ale masz krótki adres!";
//     } else if (email.length < 10) {
//         message = "Twój aadres jest w sam raz.";
//     } else {
//         message = "Twoj adres jest stanowczo za długi.";
//     }
//
//
//     return (
//         <div>
//             <h1>System do zapisów na zajęcia</h1>
//             <h2>Twój e-mail to {email}</h2>
//             <h2>Twój e-mail to {email.toUpperCase()}</h2>
//
//             {email.length > 0 && <p>{message}</p>}
//             <input type="text" onChange={handleChange}/>
//             <button onClick={() => alert(email)}>Wyświetl mój e-mail w alercie</button>
//         </div>
//     );
// }

