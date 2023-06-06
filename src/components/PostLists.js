import React, {useState} from 'react';
import Post from './Post';
import classes from './PostLists.module.css'
import NewPost from './NewPost';
import Modal from './Modal';

const PostLists = (props) => {
    const [posts, setPosts] = useState([]); //manage a list of posts and add a new post when added

    const addPostHandler = (postData) => {
        setPosts((existingPosts)=> [postData, ...existingPosts]);
    };

        return (
        <>
            {props.isPosting &&  
                (<Modal onClose={props.onStopPosting}>
                    <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler}/>
                </Modal>) 
            }
            {posts.length > 0 && 
            (<ul className={classes.postLists}>
                {posts.map((post) => <Post author={post.author} body={post.body}/>)}
            </ul>)}
            {posts.length === 0 && 
            (<div style={{textAlign: 'center', color:'white'}}>
                <h2>There are no posts yet!</h2>
                <p>Start Adding some posts...</p>
            </div>)}
        </>

    );
}

export default PostLists;