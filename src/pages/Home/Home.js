import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Loading from '../../components/Loader';
import Error from '../../components/Error';
// style
import './style.scss';
import MainHeader from '../../components/MainHeader';
const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
        }
    }
`;
const Home = () => {
    const { error, loading, data } = useQuery(GET_COMPANY_INFO);
    console.log(data);
    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    return (
        <div className="home__container d-flex align-items-center text-center">
            <MainHeader name={data.company.name} description={data.company.summary} />
        </div>
    );
};

export default Home;
