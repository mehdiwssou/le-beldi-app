import { useEffect, useState } from "react";

import {
  Users,
  Wallet,
  HandCoins,
  CalendarDays
} from "lucide-react";

import StatCard from "../components/StatCard";
import EmployeeCard from "../components/EmployeeCard";
import BottomNavigation from "../components/BottomNavigation";

import { getEmployees } from "../services/employees";
import logo from "../assets/logo.png";


function Home({ setPage }) {


  const [employees, setEmployees] = useState([]);



  useEffect(()=>{

    async function load(){

      const data = await getEmployees();

      setEmployees(data || []);

    }


    load();


  },[]);






  const totalSalary = employees.reduce(
    (total, emp)=>
      total + Number(emp.salary || 0),
    0
  );



  const totalAdvances = employees.reduce(
    (total, emp)=>
      total + Number(emp.advances || 0),
    0
  );



  const totalAbsences = employees.reduce(
    (total, emp)=>
      total + (emp.absences?.length || 0),
    0
  );





  const riskyEmployees = employees.filter(emp=>{


    if(!emp.salary)

      return false;



    return (

      ((emp.advances || 0) / emp.salary) * 100

    ) > 40;


  });







  return (

    <div
      className="
        min-h-screen
        bg-[#F1EFE8]
        p-5
        pb-28
      "
    >





      {/* LOGO + BIENVENUE */}

      <div
        className="
          flex
          items-center
          gap-4
          mt-4
        "
      >

        <img
          src={logo}
          alt="Le Beldi"
          className="
            w-16
            h-16
            rounded-2xl
            object-cover
            shadow-sm
          "
        />


        <div>

          <h1
            className="
              text-2xl
              font-bold
              text-[#2C2C2A]
            "
          >
            Bonjour
          </h1>


          <p
            className="
              text-[#5F5E5A]
            "
          >
            Bienvenue sur Le Beldi
          </p>


        </div>


      </div>







      {/* STATISTIQUES */}


      <div
        className="
          grid
          grid-cols-2
          gap-4
          mt-8
        "
      >



        <StatCard
          title="Employés"
          value={employees.length}
          icon={Users}
          color="bg-[#EAF3DE] text-[#14532D]"
          onClick={()=>setPage("employees")}
        />



        <StatCard
          title="Salaires"
          value={`${totalSalary} DA`}
          icon={Wallet}
          color="bg-[#FCEBEB] text-[#B30D0D]"
          onClick={()=>setPage("salaries")}
        />



        <StatCard
          title="Acomptes"
          value={`${totalAdvances} DA`}
          icon={HandCoins}
          color="bg-orange-100 text-orange-700"
          onClick={()=>setPage("advances")}
        />



        <StatCard
          title="Absences"
          value={totalAbsences}
          icon={CalendarDays}
          color="bg-green-100 text-green-700"
          onClick={()=>setPage("absences")}
        />


      </div>







      {/* RESUME */}


      <div

        className="
          mt-6
          bg-[#B30D0D]
          rounded-3xl
          p-6
          text-white
          shadow-lg
        "

      >


        <h2 className="text-xl font-bold">

          Résumé du mois

        </h2>



        <p className="mt-2 opacity-90">

          Suivi automatique de votre gestion

        </p>




        <div className="grid grid-cols-2 gap-4 mt-5">


          <div>

            <p className="text-sm opacity-80">
              Net estimé
            </p>


            <h3 className="text-xl font-bold">

              {totalSalary-totalAdvances} DA

            </h3>


          </div>





          <div>

            <p className="text-sm opacity-80">
              À surveiller
            </p>


            <h3 className="text-xl font-bold">

              {riskyEmployees.length}

            </h3>


          </div>


        </div>


      </div>








      {/* RISQUES */}


      <h2 className="text-xl font-bold mt-8 text-[#2C2C2A]">

        À surveiller

      </h2>





      {
        riskyEmployees.length === 0 ?


        (

          <p className="text-[#5F5E5A] mt-3">

            Aucun employé à risque

          </p>

        )


        :


        (

          riskyEmployees.map(emp=>(

            <EmployeeCard

              key={emp.id}

              employee={emp}

              hideButton={true}

            />

          ))

        )

      }








      <BottomNavigation

        setPage={setPage}

      />




    </div>

  );

}


export default Home;