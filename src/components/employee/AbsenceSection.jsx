import {
  CalendarDays,
  Plus,
  CheckCircle,
  XCircle
} from "lucide-react";


function AbsenceSection({
  emp,
  absenceType,
  setAbsenceType,
  addAbsence
}) {


return (

<div

className="

bg-white

rounded-3xl

p-5

mt-5

border

border-[#D3D1C7]

shadow-sm

"

>






<div className="flex items-center justify-between mb-5">



<div className="flex items-center gap-3">



<div

className="

w-11

h-11

rounded-2xl

bg-[#EAF3DE]

text-[#14532D]

flex

items-center

justify-center

"

>

<CalendarDays size={22}/>

</div>





<div>


<h2

className="

font-bold

text-[#2C2C2A]

"

>

Absences

</h2>


<p

className="

text-sm

text-[#5F5E5A]

"

>

Suivi des absences

</p>


</div>



</div>





<span

className="

bg-[#EAF3DE]

text-[#14532D]

px-3

py-1

rounded-full

text-sm

font-bold

"

>

{emp.absences?.length || 0}

</span>



</div>









<select


className="

w-full

p-4

rounded-2xl

bg-[#F1EFE8]

border

border-[#D3D1C7]

outline-none

text-[#2C2C2A]

"

value={absenceType}

onChange={e=>setAbsenceType(e.target.value)}

>


<option value="justifiee">

Absence justifiée

</option>


<option value="non justifiee">

Absence non justifiée

</option>


</select>









<button


onClick={addAbsence}


className="

w-full

mt-4

py-4

rounded-3xl

bg-[#B30D0D]

text-white

font-bold

flex

items-center

justify-center

gap-2

active:scale-95

transition

"

>

<Plus size={20}/>

Ajouter une absence

</button>













<div className="mt-5 space-y-3">



{

(emp.absences || []).map((a,i)=>(



<div

key={i}

className="

bg-[#F1EFE8]

rounded-3xl

p-4

flex

items-center

justify-between

"

>


<div>



<div

className="

flex

items-center

gap-2

font-bold

text-[#2C2C2A]

"

>


{

a.type === "justifiee"

?

<CheckCircle

size={18}

className="text-[#14532D]"

/>

:

<XCircle

size={18}

className="text-[#B30D0D]"

/>

}



{

a.type === "justifiee"

?

"Justifiée"

:

"Non justifiée"

}



</div>




<p

className="

text-sm

text-[#5F5E5A]

mt-1

"

>

{a.date}

</p>



</div>



</div>



))

}



</div>







</div>


);


}


export default AbsenceSection;