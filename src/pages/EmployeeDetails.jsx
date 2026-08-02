import { useState } from "react";

import SalarySlip from "./SalarySlip";
import EmployeeHeader from "../components/employee/EmployeeHeader";
import EmployeeEditForm from "../components/employee/EmployeeEditForm";
import EmployeeSummary from "../components/employee/EmployeeSummary";
import FinanceSection from "../components/employee/FinanceSection";
import HistorySection from "../components/employee/HistorySection";
import DangerZone from "../components/employee/DangerZone";
import AbsenceSection from "../components/employee/AbsenceSection";
import {
  updateEmployee,
  deleteEmployee
} from "../services/employees";

function EmployeeDetails({
  employee,
  setSelectedEmployee,
  month,
  year,
  showFinance = false,
  showAbsence = false
}) {
  const [emp, setEmp] = useState(employee);
  const [salarySlip, setSalarySlip] = useState(false);
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
async function addAbsence() {

  const updated = {

    ...emp,

    absences: [

      ...(emp.absences || []),

      {
        type: absenceType,
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
    <div className="min-h-screen bg-[#f7f5ef] p-5 pb-24 text-gray-900">
      
        

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
      {
  showAbsence && (

    <AbsenceSection
      emp={emp}
      absenceType={absenceType}
      setAbsenceType={setAbsenceType}
      addAbsence={addAbsence}
    />

  )
}
{
  showFinance && (

    <FinanceSection

      emp={emp}

      saveEmployee={saveEmployee}

    />

  )
}
      

      <HistorySection emp={emp} />

      <DangerZone removeEmployee={removeEmployee} />
    </div>
  );
}

export default EmployeeDetails;