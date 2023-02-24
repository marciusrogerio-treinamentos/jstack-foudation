import React from "react";
import PropTypes, { number } from 'prop-types';
import PostHeader from './PostHeader'

export default function Post(props) {
    const {post, onRemove, onRead} = props;
    const { title, subtitle, id, likes, read} = post;
    return(
        <>
            <article>
                <PostHeader 
                    onRemove={onRemove}
                    onRead={onRead}
                    post={{
                        title:title,
                        id:id,
                        read: read
                    }}
                />
                <br/>
                <small>{ subtitle}</small>
            </article>
            Media: {likes/2}
            <br/><br/>
        </>
    );
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onRead: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired
}