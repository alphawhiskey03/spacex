import React from 'react';
import useTechInfo from '../../hooks/useTechInfo';
import InfoTable from '../InfoTable/InfoTable';
const TechInfo = ({ name, rocket, engines, isEngine }) => {
    console.log(engines);
    const tableContent = useTechInfo({ name, rocket, engines, isEngine });
    return (
        <div className="container d-flex flex-column justify-content-around tech-info__container">
            <div
                className={`d-flex row
                     flex-md-row${isEngine ? '-reverse' : ''}
                 justify-content-between flex-column py-5`}
            >
                <InfoTable title={tableContent.header} data={tableContent.body} />

                <div className="col col-md-4 d-flex justify-content-center">
                    <img src={tableContent.img} alt={tableContent.header} />
                </div>
            </div>
        </div>
    );
};

export default TechInfo;
