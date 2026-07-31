import { useState, useEffect } from "react";

import {
  UserPlus,
  Search,
  Users,
  ChevronRight
} from "lucide-react";

import EmployeeDetails from "./EmployeeDetails";

import {
  getEmployees,
  addEmployee as addEmployeeDB
} from "../services/employees";


function Employees({ month, year, setPage }) {


  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [showAddForm, setShowAddForm] = useState(false);



  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [hireDate, setHireDate] = useState("");




  useEffect(()=>{

    async function load(){

      const data = await getEmployees();

      setEmployees(data || []);

    }


    load();


  }, []);







  async function addEmployee(){


    if(!name || !position || !salary)
      return;



    const newEmployee = {


      name,

      position,

      salary:Number(salary),

      phone,

      hire_date:hireDate,

      hoursRemoved:0,

      advances:0,

      deductions:0,

      absences:[],

      history:[]


    };




    const created = await addEmployeeDB(newEmployee);



    if(created){

      setEmployees(prev=>[

        ...prev,

        created

      ]);

    }




    setName("");
    setPosition("");
    setSalary("");
    setPhone("");
    setHireDate("");

    setShowAddForm(false);


  }







  const filteredEmployees = employees.filter(emp=>{


    return (emp.name || "")

      .toLowerCase()

      .includes(

        search.toLowerCase()

      );


  });








  if(selectedEmployee){

    return (

      <EmployeeDetails

        employee={selectedEmployee}

        setSelectedEmployee={setSelectedEmployee}

        month={month}

        year={year}

      />

    );

  }







  return (

    <div

      className="
        min-h-screen
        bg-[#F1EFE8]
        p-5
        pb-28
      "

    >





      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">


        <button

          onClick={()=>setPage("home")}

          className="
            text-[#B30D0D]
            font-bold
          "

        >

          ← Retour

        </button>





        <div

          className="
            bg-white
            px-4
            py-2
            rounded-full
            shadow-sm
            border
            border-[#D3D1C7]
            flex
            items-center
            gap-2
          "

        >

          <Users size={18} className="text-[#B30D0D]"/>

          <span className="font-semibold">

            {employees.length} actifs

          </span>


        </div>



      </div>
            {/* AJOUTER EMPLOYE */}

      <div className="flex justify-center mb-6">


        <button

          onClick={()=>setShowAddForm(true)}

          className="
            flex
            flex-col
            items-center
            gap-2
          "

        >

          <div

            className="
              w-20
              h-20
              rounded-3xl
              bg-[#B30D0D]
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              hover:scale-105
              transition
            "

          >

            <UserPlus size={34}/>

          </div>



          <span className="
            font-semibold
            text-[#2C2C2A]
          ">

            Ajouter

          </span>



        </button>


      </div>








      {/* RECHERCHE */}


      <div className="relative mb-6">


        <Search

          size={20}

          className="
            absolute
            left-4
            top-4
            text-[#8A8983]
          "

        />


        <input

          className="
            w-full
            p-4
            pl-12
            rounded-3xl
            bg-white
            border
            border-[#D3D1C7]
            outline-none
            shadow-sm
          "

          placeholder="Rechercher un employé..."

          value={search}

          onChange={e=>setSearch(e.target.value)}

        />


      </div>









      {/* EQUIPE */}


      <h2

        className="
          text-xl
          font-bold
          text-[#2C2C2A]
          mb-4
        "

      >

        Équipe ({filteredEmployees.length})

      </h2>






      {
        filteredEmployees.map(emp=>{


          const initials =
            (emp.name || "")
              .split(" ")
              .map(x=>x[0])
              .join("")
              .substring(0,2)
              .toUpperCase();



          return (

            <button

              key={emp.id}

              onClick={()=>setSelectedEmployee(emp)}

              className="
                w-full
                bg-white
                rounded-3xl
                p-4
                mb-3
                flex
                items-center
                justify-between
                border
                border-[#D3D1C7]
                shadow-sm
              "

            >


              <div className="flex items-center gap-4">


                <div

                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-[#B30D0D]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                  "

                >

                  {initials}


                </div>




                <div className="text-left">


                  <h3 className="
                    font-bold
                    text-[#2C2C2A]
                  ">

                    {emp.name}

                  </h3>


                  <p className="
                    text-sm
                    text-[#5F5E5A]
                  ">

                    {emp.position}

                  </p>


                </div>



              </div>





              <ChevronRight

                size={22}

                className="text-[#B30D0D]"

              />


            </button>


          );


        })

      }









      {/* FORMULAIRE AJOUT */}

      {
        showAddForm && (


          <div

            className="
              fixed
              inset-0
              bg-black/40
              flex
              items-end
              z-50
            "

          >


            <div

              className="
                bg-white
                w-full
                rounded-t-3xl
                p-6
              "

            >


              <h2 className="
                text-xl
                font-bold
                mb-5
              ">

                Nouvel employé

              </h2>




              <input

                className={input}

                placeholder="Nom complet"

                value={name}

                onChange={e=>setName(e.target.value)}

              />




              <input

                className={input}

                placeholder="Poste"

                value={position}

                onChange={e=>setPosition(e.target.value)}

              />




              <input

                className={input}

                type="number"

                placeholder="Salaire DA"

                value={salary}

                onChange={e=>setSalary(e.target.value)}

              />




              <input

                className={input}

                placeholder="Téléphone"

                value={phone}

                onChange={e=>setPhone(e.target.value)}

              />




              <input

                className={input}

                type="date"

                value={hireDate}

                onChange={e=>setHireDate(e.target.value)}

              />





              <button

                onClick={addEmployee}

                className="
                  w-full
                  py-4
                  rounded-3xl
                  bg-[#B30D0D]
                  text-white
                  font-bold
                  mb-3
                "

              >

                Créer l'employé

              </button>





              <button

                onClick={()=>setShowAddForm(false)}

                className="
                  w-full
                  py-3
                  rounded-3xl
                  bg-[#F1EFE8]
                  font-semibold
                "

              >

                Annuler

              </button>



            </div>


          </div>


        )
      }





    </div>

  );

}






const input = `

w-full

p-4

mb-3

rounded-2xl

bg-[#F1EFE8]

border

border-[#D3D1C7]

outline-none

`;





export default Employees;