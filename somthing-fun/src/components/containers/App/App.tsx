import { createContext, useReducer } from 'react';
import { initialState } from '../../../state/initialState';
import stateReducer from '../../../state/reducer/reducer';
import Header from '../../components/Header/Header';
import Routes from '../../components/Routes/Routes';
import './App.scss';

const StateContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)  //idk kno what to put <here>

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </StateContext.Provider>
  );
}

export default App;

export { StateContext };
