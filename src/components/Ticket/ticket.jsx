import './ticket.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { addMinutes, format } from 'date-fns';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const Ticket = () => {
  const { tickets } = useSelector((state) => state.getTickets);
  const isAll = useSelector((state) => state.changeFilter.all);
  const isNoChange = useSelector((state) => state.changeFilter.noChange);
  const isOneChange = useSelector((state) => state.changeFilter.oneChange);
  const isTwoChange = useSelector((state) => state.changeFilter.twoChange);
  const isThreeChange = useSelector((state) => state.changeFilter.threeChange);
  const filterToggle = useSelector((state) => state.filterToggle.value);

  let filterTicketsF = (tickets) => {
    let arrCopy = [...tickets];
    if (isAll) {
      return arrCopy;
    }
    if (!isAll && !isNoChange && !isOneChange && !isTwoChange && !isThreeChange) {
      return [];
    }
    if (isNoChange && !isOneChange && !isTwoChange && !isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 0);
    }
    if (!isNoChange && isOneChange && !isTwoChange && !isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 1);
    }
    if (!isNoChange && !isOneChange && isTwoChange && !isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 2);
    }
    if (!isNoChange && !isOneChange && !isTwoChange && isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 3);
    }
    if (isNoChange && isOneChange && !isTwoChange && !isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 0 || e.segments[0].stops.length == 1);
    }
    if (isNoChange && !isOneChange && isTwoChange && !isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 0 || e.segments[0].stops.length == 2);
    }
    if (isNoChange && !isOneChange && !isTwoChange && isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 0 || e.segments[0].stops.length == 3);
    }
    if (isNoChange && isOneChange && isTwoChange && !isThreeChange) {
      return arrCopy.filter(
        (e) => e.segments[0].stops.length == 0 || e.segments[0].stops.length == 1 || e.segments[0].stops.length == 2
      );
    }
    if (isNoChange && isOneChange && !isTwoChange && isThreeChange) {
      return arrCopy.filter(
        (e) => e.segments[0].stops.length == 0 || e.segments[0].stops.length == 1 || e.segments[0].stops.length == 3
      );
    }
    if (isNoChange && !isOneChange && isTwoChange && isThreeChange) {
      return arrCopy.filter(
        (e) => e.segments[0].stops.length == 0 || e.segments[0].stops.length == 2 || e.segments[0].stops.length == 3
      );
    }
    if (!isNoChange && isOneChange && isTwoChange && isThreeChange) {
      return arrCopy.filter(
        (e) => e.segments[0].stops.length == 1 || e.segments[0].stops.length == 2 || e.segments[0].stops.length == 3
      );
    }
    if (!isNoChange && isOneChange && isTwoChange && !isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 1 || e.segments[0].stops.length == 2);
    }
    if (!isNoChange && isOneChange && !isTwoChange && isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 1 || e.segments[0].stops.length == 3);
    }
    if (!isNoChange && !isOneChange && isTwoChange && isThreeChange) {
      return arrCopy.filter((e) => e.segments[0].stops.length == 2 || e.segments[0].stops.length == 3);
    }
    return arrCopy;
  };
  const filteredTickets = filterTicketsF(tickets);
  const sortTickets = () => {
    if (!filteredTickets) return;
    let sorted = [...filteredTickets];
    return sorted.sort((a, b) => (filterToggle ? a.price - b.price : a.segments[0].duration - b.segments[0].duration));
  };
  const sortedTickets = sortTickets(filteredTickets);
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
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 184,
    })
  );
  const element = () => {
    if (!sortedTickets) return <div>nothing to render</div>;
    return (
      <>
        <div style={{ width: '100%', height: '100vh' }}>
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                rowCount={sortedTickets.length}
                rowRenderer={({ key, index, style, parent }) => {
                  const ticket = sortedTickets[index];
                  const flightPath = `${ticket.segments[0].origin} - ${ticket.segments[0].destination}`;
                  const backFlightPath = `${ticket.segments[1].origin} - ${ticket.segments[1].destination}`;
                  const transitions = ticket.segments[0].stops.join(', ');
                  const backTransitions = ticket.segments[1].stops.join(', ');
                  const time = calcTime(ticket.segments[0].duration);
                  const timeBack = calcTime(ticket.segments[1].duration);
                  const price = `${ticket.price} P`;
                  const flightIntervalDate = flightIntervalStr(
                    new Date(ticket.segments[0].date),
                    ticket.segments[0].duration
                  );
                  const backFlightIntervalDate = flightIntervalStr(
                    new Date(ticket.segments[1].date),
                    ticket.segments[1].duration
                  );
                  return (
                    <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
                      <div style={style}>
                        <li key={`${ticket.price}${ticket.segments[0].duration}`} className="app__ticket">
                          <div className="app__ticket__price">
                            <div className="app__ticket__elem-price">{price}</div>
                            <div className="app__ticket__elem"></div>
                            <div className="app__ticket__elem">
                              <img
                                src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
                                alt={`${ticket.carrier} aviacompany logo`}
                              ></img>
                            </div>
                          </div>
                          <div className="app__ticket__flightdetails">
                            <div className="app__ticket__elem">{`${flightIntervalDate} \n${flightPath}`}</div>
                            <div className="app__ticket__elem">{`в пути \n${time}`}</div>
                            <div className="app__ticket__elem">{`${changes(ticket.segments[0])} \n${transitions}`}</div>
                          </div>
                          <div className="app__ticket__flightdetails">
                            <div className="app__ticket__elem">{`${backFlightIntervalDate} \n${backFlightPath}`}</div>
                            <div className="app__ticket__elem">{`в пути \n${timeBack}`}</div>
                            <div className="app__ticket__elem">{`${changes(
                              ticket.segments[1]
                            )} \n${backTransitions}`}</div>
                          </div>
                        </li>
                      </div>
                    </CellMeasurer>
                  );
                }}
              />
            )}
          </AutoSizer>
        </div>
      </>
    );
  };
  return element();
};

export default Ticket;
