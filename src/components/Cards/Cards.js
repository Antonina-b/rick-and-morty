import React from 'react';
import './Cards.scss';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Cards = ({ results }) => {
    // const sortElems = results.map(item => item.sort((a, b) => a.name < b.name ? -1 : 1));

    let display;

    const isMobile = useMediaQuery({ query: '(max-width: 360px)' });
    
    if (results) {
        display = results.map(x => {
            let { id, name, image, species} = x;
            return (
                <Link 
                    style={{ textDecoration: 'none' }}
                    to={`${id}`}
                    key={id}
                    >
                
                    <div className='card-container'>
                        <img className='card-image' src={image} alt="" />
                        <div className='card-content'>
                            <div className='card-content-name'>{name}</div>
                            <div className='card-content-species'>{species}</div>
                        </div>
                    </div>
                </Link>
            );
        });

        results.sort((a, b) => a.name - b.name ? 1 : -1);
        isMobile ? display.length = 2 : display.length = 8;

    } else {
        display = 'No Characters Found';
    }

    return (
        <>
            {display}
        </>
    )
}

export default Cards;
