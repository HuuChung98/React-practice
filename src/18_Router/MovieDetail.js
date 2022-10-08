import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function MovieDetail() {
    // để lấy params trên url ta dùng hook useParams
    // path: movie/movieId: useParams trả về 1 object có keyvalueId ở bên trong
    const { movieId } = useParams();
    const [ movie, setMovie ] = useState(null);

    console.log(movieId);

    const fetchMovies = async () => {
        try {
            const { data } = await axios.get(`https://62528e0f69af39728b501bf1.mockapi.io/products/${movieId}`);
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [movieId]);

    if (!movie) {
        return null;
    };
    return (

        <div className="container">
            <div className="row col-sm-6">
                <img src={movie.img}
                    alt={movie.title}
                    className="card-img"
                    width="100%"
                    height="300px"
                />
            </div>
            <div className='col-sm-6'>
                <h1>{movie.desc}</h1>
            </div>
        </div>

    )
}
