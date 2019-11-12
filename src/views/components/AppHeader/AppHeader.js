import React from 'react';



const AppHeader = (props) => {
    return (
        <>
            <div className="flex  w-2/3 m-auto">
                <div 
                    className="bg-gray-900 border-1 border-black border-2 rounded text-white py-2 px-4 mr-auto font-bold">GITHUB</div>

                <div className="border-black border-2 rounded bg-gray-900 p-2 text-white font-bold flex "  >
                    <span>???</span>
                    <input type="text" className="bg-gray-900 ml-2 font-bold text-white " placeholder="search / dropdown list">
                 </input>
                </div>
            </div>
        </>
    );
};

export default AppHeader;