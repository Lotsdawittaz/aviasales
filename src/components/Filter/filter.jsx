import './filter.scss';

import { useSelector, useDispatch } from 'react-redux';

import { all, noChange, oneChange, twoChange, threeChange } from '../../Redux/changeFilterSlice';

const Filter = () => {
  const isAll = useSelector((state) => state.changeFilter.all);
  const isNoChange = useSelector((state) => state.changeFilter.noChange);
  const isOneChange = useSelector((state) => state.changeFilter.oneChange);
  const isTwoChange = useSelector((state) => state.changeFilter.twoChange);
  const isThreeChange = useSelector((state) => state.changeFilter.threeChange);

  const dispatch = useDispatch();

  return (
    <div className="app__filter">
      <div className="app__filter-box">
        <div className="title">количество пересадок</div>
        <form>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="all">
              <input
                onChange={() => {
                  dispatch(all());
                }}
                type="checkbox"
                id="all"
                name="all"
                checked={isAll}
              ></input>
              <span className="app__filter__checkbox-custom"></span>
              Все
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="no-change">
              <input
                onChange={() => {
                  dispatch(noChange());
                }}
                type="checkbox"
                id="no-change"
                name="no-change"
                checked={isNoChange}
              ></input>
              <span className="app__filter__checkbox-custom"></span>
              Без пересадок
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="one-change">
              <input
                onChange={() => {
                  dispatch(oneChange());
                }}
                type="checkbox"
                id="one-change"
                name="one-change"
                checked={isOneChange}
              ></input>
              <span className="app__filter__checkbox-custom"></span>1 пересадка
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="two-change">
              <input
                onChange={() => {
                  dispatch(twoChange());
                }}
                type="checkbox"
                id="two-change"
                name="two-change"
                checked={isTwoChange}
              ></input>
              <span className="app__filter__checkbox-custom"></span>2 пересадки
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="three-change">
              <input
                onChange={() => {
                  dispatch(threeChange());
                }}
                type="checkbox"
                id="three-change"
                name="three-change"
                checked={isThreeChange}
              ></input>
              <span className="app__filter__checkbox-custom"></span>3 пересадки
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Filter;
