import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router';

const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://ak-d.tripcdn.com/images/1006180000014i4i6261A_Z_640_10000.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
             lat:40.7484405,
             lng:-73.9856644
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://ak-d.tripcdn.com/images/1006180000014i4i6261A_Z_640_10000.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
             lat:40.7484405,
             lng:-73.9856644
        },
        creator:'u2'
    }

]
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator===userId)
    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces;