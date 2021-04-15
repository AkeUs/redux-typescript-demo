import React from "react";
import { connect } from "react-redux";
import {Player, TrainerActions, TrainerState} from "../stores/PlayersStore";
import {Dispatch} from "redux";

type PlayerProps = {
    players: Array<Player>;
    addLead: (player: Player) => void;
    addAlternate: (player:Player) => void;
}

const Players = (props: PlayerProps) => {
    return (
        <section>
            <h2>Pokemon</h2>
            <div>
                {
                    props.players.map((p: Player) => (
                        <article>
                            <img alt={p.name} src={p.photo} />
                            <h3>{ p.name }</h3>
                            <div>
                                <button onClick={() => props.addLead(p)}>Lead</button>
                                <button onClick={() => props.addAlternate(p)}>Alternate</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

const mapStateToProps = (state: TrainerState) => ({
    players: state.players
});

const mapDispatchToProps = (dispatch: Dispatch<TrainerActions>) => ({
    addLead: (player: Player) => {
        dispatch({
            type: 'ADD_LEAD',
            player: player
        })
    },
    addAlternate: (player: Player) => {
        dispatch({
            type: 'ADD_ALTERNATE',
            player: player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
