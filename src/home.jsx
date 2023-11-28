import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import home from '../images/home.png'
import user from '../images/user.png'
import logo from '../images/logo.png'


const Home = ({ employeeData, isLoggedIn }) => {
  const calculateAverageProductivity = (day) => {
    const totalProductivity = employeeData.reduce((sum, employee) => sum + employee.productivity[day], 0);
    const averageProductivity = totalProductivity / employeeData.length;
    return averageProductivity.toFixed(2);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div> 
          <div>
          <img src={logo} alt="logo image" width="150" height="150" className='logo-image'/>
          </div>
          <h2 className='dashboard'>𝔼𝕞𝕡𝕝𝕠𝕪𝕖𝕖 ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕚𝕧𝕚𝕥𝕪 𝔻𝕒𝕤𝕙𝕓𝕠𝕒𝕣𝕕</h2>
          <div className='outer-box'>
          <div className='prod-box'>
            {Object.keys(employeeData[0].productivity).map((day) => (
              <div key={day} className='prod-info'>
                 <div className="bordered-container">
                <h3 className='inline-element'>{`Productivity on ${day}`}</h3>
                <p className='inline-element'>{`${calculateAverageProductivity(day)}%`}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="bottom-navigation">
            <Link to="/">
                <img className='link-image' src={home} alt="Home" />
            </Link>
            <Link to="/employee-list">
                <img className='link-image' src={user} alt="Employee List" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
