import React from 'react';
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <Header/>
        <Landing/>
      </div>
    </div>
  )
}

export default Home;