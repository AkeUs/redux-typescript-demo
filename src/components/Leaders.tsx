import React from "react";
import {Player, TrainerActions, TrainerState} from "../stores/PlayersStore";
import { connect } from "react-redux";
import {Dispatch} from "redux";

type LeadsProps = {
    leaders: Array<Player>;
    remove: (player: Player) => void;
}

const Leaders = (props: LeadsProps) => {
    return (
        <section>
            <h2>Leads</h2>
            <div>
                {
                    props.leaders.map(p => (
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
    leaders: state.leaders
});

const mapDispatchToProps = (dispatch: Dispatch<TrainerActions>) => ({
    remove: (player: Player) => {
        dispatch({
            type: 'REMOVE_FROM_LEADERS',
            player: player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaders);
