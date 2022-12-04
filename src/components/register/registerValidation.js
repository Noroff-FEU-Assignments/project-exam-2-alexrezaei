import { BASE_URL, REGISTER_PATH } from "../../api/api";

export function register(e) {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    let email = e.target[2].value;
    submitRegister(username, password, email);
}

async function submitRegister(username, email, password) {
    const url = BASE_URL + REGISTER_PATH;
    const data = JSON.stringify({
        name: username,
        email: email,
        password: password,
    });
    const headers = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await fetch(url, headers);
        const json = await res.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
