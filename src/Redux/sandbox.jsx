import { useDispatch, useSelector } from 'react-redux';

import { fetchTickets } from './dataHandler';

const Sandbox = () => {
  const { searchId, loading } = useSelector((state) => state.getSearchId);
  const dispatch = useDispatch();
  /*   useEffect(() => {
    dispatch(fetchSearchId());
  }, []);
  if (loading) return <div>loading</div>; */
  return (
    <div>
      <button onClick={() => dispatch(fetchTickets())}>click</button>
      {searchId}
    </div>
  );
};

export default Sandbox;
