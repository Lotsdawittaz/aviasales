import './app.scss';

import logoImg from '../../Assets/logo.svg';
import Filter from '../Filter';
import TabComponent from '../TabComponent';
import Ticket from '../Ticket';
import { Counter } from '../Counter/Counter';
import Sandbox from '../../Redux/sandbox';

const App = () => {
  return (
    <div className="layout">
      <img className="posterImg" src={logoImg} alt="logo"></img>
      <Counter />
      <Sandbox />
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
