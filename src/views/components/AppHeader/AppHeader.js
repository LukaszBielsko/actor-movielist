import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';


const AppHeader = (props) => {

    let actorsList = null;
    if (props.actorsNames) {
        actorsList = props.actorsNames.map(actor => (
            <p
                key={actor.id}
                data-id={actor.id}
                className="m-2 bg-gray-700 py-1 pl-2 rounded-lg hover:bg-gray-600"
                onClick={e => props.getActorId(e.target.dataset.id)}>
                {actor.name}
            </p>)
        )
    }

    return (
        <>
            <div className="flex  w-2/3 m-auto h-12">
                <div
                    className="bg-gray-900 border-1 border-black border-2 rounded text-white py-2 px-4 mr-auto font-bold">GITHUB</div>

                <div className="border-black border-2 rounded bg-gray-900 p-2 text-white font-bold flex "  >
                    <span>???</span>
                    <div className="flex flex-col">
                        <input
                            value={props.searchQuery}
                            onChange={e => props.getSearchQuery(e.target.value)}
                            type="text"
                            className="bg-gray-900 ml-2 font-bold text-white "
                            placeholder="search / dropdown list">
                        </input>
                        <div className="bg-gray-900 z-10 rounded-lg ">
                            {actorsList}
                        </div>
                    </div>
                    <span onClick={props.clearQuery}>  X  </span>
                </div>
            </div>
        </>
    );
};


const mapStatetoProps = state => {
    return {
        searchQuery: state.search.searchQuery,
        actorsNames: state.search.actorsNames
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearchQuery: input => dispatch(actionCreators.searchQuery(input)),
        clearQuery: () => dispatch(actionCreators.clearQuery()),
        getActorId: (id) => dispatch(actionCreators.getActor(id))
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(AppHeader)