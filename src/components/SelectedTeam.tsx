import React from "react";
import Alternates from "./Alternates";
import Leaders from "./Leaders";

const SelectedTeam = () => {

    return (
        <>
            <h2>Equipo Seleccionado</h2>
            <Leaders />
            <Alternates />
        </>
    );
}

export default SelectedTeam;
