import './tabComponent.scss';
import { useSelector, useDispatch } from 'react-redux';

import { setCheap, setFast } from '../../Redux/filterToggleSlice';

const TabComponent = () => {
  let val = useSelector((state) => state.filterToggle.value);
  //let ticketsData = useSelector((state) => state.testObj.filteredTickets);  ========== local object

  const dispatch = useDispatch();
  return (
    <div className="app__ticket__block__tabComponent">
      <div>{val}</div>
      <button
        //onClick={(() => dispatch(setCheap()), () => dispatch(sortAscending(filtered(0))))}
        onClick={() => {
          dispatch(setCheap());
        }}
        className={
          !val
            ? 'app__ticket__block__tabComponent__button-left'
            : 'app__ticket__block__tabComponent__button-left active'
        }
      >
        Самый дешевый
      </button>
      <button
        //onClick={(() => dispatch(setFast()), () => dispatch(sortAscending(filtered(1))))}
        onClick={() => {
          dispatch(setFast());
        }}
        className={
          val
            ? 'app__ticket__block__tabComponent__button-right'
            : 'app__ticket__block__tabComponent__button-right active'
        }
      >
        Самый быстрый
      </button>
    </div>
  );
};

export default TabComponent;
