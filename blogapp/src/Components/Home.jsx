import React, { Component } from 'react';
import { connect } from 'react-redux'
import Post from './Post';
class Home extends Component {
    render() {
        const list = this.props.posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} />)
        const ele = list.length > 0 ? list : <p>No posts</p>
        return (<div><h1>Posts</h1>{ele}</div>);
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);