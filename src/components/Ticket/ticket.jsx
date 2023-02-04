import './ticket.scss';
import { useSelector } from 'react-redux';
import { addMinutes, format } from 'date-fns';

const Ticket = () => {
  const { tickets } = useSelector((state) => state.getTickets);
  const element = () => {
    if (tickets == null) return <div>nothing to render</div>;
    const calcTime = (minutes) => {
      return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
    };
    const flightIntervalStr = (dateVal, duraVal) => {
      let sum = addMinutes(dateVal, duraVal);
      let str = `${format(dateVal, 'HH')}:${format(dateVal, 'mm')} - ${format(sum, 'HH')}:${format(sum, 'mm')}`;
      return str;
    };
    const changes = (par) => {
      const changes = par.stops.length;
      switch (changes) {
        case 0:
          return 'Без пересадок';
        case 1:
          return '1 Пересадка';
        case 2:
          return '2 Пересадки';
        case 3:
          return '3 Пересадки';
        default:
          return '';
      }
    };
    return tickets.map((e, idx) => {
      const flightPath = `${e.segments[0].origin} - ${e.segments[0].destination}`;
      const backFlightPath = `${e.segments[1].origin} - ${e.segments[1].destination}`;
      const transitions = e.segments[0].stops.join(', ');
      const backTransitions = e.segments[1].stops.join(', ');
      const time = calcTime(e.segments[0].duration);
      const timeBack = calcTime(e.segments[1].duration);
      const price = `${e.price} P`;
      const flightIntervalDate = flightIntervalStr(new Date(e.segments[0].date), e.segments[0].duration);
      const backFlightIntervalDate = flightIntervalStr(new Date(e.segments[1].date), e.segments[1].duration);

      return (
        <li key={idx} className="app__ticket">
          <div className="app__ticket__price">
            <div className="app__ticket__elem-price">{price}</div>
            <div className="app__ticket__elem"></div>
            <div className="app__ticket__elem">
              <img src={`//pics.avs.io/99/36/${e.carrier}.png`} alt={`${e.carrier} aviacompany logo`}></img>
            </div>
          </div>
          <div className="app__ticket__flightdetails">
            <div className="app__ticket__elem">{`${flightIntervalDate} \n${flightPath}`}</div>
            <div className="app__ticket__elem">{`в пути \n${time}`}</div>
            <div className="app__ticket__elem">{`${changes(e.segments[0])} \n${transitions}`}</div>
          </div>
          <div className="app__ticket__flightdetails">
            <div className="app__ticket__elem">{`${backFlightIntervalDate} \n${backFlightPath}`}</div>
            <div className="app__ticket__elem">{`в пути \n${timeBack}`}</div>
            <div className="app__ticket__elem">{`${changes(e.segments[1])} \n${backTransitions}`}</div>
          </div>
        </li>
      );
    });
  };
  return element();
};

export default Ticket;
