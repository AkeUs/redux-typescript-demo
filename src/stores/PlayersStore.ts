import { createStore, Reducer } from "redux";

// types
export type Player = {
    id: number;
    name: string;
    photo: string;
}

export type TrainerState = {
    players: Array<Player>;
    leaders: Array<Player>;
    alternates: Array<Player>;
}

export type TrainerActions = {
    type: string,
    player: Player
}

// definitions
const initialState: TrainerState = {
    players: [
        {
            id: 1,
            name: 'bulbasaur',
            photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        },
        {
            id: 2,
            name: 'charmander',
            photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
        },
        {
            id: 3,
            name: 'squirtle',
            photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
        }
    ],
    leaders: [],
    alternates: []
};

const trainerReducer: Reducer<TrainerState, TrainerActions> = (state: TrainerState = initialState, action: TrainerActions) => {

    if (action.type === 'ADD_LEAD') {
        return {
            ...state,
            leaders: state.leaders.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }

    if (action.type === 'ADD_ALTERNATE') {
        return {
            ...state,
            alternates: state.alternates.concat(action.player),
            players: state.players.filter(j => j.id !== action.player.id)
        }
    }

    if (action.type === 'REMOVE_FROM_ALTERNATE') {
        return {
            ...state,
            players: state.players.concat(action.player),
            alternates: state.alternates.filter(j => j.id !== action.player.id)
        }
    }

    if (action.type === 'REMOVE_FROM_LEADERS') {
        return {
            ...state,
            players: state.players.concat(action.player),
            leaders: state.leaders.filter(j => j.id !== action.player.id)
        }
    }

    return state;
};

export default createStore(trainerReducer);
