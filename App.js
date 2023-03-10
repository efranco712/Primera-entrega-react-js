import './App.css';
import Counter from './react js/Counter'
import NavBar from '.react js/NavBar'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Counter title={"Productos"} initial={0}/>
        </div>
    )
}

export default App