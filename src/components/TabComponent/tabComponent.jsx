import './tabComponent.scss';

const TabComponent = () => {
  return (
    <div className="app__ticket__block__tabComponent">
      <button className="app__ticket__block__tabComponent__button-left">Самый дешевый</button>
      <button className="app__ticket__block__tabComponent__button-right">Самый быстрый</button>
    </div>
  );
};

export default TabComponent;
