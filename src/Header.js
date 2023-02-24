import React, {useContext} from "react";
import PropTypes, { number } from 'prop-types';
import Button from "./Button";

import {ThemeContext} from './ThemeContext';

export default function Header(props) {
    const {onToggleTheme} = useContext(ThemeContext)
    const { title, children } = props
    return(
        <>
            <h1>{title}</h1>
            <Button onClick={onToggleTheme}>Mudar tema</Button>
            { children }
            
        </>
    );    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

Header.defaultProps = {
    title: `JStack's blog`
}