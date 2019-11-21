import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const ActorCard = (props) => {

    let actorInfo;
    if (props.actor) {
        actorInfo = (
            <>
                <div className="flex  flex-col">
                    <img
                        className="rounded-lg h-64"
                        src={`http://image.tmdb.org/t/p/w185${props.actorImage}`} alt="actor-picture" />
                    <div>
                        <h1 data-test="actor-name"
                            className="text-6xl font-bold tracking-widest text-orange-400 ml-4 text-center  ">{props.actor.name}
                        </h1>
                    </div>
                    <p className="mt-3 mb-3 text-justify">
                        Born: <span data-test="birth-date">{props.actor.birthday}</span> in <span data-test="birth-place">{props.actor.place_of_birth}</span>.
                    </p>
                    <p data-test="bio" className="mt-3 text-justify">{props.actor.biography}</p>
                </div>
            </>)
    }

    return (
        <div
            data-test="actor-card"
            className="my_height ml-2 mt-4 mb-2 border-black border-2 w-1/2 h-56 p-5 m-4 bg-gray-800 rounded-lg ">
            {props.actor
                ?  actorInfo 
                : <p data-test="start-search-info"> start your search</p>
            }
        </div>

    );
};

const mapStateToProps = state => {
    return {
        actor: state.actor.actorInfo,
        actorImage: state.actor.actorImageURL
    }
}

ActorCard.propTypes = {
    actor: PropTypes.object,
    actorImage: PropTypes.string
}



export default connect(mapStateToProps, null)(ActorCard);