import './App.css';

import NavBar from './components/NavBar/NavBar';
import WritingsList from './components/WritingsList/WritingsList';
import WritePad from './components/WritePad/WritePad';

function App() {
    return (
        <div className='App'>
            <NavBar />
            {/* <WritingsList /> */}
            <WritePad />
        </div>
    );
}

export default App;
