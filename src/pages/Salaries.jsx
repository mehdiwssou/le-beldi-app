function Salaries({ setPage }) {
  return (
    <div className="p-5">

      <button
        onClick={() => setPage("home")}
        className="mb-6 text-[#B30D0D] font-bold"
      >
        ⬅ Retour
      </button>

      <h1 className="text-3xl font-bold">💰 Salaires</h1>

      <p className="text-gray-500 mt-2">
        Cette page affichera bientôt tous les salaires.
      </p>

    </div>
  );
}

export default Salaries;