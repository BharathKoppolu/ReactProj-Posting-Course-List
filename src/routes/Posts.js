import PostLists from '../components/PostLists';
import {Outlet} from 'react-router-dom';


const Posts = () => {
    
    // const hideModalHandler = () =>{
    //     setModalIsVisible(false);
    // };

    // const showModalHandler = () =>{
    //     setModalIsVisible(true);
    // };
  return (<>
    <Outlet />
    <div>
        {/* <MainHeader onCreatePost={showModalHandler}/> */}
        <PostLists />
    </div>
  </>

  );
}
export default Posts;

export async function loader(){
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json();
      return resData.posts;
}
