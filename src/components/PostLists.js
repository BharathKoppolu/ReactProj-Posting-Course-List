import Post from './Post';
import { useLoaderData } from 'react-router-dom';
import classes from './PostLists.module.css'


const PostLists = () => {
    // fetch('http://localhost:8080/posts').then(response => response.json().then(data => {
    //     setPosts(data.posts);
    // }); //default GET request
    const posts= useLoaderData();

        return (
        <>
            {posts.length > 0 && 
            (<ul className={classes.postLists}>
                {posts.map((post) => (
                    <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
            ))}
            </ul>
            )}
            {posts.length === 0 && 
            (<div style={{textAlign: 'center', color:'white'}}>
                <h2>There are no posts yet!</h2>
                <p>Start Adding some posts...</p>
            </div>)}
        </>
    );
}

export default PostLists;