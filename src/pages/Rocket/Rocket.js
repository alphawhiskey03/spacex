import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Rocket from '../../components/Rocket';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
const GET_ROCKER_INFO = gql`
    query getRocketInfo($id: ID!) {
        rocket(id: $id) {
            name
            diameter {
                feet
                meters
            }
            height {
                feet
                meters
            }
            stages
            cost_per_launch
            engines {
                type
                number
                propellant_1
                propellant_2
                thrust_to_weight
            }
        }
    }
`;

const RocketPage = () => {
    const { id } = useParams();
    const { error, loading, data } = useQuery(GET_ROCKER_INFO, {
        variables: {
            id,
        },
    });
    if (error) return <Error error={error} />;
    if (loading) return <Loader />;
    return <>{data.rocket && <Rocket rocket={{ ...data.rocket, id: id }} />}</>;
};

export default RocketPage;
