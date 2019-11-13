import React from 'react';
import { connect } from 'react-redux';
// make index in actions export needed stuff
// finish mapDispatchToProps
import * as actionCreators from '../../../store/actions';


const AppHeader = (props) => {
    return (
        <>
            <div className="flex  w-2/3 m-auto">
                <div
                    className="bg-gray-900 border-1 border-black border-2 rounded text-white py-2 px-4 mr-auto font-bold">GITHUB</div>

                <div className="border-black border-2 rounded bg-gray-900 p-2 text-white font-bold flex "  >
                    <span>???</span>
                    <input
                        value={props.searchQuery}
                        onChange={e => props.getSearchQuery(e.target.value)}
                        type="text"
                        className="bg-gray-900 ml-2 font-bold text-white "
                        placeholder="search / dropdown list">
                    </input>
                    <span onClick={props.clearQuery}>  X  </span>
                </div>
            </div>
        </>
    );
};


const mapStatetoProps = state => {
    const { searchQuery } = state
    return {
        searchQuery
    }
}

const mapDispatchToProps = dispatch => {
   return {
       getSearchQuery: input => dispatch(actionCreators.searchQuery(input)) ,
       clearQuery: () => dispatch(actionCreators.clearQuery())
   }
}


export default connect(mapStatetoProps, mapDispatchToProps)(AppHeader)