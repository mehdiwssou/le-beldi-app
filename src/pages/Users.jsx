import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Users() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);


  const [form, setForm] = useState({

    fullname: "",
    username: "",
    password: "",
    role: "manager"

  });



  async function loadUsers() {

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("created_at", {
        ascending: false
      });


    if (error) {

      console.log(error);
      alert("Erreur chargement utilisateurs");

    } else {

      setUsers(data);

    }


    setLoading(false);

  }




  useEffect(() => {

    loadUsers();

  }, []);





  async function createUser() {


    if (
      !form.fullname ||
      !form.username ||
      !form.password
    ) {

      alert("Veuillez remplir tous les champs");

      return;

    }



    const { error } = await supabase
      .from("users")
      .insert([{

        fullname: form.fullname,
        username: form.username,
        password: form.password,
        role: form.role,
        active: true

      }]);



    if (error) {

      console.log(error);
      alert("Erreur création utilisateur");


    } else {


      alert("Utilisateur créé avec succès ✅");


      setForm({

        fullname: "",
        username: "",
        password: "",
        role: "manager"

      });


      setShowForm(false);


      loadUsers();

    }

  }







  async function toggleActive(user) {


    const { error } = await supabase

      .from("users")

      .update({

        active: !user.active

      })

      .eq("id", user.id);




    if (error) {

      console.log(error);

      alert("Erreur modification");

      return;

    }



    loadUsers();


  }







  async function deleteUser(user) {


    const confirmDelete = window.confirm(

      `Supprimer le compte de ${user.username} ?`

    );



    if (!confirmDelete) return;




    const { error } = await supabase

      .from("users")

      .delete()

      .eq("id", user.id);




    if (error) {


      console.log(error);

      alert("Erreur suppression");


      return;

    }



    alert("Utilisateur supprimé ✅");


    loadUsers();


  }






  if (loading) {

    return (

      <div className="p-6">

        Chargement...

      </div>

    );

  }






  return (

    <div className="p-6 pb-32">


      <div className="bg-white rounded-3xl shadow-lg p-8">



        <div className="flex justify-between items-center">


          <h1 className="text-3xl font-bold">

            👥 Gestion utilisateurs

          </h1>



          <button

            onClick={() => setShowForm(!showForm)}

            className="bg-green-600 text-white px-5 py-3 rounded-2xl font-bold"

          >

            ➕ Nouveau

          </button>


        </div>







        {showForm && (

          <div className="mt-8 border rounded-3xl p-6 space-y-4">


            <input

              className="w-full border p-3 rounded-xl"

              placeholder="Nom complet"

              value={form.fullname}

              onChange={(e)=>

                setForm({

                  ...form,

                  fullname:e.target.value

                })

              }

            />



            <input

              className="w-full border p-3 rounded-xl"

              placeholder="Nom utilisateur"

              value={form.username}

              onChange={(e)=>

                setForm({

                  ...form,

                  username:e.target.value

                })

              }

            />



            <input

              className="w-full border p-3 rounded-xl"

              placeholder="Mot de passe"

              value={form.password}

              onChange={(e)=>

                setForm({

                  ...form,

                  password:e.target.value

                })

              }

            />



            <select

              className="w-full border p-3 rounded-xl"

              value={form.role}

              onChange={(e)=>

                setForm({

                  ...form,

                  role:e.target.value

                })

              }

            >

              <option value="manager">

                👨‍💼 Gérant

              </option>


              <option value="employee">

                👷 Employé

              </option>


            </select>




            <button

              onClick={createUser}

              className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold"

            >

              Créer le compte

            </button>



          </div>

        )}








        <div className="mt-8 space-y-4">


          {users.map((user)=>(


            <div

              key={user.id}

              className="border rounded-2xl p-5 flex justify-between items-center"

            >



              <div>


                <h2 className="font-bold text-xl">

                  {user.fullname || user.username}

                </h2>


                <p>

                  @ {user.username}

                </p>


                <p>

                  Rôle :

                  <b className="ml-2">

                    {user.role}

                  </b>

                </p>


              </div>





              <div className="flex flex-col gap-3 items-end">


                <span>

                  {user.active ?

                    "🟢 Actif"

                    :

                    "🔴 Désactivé"

                  }

                </span>




                <button

                  onClick={() => toggleActive(user)}

                  className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold"

                >

                  {user.active ?

                    "Désactiver"

                    :

                    "Réactiver"

                  }

                </button>





                <button

                  onClick={() => deleteUser(user)}

                  className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold"

                >

                  🗑️ Supprimer

                </button>



              </div>



            </div>


          ))}


        </div>



      </div>


    </div>

  );

}


export default Users;