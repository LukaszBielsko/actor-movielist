import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MovieListCard = (props) => {

    let movieList;
    if (props.movieList) {
        movieList =
            props.movieList.map(movie =>
                <li key={movie.original_title} data-test={movie.original_title}>
                    {movie.original_title}
                </li>)
    }

    return (
        <div className="movies">
            {props.movieList
                ? <>
                    <h1 className="text-6xl font-bold tracking-widest text-orange-400 ml-4 text-center ">Movie List</h1>
                    <ul data-test="movie-list">
                        {movieList}
                    </ul>
                  </>
                : <p data-test="empty-list-info"> movie list here  </p>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        movieList: state.actor.actorMovies
    }
}

MovieListCard.propTypes = {
    movieList: PropTypes.array
}

export default connect(mapStateToProps, null)(MovieListCard);