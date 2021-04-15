import React from 'react';
import './App.css';
import Players from "./components/Players";
import SelectedTeam from "./components/SelectedTeam";
import { Provider } from "react-redux";
import PlayersStore from "./stores/PlayersStore";

const App = () => {

    return (
        <Provider store={PlayersStore} >
            <div>
                <h1>Team manager</h1>
                <Players />
                <SelectedTeam />
            </div>
        </Provider>
    );
}

export default App;
