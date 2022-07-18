import { Provider } from "react-redux";
import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar />
                <MainPage />
            </div>
        </Provider>
    );
}

export default App;
