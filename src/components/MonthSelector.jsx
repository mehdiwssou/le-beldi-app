import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

function MonthSelector({
  month,
  setMonth,
  year,
  setYear
}) {

  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];

  function changeMonth(direction) {

    let index = months.indexOf(month);

    index += direction;

    if (index < 0) {
      index = 11;
      setYear(year - 1);
    }

    if (index > 11) {
      index = 0;
      setYear(year + 1);
    }

    setMonth(months[index]);

  }

  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");

  return (

    <div
      className="
        flex
        items-center
        justify-between
        bg-white
        border
        border-[#D3D1C7]
        rounded-2xl
        px-4
        py-2
        shadow-sm
        mt-3
      "
    >

      <button
        onClick={() => changeMonth(-1)}
        className="
          text-[#B30D0D]
          hover:scale-110
          transition
        "
      >
        <ChevronLeft size={20} />
      </button>

      <div
        className="
          flex
          items-center
          gap-2
          text-[#2C2C2A]
          font-semibold
          text-sm
        "
      >
        <CalendarDays
          size={18}
          className="text-[#B30D0D]"
        />

         {day} {month} {year}

      </div>

      <button
        onClick={() => changeMonth(1)}
        className="
          text-[#B30D0D]
          hover:scale-110
          transition
        "
      >
        <ChevronRight size={20} />
      </button>

    </div>

  );

}

export default MonthSelector;