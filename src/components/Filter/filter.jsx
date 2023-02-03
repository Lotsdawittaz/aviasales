import './filter.scss';

const Filter = () => {
  return (
    <div className="app__filter">
      <div className="app__filter-box">
        <div className="title">количество пересадок</div>
        <form>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="all">
              <input type="checkbox" id="all" name="all"></input>
              <span className="app__filter__checkbox-custom"></span>
              Все
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="no-change">
              <input type="checkbox" id="no-change" name="no-change"></input>
              <span className="app__filter__checkbox-custom"></span>
              Без пересадок
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="one-change">
              <input type="checkbox" id="one-change" name="one-change"></input>
              <span className="app__filter__checkbox-custom"></span>1 пересадка
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="two-change">
              <input type="checkbox" id="two-change" name="two-change"></input>
              <span className="app__filter__checkbox-custom"></span>2 пересадки
            </label>
          </div>
          <div className="app__filter__checkboxContainer">
            <label htmlFor="three-change">
              <input type="checkbox" id="three-change" name="three-change"></input>
              <span className="app__filter__checkbox-custom"></span>3 пересадки
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Filter;
