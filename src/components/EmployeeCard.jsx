import {
  Briefcase,
  ChevronRight
} from "lucide-react";


function EmployeeCard({ employee, onSelect }) {


  const initials = employee.name

    ? employee.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0,2)
        .toUpperCase()

    : "??";





  return (


    <button

      onClick={onSelect}

      className="

        w-full

        mt-3

        bg-white

        rounded-3xl

        p-4

        border

        border-[#D3D1C7]

        shadow-sm

        flex

        items-center

        justify-between

        hover:shadow-md

        active:scale-[0.98]

        transition

      "

    >





      <div className="flex items-center gap-4">





        {/* AVATAR */}

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

            text-lg

          "

        >

          {initials}


        </div>








        <div className="text-left">


          <h2

            className="

              font-bold

              text-[#2C2C2A]

            "

          >

            {employee.name}

          </h2>





          <p

            className="

              flex

              items-center

              gap-2

              text-sm

              text-[#5F5E5A]

              mt-1

            "

          >

            <Briefcase size={15}/>


            {employee.position}


          </p>



        </div>



      </div>








      <ChevronRight

        size={22}

        className="text-[#B30D0D]"

      />




    </button>


  );

}


export default EmployeeCard;