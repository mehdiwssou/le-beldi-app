import {
  Home,
  Users,
  FileText,
  Settings,
  Wallet,
  HandCoins,
  CalendarDays
} from "lucide-react";


function BottomNavigation({ page, setPage }) {


  const items = [

    {
      id: "home",
      label: "Accueil",
      icon: Home
    },

    {
      id: "employees",
      label: "Employés",
      icon: Users
    },

    {
      id: "salaries",
      label: "Paie",
      icon: FileText
    },

    {
      id: "advances",
      label: "Acomptes",
      icon: HandCoins
    },

    {
      id: "absences",
      label: "Absences",
      icon: CalendarDays
    },

    {
      id: "settings",
      label: "Réglages",
      icon: Settings
    }

  ];



  return (

    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        bg-white
        border-t
        border-[#D3D1C7]
        p-3
        flex
        justify-around
        shadow-lg
        z-50
      "
    >


      {items.map((item)=>{


        const Icon = item.icon;

        const active = page === item.id;


        return (

          <button

            key={item.id}

            onClick={() => setPage(item.id)}

            className={`
              flex
              flex-col
              items-center
              gap-1
              text-xs
              font-semibold
              transition

              ${
                active
                ? "text-[#B30D0D]"
                : "text-[#5F5E5A]"
              }

            `}

          >

            <Icon size={22}/>

            <span>
              {item.label}
            </span>


          </button>

        )

      })}


    </div>

  );

}


export default BottomNavigation;