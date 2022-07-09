import './App.css';
// import { Navigation } from './components/Navigation';
import { UserDataSection } from './components/UserDataSection';

function getUserDataFromAPI(id, cb) {

    const url = "https://jsonplaceholder.typicode.com/users/";
    const fullUrl = url + id;

    return fetch(fullUrl)
        .then(response => response.json())
        .then(json => cb(json));

}

function App() {

    const data =
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    };

    return (
        <>
            <header>
                <h1>Testing API</h1>
            </header>
            <div>
                {/* <Navigation /> */}
                <main id="main">
                    <UserDataSection data={data} />
                </main>
            </div>
        </>
    );
}

export default App;
