import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sagbar from "./components/sagbar/Sagbar";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";

import Fevral from "./components/fevral/Fevral";
import Mart from "./components/mart/Mart";
import Dekabr from "./components/dakabr/Dekabr";
import IshHaqi from "./components/ishhaqi/IshHaqi "; 

const fevralMembers = [
  { name: 'Islomov Sayyor' },
  { name: 'Mahmudjonov Lazizjon' },
  { name: 'Muhammadaliyev Ibrohim' },
  { name: 'Sulaymonov Muhammadjon' },
];

const martMembers = [
  { name: 'Abduraximov Islsm' },
  { name: 'Akbarov Alaypar' },
  { name: 'Altiboyev Faridon' },
  { name: 'G\'ulomova Zisila' },
  { name: 'Raxmonov Sadidakon' },
  { name: 'Sadullayevv Sanjar' },
];

const dekabrMembers = [
  { name: 'Ahmadov Akmal' },
  { name: 'Valiyev Sardor' },
  { name: 'Karimova Dilnoza' },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  const lessonPrice = 690000; 

  const fevralData = {
    students: fevralMembers.length,
    payment: fevralMembers.length * lessonPrice,
  };

  const martData = {
    students: martMembers.length,
    payment: martMembers.length * lessonPrice,
  };

  const dekabrData = {
    students: dekabrMembers.length,
    payment: dekabrMembers.length * lessonPrice,
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Header />
          <Sagbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dekabr />} />
              <Route path="/dekabr" element={<Dekabr />} />
              <Route path="/fevral" element={<Fevral />} />
              <Route path="/mart" element={<Mart />} />
              <Route
                path="/ishhaqi"
                element={
                  <IshHaqi
                    fevralData={fevralData}
                    martData={martData}
                    dekabrData={dekabrData}
                  />
                }
              />
            </Routes>
          </div>

        </>
      )}
    </div>
  );
};

export default App;
