import './app.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logoImg from '../../Assets/logo.svg';
import Filter from '../Filter';
import TabComponent from '../TabComponent';
import Ticket from '../Ticket';
import { Counter } from '../Counter/Counter';
import Sandbox from '../../Redux/sandbox';
import { fetchSearchId, fetchTickets } from '../../Redux/dataHandler';

const App = () => {
  const { searchId, loading } = useSelector((state) => state.getSearchId);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('app effect');
    dispatch(fetchSearchId());
  }, []);

  return (
    <div className="layout">
      <img className="posterImg" src={logoImg} alt="logo"></img>
      {/* <Counter /> */}
      {/* <Sandbox /> */}
      <div className="app__container">
        <Filter />
        <div className="app__ticket__block">
          <TabComponent />
          <Ticket />
        </div>
      </div>
    </div>
  );
};

export default App;
