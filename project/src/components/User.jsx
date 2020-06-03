import React from 'react';
import Followers from './Followers';
import {Card, CardContent, CardMedia, CardHeader} from '@material-ui/core/';

const UserCard = ({ user, followers }) => (

    <Card style= {{ maxWidth: 325 }}>

        <CardHeader
            title={`User: ${user.login}`}
            subheader={`Name: ${user.name}`}
        />
        <img src={user.avatar_url} alt='' />
        <CardContent> <h4> GitHub: <a href={user.html_url}>{user.html_url}</a> </h4> </CardContent>
        <h2>Followers: {user.followers}</h2>
      
        <CardContent>
            {followers.map(follower => {
            return <Followers  key={follower.id} follower={follower} />;
            })}
        </CardContent>
      
    </Card>
  
)

export default UserCard;
