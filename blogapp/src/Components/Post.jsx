import React from 'react';
import { withRouter } from 'react-router-dom'

const Post = (props) => {
    const handleRoute = () => {
        props.history.push(`/${props.id}`);
    }
    return (
        <div onClick={handleRoute} className="card" style={{ width: "50%", margin: "10px auto", cursor: "pointer" }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}.</p>
            </div>
        </div>
    );
}
export default withRouter(Post);