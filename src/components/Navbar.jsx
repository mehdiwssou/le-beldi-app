import {
  House,
  Users,
  Settings,
  Shield,
  ArrowLeft
} from "lucide-react";

import { can } from "../permissions/permissions";

function Navbar({
  setPage,
  role,
  goBack,
  page
}) {

  return (

    <div
      className="
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
      "
    >


      {
        page !== "home" ? (

          <button
            onClick={goBack}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-2xl
              bg-[#F1EFE8]
              border
              border-[#D3D1C7]
              text-[#B30D0D]
              font-bold
              shadow-sm
              active:scale-95
              transition
            "
          >

            <div
              className="
                w-8
                h-8
                rounded-full
                bg-[#B30D0D]
                text-white
                flex
                items-center
                justify-center
              "
            >

              <ArrowLeft size={18} />

            </div>

            <span>
              Retour
            </span>

          </button>

        ) : (

          <button
            onClick={() => setPage("home")}
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

        )
      }



      <button
        onClick={() => setPage("employees")}
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
        can(role, "users") && (

          <button
            onClick={() => setPage("users")}
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
        onClick={() => setPage("settings")}
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