function StatCard({ title, value, icon: Icon, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        bg-white
        rounded-3xl
        p-5
        shadow-sm
        text-left
        border
        border-[#D3D1C7]
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
      "
    >

      <div
        className={`
          w-12
          h-12
          rounded-2xl
          flex
          items-center
          justify-center
          ${color}
        `}
      >
        <Icon size={24} />
      </div>


      <p className="text-[#5F5E5A] mt-4 text-sm">
        {title}
      </p>


      <h2 className="
        text-2xl
        font-bold
        mt-1
        text-[#2C2C2A]
      ">
        {value}
      </h2>


    </button>
  );
}

export default StatCard;