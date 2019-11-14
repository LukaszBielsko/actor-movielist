import React from 'react';

import AppHeader from '../../components/AppHeader';
import MovieCard from '../../components/MovieCard/MovieCard';

const MainPage = (props) => {
    
    return (
        <div
            className=" p-10 m-2 h-screen border-gray-900 rounded-lg text-teal-100 bg-gray-900 "
            // style={{ backgroundImage: "linear-gradient( rgb(6, 9, 10),rgb(58, 91, 95) 125%" }}
             >
            <AppHeader />

            {/* only one comp for now - so no router at the moment */}
            {/* when more pages comps - routes and switch */}
            <MovieCard />
        </div>
    
    );
};

export default MainPage;