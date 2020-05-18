import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './navBar.scss';

import { NavButton } from './NavButton/NavButton';
import { openNavbar } from '../../../redux/actions/navActions';

import { PAGES } from '../../../constants/navPages';


class NavBarComponent extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowizeInfo);
    }
        
        
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowizeInfo);
    }
    

    updateWindowizeInfo = () => {
        const { navbarToggler, openNavbar } = this.props;
        if( !navbarToggler.isOpen && window.innerWidth > 600 ) {
            openNavbar();
        }
    }

    render() {
        const { navbarToggler } = this.props;
        return (
            navbarToggler && navbarToggler.isOpen
            && <div className="navbar">
                {
                    PAGES.map( ({ id, text, to }) => {
                        return (
                            <NavButton key={`${id}_${text}`} id={id} text={text} to={to} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({ navbarToggler }) => {
    return {
        navbarToggler
    };
}

export const NavBar = connect(mapStateToProps, { openNavbar })(NavBarComponent);