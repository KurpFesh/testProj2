import React from 'react';
import { connect } from 'react-redux';

import './mobileMenu.scss';

import { toggleNavbar } from '../../../redux/actions/navActions';

const MobileMenuComponent = ({ navbarToggler, toggleNavbar }) => {
    return (
        <div className='mobileMenu' onClick={toggleNavbar}>
            {
                navbarToggler && navbarToggler.isOpen
                ? <i className='fa fa-times' />
                : <i className='fa fa-bars' />
            }
        </div>
    )
}


const mapStateToProps = ({ navbarToggler }) => {
    return {
        navbarToggler
    };
}

export const MobileMenu = connect(mapStateToProps, { toggleNavbar })(MobileMenuComponent);

