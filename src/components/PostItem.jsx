import React from "react";
import './PostItem.css';

function PostItem(props) {
    const {body, title, id} = props;

    return(
        <div className="post-item">
            <h3>{id}.{ title }</h3>
            { body }
        </div>
    );
}

export default PostItem;