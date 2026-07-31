import { sectionCard, title, input, primaryButton } from "./employeeStyles";

function EmployeeEditForm({
  editName,
  setEditName,
  editPosition,
  setEditPosition,
  editSalary,
  setEditSalary,
  editPhone,
  setEditPhone,
  saveEdit
}) {
  return (
    <div className={sectionCard}>
      <h2 className={title}>✏️ Modifier les informations</h2>

      <input
        className={input}
        value={editName}
        onChange={e => setEditName(e.target.value)}
        placeholder="Nom"
      />

      <input
        className={input}
        value={editPosition}
        onChange={e => setEditPosition(e.target.value)}
        placeholder="Poste"
      />

      <input
        className={input}
        type="number"
        value={editSalary}
        onChange={e => setEditSalary(e.target.value)}
        placeholder="Salaire"
      />

      <input
        className={input}
        value={editPhone}
        onChange={e => setEditPhone(e.target.value)}
        placeholder="Téléphone"
      />

      <button onClick={saveEdit} className={primaryButton}>
        💾 Enregistrer
      </button>
    </div>
  );
}

export default EmployeeEditForm;