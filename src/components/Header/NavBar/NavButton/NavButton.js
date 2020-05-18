import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navButton.scss'

import { selectPage } from '../../../../redux/actions/navActions';

const NavButtonComponent = ({ id, text, to, navPageSelected, selectPage }) => {
    const selected = id===navPageSelected;
    const classes = `navbutton${selected?' selected':''}`
    return <div className={classes} onClick={selected ? ()=> {} : () => selectPage(id)}>
        <Link to={to}>
            {text}
        </Link>
    </div>
}

const mapStateToProps = ({ navPageSelected }) => {
    return { 
        navPageSelected
    };
};

export const NavButton = connect(mapStateToProps, { selectPage })(NavButtonComponent);