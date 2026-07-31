import { useState } from "react";

import {
  HandCoins,
  MinusCircle,
  Plus
} from "lucide-react";


function FinanceSection({
  emp,
  saveEmployee
}) {


  const [advance,setAdvance] = useState("");

  const [deduction,setDeduction] = useState("");

  const [cause,setCause] = useState("");





  async function addAdvance(){


    if(!advance) return;


    const amount = Number(advance);



    const updated = {

      ...emp,

      advances:
        Number(emp.advances || 0)
        +
        amount,


      history:[

        ...(emp.history || []),

        {

          type:"Acompte",

          amount,

          date:new Date().toLocaleDateString()

        }

      ]

    };



    await saveEmployee(updated);

    setAdvance("");

  }







  async function addDeduction(){


    if(!deduction || !cause)
      return;



    const amount = Number(deduction);



    const updated = {

      ...emp,


      deductions:

        Number(emp.deductions || 0)

        +

        amount,



      history:[

        ...(emp.history || []),

        {

          type:"Prélèvement",

          amount,

          cause,

          date:new Date().toLocaleDateString()

        }

      ]

    };



    await saveEmployee(updated);


    setDeduction("");

    setCause("");

  }








  return (

    <div
      className="
        bg-white
        rounded-3xl
        p-5
        mt-5
        border
        border-[#D3D1C7]
        shadow-sm
      "
    >



      <h2 className="font-bold text-xl mb-5">

        💸 Gestion financière

      </h2>





      <div className="mb-6">


        <div className="flex items-center gap-2 mb-3">

          <HandCoins size={22}/>

          <h3 className="font-bold">

            Ajouter un acompte

          </h3>

        </div>




        <input

          type="number"

          placeholder="Montant DA"

          value={advance}

          onChange={
            e=>setAdvance(e.target.value)
          }

          className="
            w-full
            p-4
            rounded-2xl
            bg-[#F1EFE8]
            border
            mb-3
          "

        />



        <button

          onClick={addAdvance}

          className="
            w-full
            py-3
            rounded-3xl
            bg-[#B30D0D]
            text-white
            font-bold
            flex
            items-center
            justify-center
            gap-2
          "

        >

          <Plus size={20}/>

          Ajouter acompte

        </button>


      </div>







      <div>


        <div className="flex items-center gap-2 mb-3">


          <MinusCircle size={22}/>


          <h3 className="font-bold">

            Ajouter un prélèvement

          </h3>


        </div>






        <input

          type="number"

          placeholder="Montant DA"

          value={deduction}

          onChange={
            e=>setDeduction(e.target.value)
          }

          className="
            w-full
            p-4
            rounded-2xl
            bg-[#F1EFE8]
            border
            mb-3
          "

        />





        <input

          placeholder="Cause du prélèvement"

          value={cause}

          onChange={
            e=>setCause(e.target.value)
          }

          className="
            w-full
            p-4
            rounded-2xl
            bg-[#F1EFE8]
            border
            mb-3
          "

        />





        <button

          onClick={addDeduction}

          className="
            w-full
            py-3
            rounded-3xl
            bg-orange-600
            text-white
            font-bold
          "

        >

          Ajouter prélèvement

        </button>


      </div>




    </div>

  );

}


export default FinanceSection;