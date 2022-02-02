const useTechInfo = ({ name, rocket, engines, isEngine }) => {
    const header = name.toUpperCase();
    const firstRow = {
        title: isEngine ? 'NUMBER' : 'HEIGHT',
        value: isEngine ? engines.number : rocket.height.meters + '/m' + rocket.height.feet + '/m',
    };
    const secondRow = {
        title: isEngine ? 'PROPELANT1' : 'DIAMETER',
        value: isEngine ? engines.propellant_1 : rocket.diameter.meters + '/m' + rocket.diameter.feet + '/m',
    };
    const thirdRow = {
        title: isEngine ? 'PROPELANT2' : 'STAGES',
        value: isEngine ? engines.propellant_2 : rocket.stages,
    };
    const fourthRow = {
        title: isEngine ? 'THRUST TO WEIGHT' : 'COST PER LAUNCH',
        value: isEngine ? engines.thrust_to_weight : rocket.cost,
    };
    const body = [firstRow, secondRow, thirdRow, fourthRow];
    const img = `/assets/${name.replace(/\s/g, '')}.png`;
    return {
        header,
        body,
        img,
    };
};
export default useTechInfo;
