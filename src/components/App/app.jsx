import './app.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logoImg from '../../Assets/logo.svg';
import Filter from '../Filter';
import TabComponent from '../TabComponent';
import Ticket from '../Ticket';
import { fetchSearchId, fetchTickets } from '../../Redux/dataHandler';

const App = () => {
  const { stop } = useSelector((state) => state.getTickets);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      await dispatch(fetchSearchId());
      dispatch(fetchTickets());
    }
    getData();
  }, []);

  return (
    <div className="layout">
      <img className={stop ? 'posterImg' : 'posterImg animated'} src={logoImg} alt="logo"></img>
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
