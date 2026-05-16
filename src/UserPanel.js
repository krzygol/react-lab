import {useState} from "react";

export default function UserPanel(props) {
    const [email, setEmail] = useState('');

    return <div>
        <h1>Witaj {props.email}</h1>
        <a
            onClick={() => props.onLogout()}
            style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer"
            }}>Wyloguj</a>
    </div>;
}



// <div>
//     <h1>Witaj {email}</h1>
//     <a
//         onClick={() => setIsLoggedIn(false)}
//         style={{
//             color: "blue",
//             textDecoration: "underline",
//             cursor: "pointer"
//         }}>Wyloguj</a>
// </div>