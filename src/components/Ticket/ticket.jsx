import './ticket.scss';
import carrierlogo from '../../Assets/carrierlogo.svg';

const Ticket = () => {
  return (
    <div className="app__ticket">
      <div className="app__ticket__price">
        <div className="app__ticket__elem">price</div>
        <div className="app__ticket__elem">emplty</div>
        <div className="app__ticket__elem">
          <img src={carrierlogo}></img>
        </div>
      </div>
      <div className="app__ticket__flightdetails">
        <div className="app__ticket__elem">one</div>
        <div className="app__ticket__elem">two</div>
        <div className="app__ticket__elem">three</div>
      </div>
      <div className="app__ticket__flightdetails">
        <div className="app__ticket__elem">one</div>
        <div className="app__ticket__elem">two</div>
        <div className="app__ticket__elem">three</div>
      </div>
    </div>
  );
};

export default Ticket;
