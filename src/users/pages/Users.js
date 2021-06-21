import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id:'u1',
            name: 'max',
            image: 'https://www.pandotrip.com/wp-content/uploads/2018/06/Eiffel-Tower-Paris-France.jpg',
            places:3
        }
    ];
    return <UsersList items={USERS} />
};

export default Users; 