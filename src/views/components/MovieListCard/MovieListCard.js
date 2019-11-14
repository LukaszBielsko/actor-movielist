import React from 'react';
import { connect } from 'react-redux';

const MovieListCard = (props) => {

    if (!props.movieList) return (<p> movie list here  </p>)

    const movieList =
        props.movieList.map(movie =>
            <li>
                {movie.original_title}
            </li>)

    return (
        <>
            <h1 className="text-6xl font-bold tracking-widest text-orange-400 ml-4 text-center ">Movie List</h1>
            <ul>
                {movieList}
            </ul>
        </>
    );
};

const mapStateToProps = state => {
    return {
        movieList: state.actor.actorMovies
    }
}


export default connect(mapStateToProps, null)(MovieListCard);