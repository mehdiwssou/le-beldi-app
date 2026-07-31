import { useEffect, useState } from "react";

import { getEmployees } from "../services/employees";

import {
  ChevronRight,
  HandCoins
} from "lucide-react";


function Advances({ setPage, setSelectedEmployee }) {


  const [employees, setEmployees] = useState([]);



  useEffect(()=>{

    async function load(){

      const data = await getEmployees();

      setEmployees(data || []);

    }


    load();


  },[]);






  return (

    <div
      className="
        min-h-screen
        bg-[#F1EFE8]
        p-5
        pb-28
      "
    >




      <button

        onClick={()=>setPage("home")}

        className="
          mb-6
          text-[#B30D0D]
          font-bold
        "

      >

        ⬅ Retour

      </button>






      <div className="flex items-center gap-3 mb-6">


        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-orange-100
            text-orange-700
            flex
            items-center
            justify-center
          "
        >

          <HandCoins size={24}/>

        </div>



        <div>

          <h1 className="text-3xl font-bold">

            💸 Acomptes

          </h1>


          <p className="text-gray-500">

            Gestion des acomptes et prélèvements

          </p>


        </div>


      </div>








      <div className="space-y-4">


        {
          employees.map(emp=>(


            <button

              key={emp.id}

              onClick={()=>setSelectedEmployee({
  ...emp,
  showFinance:true
})}

              className="
                w-full
                bg-white
                rounded-3xl
                p-5
                border
                border-[#D3D1C7]
                shadow-sm
                flex
                items-center
                justify-between
                text-left
              "

            >



              <div>


                <h2 className="font-bold text-xl">

                  {emp.name}

                </h2>



                <p className="text-sm text-gray-500">

                  {emp.position}

                </p>





                <p className="text-orange-700 font-bold mt-2">

                  Acomptes :
                  {" "}
                  {Number(emp.advances || 0).toLocaleString()}
                  {" DA"}

                </p>




                <p className="text-red-700 font-bold">

                  Prélèvements :
                  {" "}
                  {Number(emp.deductions || 0).toLocaleString()}
                  {" DA"}

                </p>



              </div>





              <ChevronRight

                size={25}

                className="text-[#B30D0D]"

              />


            </button>


          ))

        }



      </div>





    </div>

  );


}



export default Advances;