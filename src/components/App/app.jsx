import './app.scss';

import logoImg from '../../Assets/logo.svg';
import Filter from '../Filter';
import TabComponent from '../TabComponent';
import Ticket from '../Ticket';
import { Counter } from '../Counter/Counter';

const App = () => {
  return (
    <div className="layout">
      <img className="posterImg" src={logoImg} alt="logo"></img>
      <Counter />
      <div className="app__container">
        <Filter />
        <div className="app__ticket__block">
          <TabComponent />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
};

export default App;
