import React from 'react';
import Profile from './Profile';
import Bio from './Bio';
import './Profile.css';

const ProfileDetails = (props) => {

  const post = props.location.state.post;
<<<<<<< HEAD
  // console.log('here is post from ProfileDetails with state is: ', post); 
=======
  
>>>>>>> front-end

return (
  <div className ='rowC'>
    <Profile user={post.user} post={post}/>
    <Bio user={post.user} post={post}/>
  </div>
);

};

export default ProfileDetails;