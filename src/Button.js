import React,{useContext} from "react";
import PropTypes, { number } from 'prop-types';

import {ThemeContext} from './ThemeContext';

export default function Button(props) {
    const {theme} = useContext(ThemeContext);
    const { children, onClick} = props;
    return(
        <button onClick={onClick} style={{ color: theme ==='dark' ? '#fff' : '#000', background: theme === 'dark' ? '#000' : '#fff'}}>
            {children}
        </button>
    );

}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired    
}