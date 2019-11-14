import React from 'react';
import { connect } from 'react-redux';


const ActorCard = (props) => {


    return (
        <div
            className="my_height ml-2 mt-4 mb-2 border-black border-2 w-1/2 h-56 p-5 m-4 bg-gray-800 rounded-lg ">
            {props.actor
                ? <> <div className="flex  flex-row">
                    <img
                        className="rounded-lg"
                        src={`http://image.tmdb.org/t/p/w185${props.actorImage}`} alt="" />
                    <div>
                        <h1
                            className="text-6xl font-bold tracking-widest text-orange-400 ml-4 text-center  ">{props.actor.name}
                        </h1>
                    </div>
                </div>
                    <p className="mt-3 mb-3 text-justify">
                        Born: {props.actor.birthday} in {props.actor.place_of_birth}.
                    </p>
                    <p className="mt-3" >{props.actor.biography}</p>
                </>
                : <p>actor info will go in here</p>
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



export default connect(mapStateToProps, null)(ActorCard);