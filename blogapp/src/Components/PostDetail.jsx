import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const PostDetail = (props) => {

    const handleHome = () => {
        props.history.push('/');
    }
    const handleDelete = () => {
        props.deletePost();
        handleHome();
    }

    return (
        <div className="card" style={{ width: "50%", margin: "10px auto", cursor: "pointer" }}>
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <p className="card-text">{props.post.body}.</p>
            </div>
            <div>
                <button style={{ width: "20%", textAlign: "center", margin: "10px" }} onClick={handleHome} className="btn btn-primary">Back</button>
                <button style={{ width: "20%", textAlign: "center", margin: "10px" }} onClick={handleDelete} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts.find(x => x.id === +ownProps.match.params.id)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: () => dispatch({ type: 'DELETE_POST', id: +ownProps.match.params.id })
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));