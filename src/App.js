import './App.css';

function fillUserData(data) {

    console.log(data.name);

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

function App() {

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
        <>
            <header>
                <h1>Testing API</h1>
            </header>
            <nav>
                <ul>
                    {users}
                </ul>
            </nav>
            <main>
                <section>
                    <h2>User Info</h2>
                    <dl>
                        <dt id="lblFullName">Name:</dt>
                        <dd id="fullName">abcd</dd>

                        <dt id="lblUsrName">Username:</dt>
                        <dd id="usrName">abcd</dd>

                        <dt id="lblEmail">Email:</dt>
                        <dd id="email">abcd@abc</dd>
                    </dl>
                </section>
            </main>
        </>
    );
}

export default App;
