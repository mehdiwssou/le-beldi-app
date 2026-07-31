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
import EmployeeDetails from "./pages/EmployeeDetails";


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


  const [selectedEmployee,setSelectedEmployee]=useState(null);






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

    setSelectedEmployee(null);

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







      {
        page==="home" &&

        <TopBar

          logout={logout}

        />

      }








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

        (

          selectedEmployee ?


<EmployeeDetails

  employee={selectedEmployee}

  setSelectedEmployee={setSelectedEmployee}

  month={month}

  year={year}

  showFinance={selectedEmployee.showFinance}

/>

          :


          <Advances

            setPage={setPage}

            setSelectedEmployee={setSelectedEmployee}

            month={month}

            year={year}

          />
          

        )

      }









      {
  page==="absences" &&

  (
    selectedEmployee ?

    <EmployeeDetails

      employee={selectedEmployee}

      setSelectedEmployee={setSelectedEmployee}

      month={month}

      year={year}

      showAbsence={selectedEmployee.showAbsence}

    />

    :

    <Absences

      setPage={setPage}

      setSelectedEmployee={setSelectedEmployee}

      month={month}

      year={year}

    />

  )

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