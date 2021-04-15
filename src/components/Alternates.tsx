import React from "react";
import {Player, TrainerActions, TrainerState} from "../stores/PlayersStore";
import { connect } from "react-redux";
import {Dispatch} from "redux";

type AlternatesProps = {
    alternates: Array<Player>;
    remove: (player: Player) => void;
}

const Alternates = (props: AlternatesProps) => {
    return (
        <section>
            <h2>Alternates</h2>
            <div>
                {
                    props.alternates.map(p => (
                        <article>
                            <img alt={p.name} src={p.photo} />
                            <h3>{ p.name }</h3>
                            <button onClick={() => props.remove(p)}>X</button>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

const mapStateToProps = (state: TrainerState) => ({
    alternates: state.alternates
});

const mapDispatchToProps = (dispatch: Dispatch<TrainerActions>) => ({
    remove: (player: Player) => {
        dispatch({
            type: 'REMOVE_FROM_ALTERNATE',
            player: player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternates);
