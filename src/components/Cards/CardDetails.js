import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CardDetails.scss';

const CardDetails = () => {
    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, origin, gender, species, status, type} = fetchedData;

    console.log(fetchedData);

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })();
      }, [api]);

    return (
        <section className='section card-details'>
            <nav className='card-details-nav'>
                <Link 
                    className='card-details-link'
                    style={{ textDecoration: 'none' }}
                    to="/">
                    Go back
                </Link>
            </nav>
            <div className='card-details-container'>
                <img className='card-details-image' src={image} alt="" />
                <div className='card-details-name'>{name}</div>
                <h6 className='card-details-title'>Informations</h6>
                <div className='card-details-content'>
                    <div className='card-details-content-box'>
                        <h6 className='card-details-content-title'>Gender</h6>
                        <p className='card-details-content-description'>{gender}</p>
                    </div>
                    <div className='card-details-content-box'>
                        <h6 className='card-details-content-title'>Status</h6>
                        <p className='card-details-content-description'>{status}</p>
                    </div>
                    <div className='card-details-content-box'>
                        <h6 className='card-details-content-title'>Specie</h6>
                        <p className='card-details-content-description'>{species}</p>
                    </div>
                    <div className='card-details-content-box'>
                        <h6 className='card-details-content-title'>Origin</h6>
                        <p className='card-details-content-description'>{origin?.name}</p>
                    </div>
                    <div className='card-details-content-box'>
                        <h6 className='card-details-content-title'>Type</h6>
                        <p className='card-details-content-description'>{type}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardDetails;
