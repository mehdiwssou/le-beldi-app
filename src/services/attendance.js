import { supabase } from "../supabase";

console.log("ATTENDANCE SERVICE CHARGE");


// Récupérer tous les pointages
export async function getAttendance() {

  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .order("check_time", { ascending: false });


  if (error) {
    console.log(error);
    return [];
  }


  return data;
}




// Récupérer les pointages d'un employé
export async function getEmployeeAttendance(employeeUid) {

  console.log("FONCTION APPELEE AVEC :", employeeUid);


  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .eq("employee_uid", String(employeeUid))


  console.log("DATA :", data);
  console.log("ERROR :", error);


  return data || [];
}