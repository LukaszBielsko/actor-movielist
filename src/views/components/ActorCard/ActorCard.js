import React from 'react';
import { connect } from 'react-redux';


const ActorCard = (props) => {

    if (!props.actor) return <p>actor info will go here</p>

    return (
        <>
            <img src={`http://image.tmdb.org/t/p/w342${props.actorImage}`} alt=""/>
            <h1
                className="text-3xl font-bold tracking-widest text-orange-400 ">{props.actor.name}
            </h1>
            <p className="mt-3 mb-3 text-justify">Born: {props.actor.birthday} in {props.actor.place_of_birth}.</p>
            <p>{props.actor.biography}</p>
        </>
    );
};

const mapStateToProps = state => {
    return {
        actor: state.actor.actorInfo,
        actorImage: state.actor.actorImageURL
    }
}



export default connect(mapStateToProps, null)(ActorCard);