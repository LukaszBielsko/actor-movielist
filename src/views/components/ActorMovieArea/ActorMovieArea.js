import React from 'react';
import ActorCard from '../ActorCard/ActorCard';
import MovieListCard from '../MovieListCard/MovieListCard';
import Spinner from '../../../spinner';


const ActorMovieArea = (props) => {

    return (
        <div data-test="actor-movie-area"
            className="movieCard border-2 border-black mt-4 w-5/6 mr-auto ml-auto flex p-5 min-h-full">
            {/* <Spinner/> */}
            <ActorCard />
            <div
                className="my_height mr-2 mt-4 mb-2 border-black border-2 w-1/2 h-56 p-10 m-4 bg-gray-800 rounded-lg ">
                <MovieListCard />
            </div>
        </div>
    );
};

export default ActorMovieArea;