import React from "react";
import PropTypes, { number } from 'prop-types';

import Button from './Button';

export default function PostHeader(props) {
    const {post, onRemove, onRead} = props;
    const { title, id, read} = post;    
    return(
        <>
            <strong>
                { read ? <s>{title}</s> : title}
            </strong>
            <Button onClick={() => onRemove(id)}>Remover</Button>
            <Button onClick={() => onRead(id)}>{read ? 'Desmarcar' : 'Marcar'}</Button>
        </>
    );
}

PostHeader.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onRead: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired
}