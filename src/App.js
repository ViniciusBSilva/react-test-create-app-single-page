import './App.css';
import { Navigation } from './components/Navigation';
import { UserDataSection } from './components/UserDataSection';



function App() {

    return (
        <>
            <header>
                <h1>Testing API</h1>
            </header>
            <div>
                <Navigation />
                <main id="main">
                    <UserDataSection />
                </main>
            </div>
        </>
    );
}

export default App;
