import {
  Trash2,
  AlertTriangle
} from "lucide-react";


function DangerZone({ removeEmployee }) {


  return (

    <div

      className="

        bg-white

        rounded-3xl

        p-5

        mt-6

        border

        border-red-200

      "

    >





      <div className="flex items-center gap-3">



        <div

          className="

            w-12

            h-12

            rounded-2xl

            bg-[#FCEBEB]

            text-[#B30D0D]

            flex

            items-center

            justify-center

          "

        >

          <AlertTriangle size={22}/>


        </div>






        <div>


          <h2

            className="

              font-bold

              text-[#B30D0D]

            "

          >

            Zone sensible

          </h2>



          <p

            className="

              text-sm

              text-[#5F5E5A]

            "

          >

            Action irréversible

          </p>



        </div>




      </div>








      <div

        className="

          mt-5

          bg-[#FCEBEB]

          rounded-2xl

          p-4

        "

      >


        <p

          className="

            text-sm

            text-[#B30D0D]

            leading-relaxed

          "

        >

          La suppression retirera définitivement cet employé
          ainsi que ses données enregistrées.

        </p>


      </div>








      <button


        onClick={removeEmployee}


        className="

          w-full

          mt-5

          py-4

          rounded-3xl

          bg-[#B30D0D]

          text-white

          font-bold

          flex

          items-center

          justify-center

          gap-2

          active:scale-95

          transition

        "


      >


        <Trash2 size={20}/>


        Supprimer définitivement


      </button>





    </div>


  );


}


export default DangerZone;