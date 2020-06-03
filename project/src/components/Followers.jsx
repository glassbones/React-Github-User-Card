import React from 'react';

const Followers = props => {
  return (<>
    <h2>{props.follower.login}</h2>
    <img src={props.follower.avatar_url} alt='' />
  </>);
};

export default Followers;