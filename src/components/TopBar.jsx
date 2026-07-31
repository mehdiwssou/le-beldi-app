import {
  LogOut
} from "lucide-react";


function TopBar({ logout }) {

  return (

    <div
      className="
        flex
        items-center
        justify-between

        bg-white

        border
        border-[#D3D1C7]

        rounded-3xl

        p-4

        mx-5
        mt-4

        shadow-sm
      "
    >


      {/* NOM ENTREPRISE */}

      <div>

        <h1
          className="
            text-xl
            font-bold
            text-[#B30D0D]
          "
        >
          Le Beldi
        </h1>


      </div>





      {/* DECONNEXION */}

      <button

        onClick={logout}

        className="
          w-11
          h-11

          rounded-full

          bg-[#B30D0D]

          text-white

          flex
          items-center
          justify-center

          shadow-md

          hover:scale-105

          transition
        "

      >

        <LogOut size={20}/>


      </button>


    </div>

  );

}


export default TopBar;