import {
  Briefcase,
  Pencil
} from "lucide-react";

function EmployeeHeader({
  emp,
  month,
  year,
  editMode,
  setEditMode,
  risk
}) {
  const initials = emp.name
    ? emp.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "??";

  let riskStyle =
    "bg-[#EAF3DE] text-[#14532D]";

  let riskText =
    "Normal";

  if (risk > 70) {
    riskStyle =
      "bg-[#FCEBEB] text-[#B30D0D]";

    riskText =
      "Élevé";
  } else if (risk > 40) {
    riskStyle =
      "bg-orange-100 text-orange-700";

    riskText =
      "Attention";
  }

  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-5
      border
      border-[#D3D1C7]
      shadow-sm
    "
    >
      <div className="flex items-center gap-4">
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
          text-3xl
          font-bold
        "
        >
          {initials}
        </div>

        <div>
          <h1
            className="
            text-2xl
            font-bold
            text-[#2C2C2A]
          "
          >
            {emp.name}
          </h1>

          <p
            className="
            flex
            items-center
            gap-2
            text-[#5F5E5A]
            mt-1
          "
          >
            <Briefcase size={16} />
            {emp.position}
          </p>
        </div>
      </div>

      <button
        onClick={() => setEditMode(!editMode)}
        className="
        mt-5
        w-full
        py-3
        rounded-2xl
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
        <Pencil size={18} />

        {editMode
          ? "Fermer modification"
          : "Modifier employé"}
      </button>

      <div
        className="
        grid
        grid-cols-2
        gap-3
        mt-5
      "
      >
        <div
          className="
          bg-[#F1EFE8]
          rounded-2xl
          p-4
        "
        >
          <p className="text-sm text-[#5F5E5A]">
            Salaire
          </p>

          <h2 className="font-bold text-lg">
            {Number(emp.salary || 0).toLocaleString()} DA
          </h2>
        </div>

        <div
          className="
          bg-[#F1EFE8]
          rounded-2xl
          p-4
        "
        >
          <p className="text-sm text-[#5F5E5A]">
            Risque avance
          </p>

          <span
            className={`
            inline-block
            mt-2
            px-3
            py-1
            rounded-full
            text-xs
            font-bold
            ${riskStyle}
          `}
          >
            {risk}% · {riskText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeHeader;