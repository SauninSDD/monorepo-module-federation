import React from 'react';

const UserCard = ({username}: {username?: string}) => {
    return (
        <div>
            username: {username ?? 'user'}
        </div>
    );
};

export default UserCard;