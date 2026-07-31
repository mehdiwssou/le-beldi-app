import { jsPDF } from "jspdf"


function SalarySlip({
employee,
setSalarySlip,
month,
year
}) {



const totalAbsences = employee.absences?.length || 0



const netSalary =

employee.salary

-

(employee.advances || 0)

-

(employee.deductions || 0)







function generatePDF(){


const doc = new jsPDF()



doc.setFont("helvetica","bold")

doc.setFontSize(24)

doc.text("LE BELDI",20,20)



doc.setFontSize(16)

doc.text(

"FICHE DE PAIE",

20,

35

)





doc.setFont("helvetica","normal")

doc.setFontSize(12)



doc.text(

`Periode : ${month || ""} ${year || ""}`,

20,

50

)



doc.text(

`Employe : ${employee.name}`,

20,

65

)



doc.text(

`Poste : ${employee.position}`,

20,

75

)



doc.text(

`Salaire : ${employee.salary} DA`,

20,

95

)



doc.text(

`Acomptes : ${employee.advances || 0} DA`,

20,

105

)



doc.text(

`Prelevements : ${employee.deductions || 0} DA`,

20,

115

)



doc.text(

`Absences : ${totalAbsences}`,

20,

125

)





doc.setFont("helvetica","bold")

doc.setFontSize(18)



doc.text(

`NET A PAYER : ${netSalary} DA`,

20,

150

)




doc.setFontSize(11)

doc.text(

`Date : ${new Date().toLocaleDateString()}`,

20,

170

)




doc.save(

`Fiche_paie_${employee.name}.pdf`

)


}









return(


<div className="

min-h-screen

bg-gray-50

dark:bg-slate-900

p-5

pb-24

text-gray-900

dark:text-white

">





<button

onClick={()=>setSalarySlip(false)}

className="

text-blue-600

dark:text-blue-400

font-bold

mb-5

"

>

⬅ Retour

</button>










<div className="

bg-gradient-to-r

from-blue-600

to-purple-600

rounded-3xl

p-6

text-white

shadow-lg

">


<h1 className="text-4xl font-bold">

LE BELDI

</h1>


<p className="mt-2">

📄 Fiche de paie

</p>



<p className="mt-3 opacity-80">

📅 {month} {year}

</p>


</div>









<div className="

bg-white

dark:bg-slate-800

rounded-3xl

p-6

mt-6

shadow-lg

">







<h2 className="text-xl font-bold">

👤 Informations employé

</h2>





<p className="mt-4">

Nom :

<b> {employee.name}</b>

</p>



<p>

💼 Poste :

{employee.position}

</p>




<p>

📞 Téléphone :

{employee.phone || "Non renseigné"}

</p>



<p>

📅 Embauche :

{employee.hire_date || "Non renseignée"}

</p>






<hr className="my-5 border-gray-200 dark:border-slate-700"/>






<h2 className="text-xl font-bold">

💰 Résumé salaire

</h2>





<p className="mt-4">

Salaire :

<b>{employee.salary} DA</b>

</p>



<p>

💸 Acomptes :

{employee.advances || 0} DA

</p>



<p>

📌 Prélèvements :

{employee.deductions || 0} DA

</p>



<p>

📅 Absences :

{totalAbsences}

</p>








<div className="

mt-6

bg-green-100

dark:bg-green-900

rounded-3xl

p-5

text-center

">


<p>

Net à payer

</p>



<h1 className="

text-3xl

font-bold

text-green-600

dark:text-green-300

">

{netSalary} DA

</h1>


</div>








</div>










<button

onClick={generatePDF}

className="

w-full

mt-6

py-4

rounded-3xl

bg-gradient-to-r

from-blue-500

to-purple-600

text-white

font-bold

shadow-lg

active:scale-95

transition

"

>

📄 Télécharger le PDF

</button>








</div>


)


}



export default SalarySlip