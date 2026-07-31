import {
  House,
  Users,
  Settings,
  Shield
} from "lucide-react";

import { can } from "../permissions/permissions";


function Navbar({
  setPage,
  role
}) {


  return (

    <div className="

      fixed
      bottom-4
      left-4
      right-4

      h-20

      bg-white

      border
      border-[#D3D1C7]

      rounded-3xl

      shadow-xl

      flex
      items-center
      justify-around

      z-50

    ">


      <button
        onClick={()=>setPage("home")}
        className={item}
      >

        <House
          size={24}
          color="#B30D0D"
        />

        <span>
          Accueil
        </span>

      </button>





      <button
        onClick={()=>setPage("employees")}
        className={item}
      >

        <Users
          size={24}
          color="#14532D"
        />

        <span>
          Employés
        </span>

      </button>







      {
        can(role,"users") && (

          <button
            onClick={()=>setPage("users")}
            className={item}
          >

            <Shield
              size={24}
              color="#14532D"
            />

            <span>
              Utilisateurs
            </span>

          </button>

        )
      }








      <button
        onClick={()=>setPage("settings")}
        className={item}
      >

        <Settings
          size={24}
          color="#5F5E5A"
        />

        <span>
          Réglages
        </span>

      </button>




    </div>

  );

}





const item = `

flex
flex-col
items-center
justify-center

gap-1

text-xs

font-semibold

text-[#2C2C2A]

hover:text-[#B30D0D]

transition

`;




export default Navbar;