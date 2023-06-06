import React, { useState } from 'react';
import PostLists from './components/PostLists';
import MainHeader from './components/MainHeader';

const App = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    
    const hideModalHandler = () =>{
        setModalIsVisible(false);
    };

    const showModalHandler = () =>{
        setModalIsVisible(true);
    };
  return (
    <div>
        <MainHeader onCreatePost={showModalHandler}/>
        <PostLists isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
    </div>
  );
}
export default App;
