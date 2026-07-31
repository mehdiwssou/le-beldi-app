import { useState } from "react";

import SalarySlip from "./SalarySlip";
import EmployeeHeader from "../components/employee/EmployeeHeader";
import EmployeeEditForm from "../components/employee/EmployeeEditForm";
import EmployeeSummary from "../components/employee/EmployeeSummary";
import AdvanceSection from "../components/employee/AdvanceSection";
import DeductionSection from "../components/employee/DeductionSection";
import AbsenceSection from "../components/employee/AbsenceSection";
import HistorySection from "../components/employee/HistorySection";
import DangerZone from "../components/employee/DangerZone";

import {
  updateEmployee,
  deleteEmployee
} from "../services/employees";

function EmployeeDetails({ employee, setSelectedEmployee, month, year }) {
  const [emp, setEmp] = useState(employee);
  const [salarySlip, setSalarySlip] = useState(false);

  const [advance, setAdvance] = useState("");
  const [deduction, setDeduction] = useState("");
  const [cause, setCause] = useState("");
  const [absenceType, setAbsenceType] = useState("justifiee");

  const [editMode, setEditMode] = useState(false);

  const [editName, setEditName] = useState(employee.name);
  const [editPosition, setEditPosition] = useState(employee.position);
  const [editSalary, setEditSalary] = useState(employee.salary);
  const [editPhone, setEditPhone] = useState(employee.phone || "");

  async function saveEmployee(updated) {
    setEmp(updated);
    await updateEmployee(updated.id, updated);
  }

  async function saveEdit() {
    const updated = {
      ...emp,
      name: editName,
      position: editPosition,
      salary: Number(editSalary),
      phone: editPhone
    };

    await saveEmployee(updated);
    setEditMode(false);
  }

  async function removeEmployee() {
    const confirmDelete = window.confirm(
      `Voulez-vous vraiment supprimer ${emp.name} ?`
    );

    if (!confirmDelete) return;

    await deleteEmployee(emp.id);
    alert("Employé supprimé avec succès.");
    setSelectedEmployee(null);
  }

  async function addAdvance() {
    if (!advance) return;

    const amount = Number(advance);

    const updated = {
      ...emp,
      advances: (emp.advances || 0) + amount,
      history: [
        ...(emp.history || []),
        {
          type: "Acompte",
          amount,
          date: new Date().toLocaleDateString()
        }
      ]
    };

    await saveEmployee(updated);
    setAdvance("");
  }

  async function addDeduction() {
    if (!deduction || !cause) return;

    const amount = Number(deduction);

    const updated = {
      ...emp,
      deductions: (emp.deductions || 0) + amount,
      history: [
        ...(emp.history || []),
        {
          type: "Prélèvement",
          amount,
          cause,
          date: new Date().toLocaleDateString()
        }
      ]
    };

    await saveEmployee(updated);
    setDeduction("");
    setCause("");
  }

  async function addAbsence() {
    const updated = {
      ...emp,
      absences: [
        ...(emp.absences || []),
        {
          type: absenceType,
          date: new Date().toLocaleDateString()
        }
      ],
      history: [
        ...(emp.history || []),
        {
          type: "Absence",
          cause: absenceType,
          date: new Date().toLocaleDateString()
        }
      ]
    };

    await saveEmployee(updated);
  }

  const netSalary =
    emp.salary -
    (emp.advances || 0) -
    (emp.deductions || 0);

  const risk = emp.salary
    ? Math.round(((emp.advances || 0) / emp.salary) * 100)
    : 0;

  if (salarySlip) {
    return (
      <SalarySlip
        employee={emp}
        setSalarySlip={setSalarySlip}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-5 pb-24 text-gray-900 dark:text-white">
      <button
        onClick={() => setSelectedEmployee(null)}
        className="text-blue-600 dark:text-blue-400 font-bold mb-5"
      >
        ⬅ Retour
      </button>

      <EmployeeHeader
        emp={emp}
        month={month}
        year={year}
        editMode={editMode}
        setEditMode={setEditMode}
        risk={risk}
      />

      {editMode && (
        <EmployeeEditForm
          editName={editName}
          setEditName={setEditName}
          editPosition={editPosition}
          setEditPosition={setEditPosition}
          editSalary={editSalary}
          setEditSalary={setEditSalary}
          editPhone={editPhone}
          setEditPhone={setEditPhone}
          saveEdit={saveEdit}
        />
      )}

      <EmployeeSummary
        emp={emp}
        netSalary={netSalary}
        setSalarySlip={setSalarySlip}
      />

      <AdvanceSection
        emp={emp}
        advance={advance}
        setAdvance={setAdvance}
        addAdvance={addAdvance}
      />

      <DeductionSection
        emp={emp}
        deduction={deduction}
        setDeduction={setDeduction}
        cause={cause}
        setCause={setCause}
        addDeduction={addDeduction}
      />

      <AbsenceSection
        emp={emp}
        absenceType={absenceType}
        setAbsenceType={setAbsenceType}
        addAbsence={addAbsence}
      />

      <HistorySection emp={emp} />

      <DangerZone removeEmployee={removeEmployee} />
    </div>
  );
}

export default EmployeeDetails;