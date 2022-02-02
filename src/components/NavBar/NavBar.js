import React, { useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import useNavigation from '../../hooks/useNavigation';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import TopMenu from '../TopMenu/TopMenu';
import SideMenu from '../SideMenu/SideMenu';
import './style.scss';
const GET_ROCKETS_NAME = gql`
    {
        rockets(offset: 1) {
            id
            name
        }
    }
`;

const NavBar = () => {
    const navRef = useRef(null);
    const { error, loading, data } = useQuery(GET_ROCKETS_NAME);
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef);
    console.log({ error, loading, data });
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;
    return (
        <div className="container-fluid">
            <div className="row">
                <TopMenu
                    rockets={data.rockets}
                    isMobileView={isMobileView}
                    isMenuOpen={isMenuOpen}
                    toggleMenu={setIsMenuOpen}
                />
                <SideMenu
                    rockets={data.rockets}
                    isMobileView={isMobileView}
                    isMenuOpen={isMenuOpen}
                    toggleMenu={setIsMenuOpen}
                />
            </div>
        </div>
    );
};

export default NavBar;
