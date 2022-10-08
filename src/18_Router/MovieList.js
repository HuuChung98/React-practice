import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

// const DATA = [
//     { id: "1", name: "Dr Strange", desc: "....." },
//     { id: "2", name: "Avatar", desc: "....." },
//     { id: "3", name: "Spider Man", desc: "....." },
// ]
export default function MovieList() {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async() => {
        try {
            const { data } = await axios.get("https://62528e0f69af39728b501bf1.mockapi.io/products");
            setMovies(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <div className='row'>
            {movies.map(movie => {
                return (
                    <div className='container'>
                        <div key={movie.id} className='col-sm-4'>
                        <div  className='card'>
                            
                            {/* <div className='card-body'>{movie.}</div> */}
                            <div className="card-body">
                                <img src={movie.img}
                                     alt={movie.title}
                                     className="card-img"
                                     width="100%"
                                     height="300px"
                                />
                                <div className='card-header'>{movie.title}</div>
                                <div className="card-text">
                                    <h1 className=''>{movie.desc}</h1>
                                </div>

                            </div>
                            <Link className='btn btn-success' to={`/movies/${movie.id}`}>Details</Link>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
