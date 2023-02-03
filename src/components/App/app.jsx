import './app.scss';
import logoImg from '../../Assets/logo.svg';
import Filter from '../Filter';
import TabComponent from '../TabComponent';
import Ticket from '../Ticket';

const App = () => {
  return (
    <div className="layout">
      <img className="posterImg" src={logoImg} alt="logo"></img>
      <div className="app__container">
        <Filter />
        {/* <div className="app__filter">
          <div className="title">количество пересадок</div>
          <div className="title">без пересадок</div>
          <div className="title">1 пересадка</div>
          <div className="title">2 пересадки</div>
          <div className="title">3 пересадки</div>
        </div> */}
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
