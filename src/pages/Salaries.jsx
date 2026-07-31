import { useEffect, useState } from "react";

import { getEmployees } from "../services/employees";


function Salaries({ setPage }) {


  const [employees, setEmployees] = useState([]);



  useEffect(()=>{

    async function load(){

      const data = await getEmployees();

      setEmployees(data || []);

    }


    load();

  },[]);





  return (

    <div className="p-5">


      <button
        onClick={() => setPage("home")}
        className="mb-6 text-[#B30D0D] font-bold"
      >
        ⬅ Retour
      </button>




      <h1 className="text-3xl font-bold">
        💰 Salaires
      </h1>




      <p className="text-gray-500 mt-2 mb-6">
        Liste des salaires des employés.
      </p>





      <div className="space-y-4">


        {
          employees.length === 0 ?

          (
            <p>
              Aucun employé trouvé.
            </p>
          )


          :

          (

            employees.map(emp=>(


              <div
                key={emp.id}
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-sm
                  border
                  border-[#D3D1C7]
                "
              >


                <h2 className="font-bold text-xl">
                  {emp.name}
                </h2>


                <p className="text-[#B30D0D] font-bold mt-2">
                  {emp.salary || 0} DA
                </p>


              </div>


            ))


          )
        }



      </div>



    </div>

  );

}


export default Salaries;