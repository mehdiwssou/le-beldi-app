import { supabase } from "../supabase";


// Récupérer tous les employés
export async function getEmployees() {

  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .order("id");


  if (error) {
    console.log(error);
    return [];
  }


  return data;

}



// Ajouter un employé
export async function addEmployee(employee) {


  const { data, error } = await supabase
    .from("employees")
    .insert([employee])
    .select()
    .single();



  if (error) {

    console.log(error);
    return null;

  }


  return data;

}



// Supprimer un employé
export async function deleteEmployee(id) {


  const { error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id);



  if (error) {

    console.log(error);

  }


}



// Modifier un employé
export async function updateEmployee(id, values) {


  const { data, error } = await supabase
    .from("employees")
    .update(values)
    .eq("id", id)
    .select()
    .single();



  if (error) {

    console.log(error);
    return null;

  }


  return data;

}



// ==============================
// TRANSACTIONS EMPLOYÉS
// ==============================

// Récupérer toutes les opérations
export async function getTransactions() {

  const { data, error } = await supabase
    .from("employee_transactions")
    .select("*")
    .order("date", { ascending: false });


  if (error) {

    console.log(error);
    return [];

  }


  return data;

}



// Ajouter une opération
export async function addTransaction(transaction) {

  const { data, error } = await supabase
    .from("employee_transactions")
    .insert([transaction])
    .select()
    .single();


  if (error) {

    console.log(error);
    return null;

  }


  return data;

}



// Supprimer une opération
export async function deleteTransaction(id) {

  const { error } = await supabase
    .from("employee_transactions")
    .delete()
    .eq("id", id);


  if (error) {

    console.log(error);

  }

}