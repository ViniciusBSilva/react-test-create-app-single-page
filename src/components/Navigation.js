import '../App.css';

function fillUserData(data) {

    const elFullName = document.getElementById('fullName');
    elFullName.textContent = data.name;

    const elUsrName = document.getElementById('usrName');
    elUsrName.textContent = data.username;

    const elEmail = document.getElementById('email');
    elEmail.textContent = data.email;

}

function getUserDataFromAPI(id) {

    const url = "https://jsonplaceholder.typicode.com/users/";
    const fullUrl = url + id;

    return fetch(fullUrl)
        .then(response => response.json());

}

function selectUser(id) {
    getUserDataFromAPI(id).then(json => fillUserData(json));
}

function getUsers() {
    return [1, 2];
}

export function Navigation(props) {

    const users = [];

    getUsers().forEach(userId => {
        users.push(
            <li key={userId}>
                <button onClick={() => selectUser(userId)}>
                    User #{userId}
                </button>
            </li>
        );
    });

    return (
        <nav>
            <ul>
                {users}
            </ul>
        </nav>
    );

}