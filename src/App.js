import React, { useEffect, } from 'react';
import './App.css';
import { fetchData } from './actions/standingsAction';
import {  useDispatch, useSelector } from 'react-redux'




function App() {

  const dispatch = useDispatch();
  const { standings, loading, error } = useSelector(state => ({
    standings: state.standings,
    loading: state.loading,
    error: state.error,
  }));
  

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  if (loading) {
    <div className="App">
      <p>Loading....</p>
    </div>
  }

  if (error) {
    <div className="App">
      <p>Error</p>
    </div>
  }

  console.log(standings)

  return (
    <div className="App">

    {standings?.map((standings, i) => {
      return(
        <div key={i} style={{ display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <div className='team-logo' style={{width:'100px', height: '100px', marginBottom: '15px' }}>
          <img style={{width: '100%'}} src={standings?.team.logo} />
          </div>
          <p>{standings?.team.name}</p>
          <br />
          <p>{standings?.win.total} - {standings?.loss.total}</p>
        </div>
      )
    })}

    </div>
  );
}

export default App;



