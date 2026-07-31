import { useEffect, useState } from "react";

import Login from "./components/Login";
import TopBar from "./components/TopBar";
import MonthSelector from "./components/MonthSelector";
import Navbar from "./components/Navbar";

import Employees from "./pages/Employees";
import Salaries from "./pages/Salaries";
import Advances from "./pages/Advances";
import Absences from "./pages/Absences";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Users from "./pages/Users";


function App(){


  const currentDate = new Date();


  const [connected,setConnected]=useState(false);



  const [page,setPage]=useState(
    localStorage.getItem("page") || "home"
  );



  const [role,setRole]=useState(
    localStorage.getItem("role") || "manager"
  );



  const [month,setMonth]=useState(
    localStorage.getItem("month") ||
    currentDate.toLocaleString("fr-FR",{
      month:"long"
    })
  );



  const [year,setYear]=useState(
    Number(localStorage.getItem("year")) ||
    currentDate.getFullYear()
  );






  useEffect(()=>{


    if(localStorage.getItem("connected")==="true"){

      setConnected(true);

      setRole(
        localStorage.getItem("role") || "manager"
      );

    }


  },[]);






  useEffect(()=>{

    localStorage.setItem(
      "page",
      page
    );

  },[page]);





  useEffect(()=>{

    localStorage.setItem(
      "connected",
      connected
    );

  },[connected]);





  useEffect(()=>{

    localStorage.setItem(
      "month",
      month
    );

  },[month]);





  useEffect(()=>{

    localStorage.setItem(
      "year",
      year
    );

  },[year]);







  function logout(){

    localStorage.clear();

    setConnected(false);

    setPage("home");

  }







  if(!connected){

    return (

      <Login

        setConnected={setConnected}

        setRole={setRole}

      />

    );

  }







  return (

    <div

      className="
        min-h-screen
        bg-[#F1EFE8]
        text-[#2C2C2A]
      "

    >





      {/* TOPBAR SEULEMENT ACCUEIL */}

      {
        page==="home" &&

        <TopBar

          logout={logout}

        />

      }







      {/* PERIODE */}

      <div
        className="
          px-5
          mt-3
        "
      >

        <MonthSelector

          month={month}

          setMonth={setMonth}

          year={year}

          setYear={setYear}

        />

      </div>








      {
        page==="home" &&

        <Home

          setPage={setPage}

          month={month}

          year={year}

        />

      }








      {
        page==="employees" &&

        <Employees

          setPage={setPage}

          month={month}

          year={year}

        />

      }







      {
        page==="salaries" &&

        <Salaries

          setPage={setPage}

          month={month}

          year={year}

        />

      }







      {
        page==="advances" &&

        <Advances

          setPage={setPage}

          month={month}

          year={year}

        />

      }







      {
        page==="absences" &&

        <Absences

          setPage={setPage}

          month={month}

          year={year}

        />

      }








      {
        page==="users" &&
        role==="owner" &&

        <Users

          setPage={setPage}

        />

      }







      {
        page==="settings" &&

        <Settings

          setPage={setPage}

        />

      }







      <Navbar

        role={role}

        setPage={setPage}

      />





    </div>

  );


}


export default App;