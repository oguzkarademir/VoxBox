import React , {useState, useEffect} from 'react';
import Profile from './Profile';
import Help from './Help';
import Comment from './Comment';
import './Profile.css';
import { NewComment } from './NewComment';

const HelpDetails = (props) => {

  const post = props.location.state.post;
  const user_id = post.user.user_id

  const [commentFlag, setCommentFlag] = useState(false);

  const [commentData, setCommentData] = useState([]);

  const fetchData = () => {
    fetch(`/api/posts/${post.post_id}`)
      .then(res => res.json())
      .then(data => setCommentData(data.threads.reverse()));
  }

  useEffect(() => {
    fetchData();
  }, [commentFlag])

  return (
    <div className ='rowMore'>
    <Profile user_id={user_id} post={post} onpost={true}/>
    <div className='help-comment'>
    <Help user={post.user} post={post} />
    <Comment setCommentFlag={setCommentFlag} post={post} />
        {commentData.map(
          comment => <NewComment thread={comment}/>
        )}
      </div>
    </div>
  );

};

export default HelpDetails;
//merged