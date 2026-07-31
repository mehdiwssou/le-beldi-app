import { useState } from "react"



function Settings(){


  const [message,setMessage] = useState("")







  function exportData(){



    const data={


      employees:

      JSON.parse(

        localStorage.getItem("employees")

      )

      || [],




      username:

      localStorage.getItem("zargo_username")

      || "admin",




      password:

      localStorage.getItem("zargo_password")

      || "1234"



    }





    const file = new Blob(

      [

        JSON.stringify(

          data,

          null,

          2

        )

      ],

      {

        type:"application/json"

      }

    )






    const url =

      URL.createObjectURL(file)





    const link =

      document.createElement("a")





    link.href=url





    link.download=

      "LeBeldi_backup.json"





    link.click()





    setMessage(

      "✅ Sauvegarde créée"

    )



  }









  function importData(e){



    const file = e.target.files[0]



    if(!file)

      return





    const reader =

      new FileReader()





    reader.onload=(event)=>{



      const data =

        JSON.parse(

          event.target.result

        )





      localStorage.setItem(

        "employees",

        JSON.stringify(

          data.employees || []

        )

      )





      if(data.username){


        localStorage.setItem(

          "zargo_username",

          data.username

        )


      }






      if(data.password){


        localStorage.setItem(

          "zargo_password",

          data.password

        )


      }





      setMessage(

        "✅ Données restaurées, recharge Le Beldi"

      )



    }







    reader.readAsText(file)



  }









  return(


    <div style={page}>


      <h1>

        ⚙️ Paramètres Le Beldi

      </h1>








      <div style={card}>


        <h2>

          💾 Sauvegarde

        </h2>



        <p>

          Enregistre tous les employés,

          historiques et paramètres.

        </p>




        <button

          onClick={exportData}

          style={button}

        >

          📥 Exporter sauvegarde

        </button>



      </div>









      <div style={card}>


        <h2>

          📤 Restaurer

        </h2>




        <p>

          Choisir un fichier LeBeldi_backup.json

        </p>





        <input

          type="file"

          accept=".json"

          onChange={importData}

        />



      </div>








      {

        message &&


        <div style={messageBox}>

          {message}

        </div>


      }



    </div>


  )


}









const page={

padding:"25px",

paddingBottom:"100px",

background:"#f1f5f9",

minHeight:"100vh"

}







const card={

background:"white",

padding:"20px",

marginTop:"20px",

borderRadius:"20px",

boxShadow:

"0 5px 15px rgba(0,0,0,0.1)"

}







const button={

background:"#2563eb",

color:"white",

border:"none",

padding:"15px",

borderRadius:"15px",

fontSize:"16px"

}







const messageBox={

marginTop:"20px",

background:"#dcfce7",

color:"#166534",

padding:"15px",

borderRadius:"15px"

}






export default Settings