import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Error404 from '../404/Error404';
import StartingScreen from '../../containers/StartingScreen/StartingScreen';
import GameScreen from '../../containers/GameScreen/GameScreen';

function Routes() {
    return (
        <RouterRoutes>
            <Route path="/" element={<StartingScreen />} />
            <Route path="/start" element={<GameScreen />} />
            <Route path="*" element={<Error404 />} />
        </RouterRoutes>
    )
}

export default Routes;
