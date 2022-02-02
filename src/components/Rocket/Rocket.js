import React from 'react';
import RocketHeader from '../RocketHeader';
import TechInfo from '../../components/TechInfo';
import './style.scss';
const Rocket = ({ rocket }) => {
    const { id, name, height, diameter, stages, cost_per_launch, engines } = rocket;
    console.log(engines);
    return (
        <>
            <div className="d-flex flex-column justify-content-around w-100">
                <RocketHeader id={id} name={name} />
                <TechInfo name={name} rocket={{ height, diameter, stages, cost: cost_per_launch }} />
            </div>
            <TechInfo name={engines.type} engines={engines} isEngine />
        </>
    );
};

export default Rocket;
