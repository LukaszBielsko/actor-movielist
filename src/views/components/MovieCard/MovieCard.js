import React from 'react';

const MovieCard = (props) => {

    return (
        <div className="movieCard border-2 border-black mt-4 w-5/6 mr-auto ml-auto flex p-10 ">
            <div className="ml-2 mt-4 mb-2 border-black border-2 w-1/2 h-56 p-10 ">
                <p>actor photo</p>
                <p>some actor info</p>
            </div>
            <div className="mr-2 mt-4 mb-2 border-black border-2 w-1/2 h-56 p-10 ">
                <p>list of movies</p>
            </div>
        </div>
    );
};

export default MovieCard;