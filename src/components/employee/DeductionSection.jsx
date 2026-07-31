import {
  ReceiptText,
  Plus
} from "lucide-react";


function DeductionSection({
  emp,
  deduction,
  setDeduction,
  cause,
  setCause,
  addDeduction
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





<div className="flex items-center gap-3 mb-5">


<div

className="

w-11

h-11

rounded-2xl

bg-[#FCEBEB]

text-[#B30D0D]

flex

items-center

justify-center

"

>

<ReceiptText size={22}/>

</div>





<div>


<h2

className="

font-bold

text-[#2C2C2A]

"

>

Prélèvements

</h2>



<p

className="

text-sm

text-[#5F5E5A]

"

>

Retenues sur salaire

</p>


</div>



</div>









<input


className="

w-full

p-4

rounded-2xl

bg-[#F1EFE8]

border

border-[#D3D1C7]

outline-none

text-[#2C2C2A]

mb-3

"

type="number"

placeholder="Montant du prélèvement (DA)"

value={deduction}

onChange={e=>setDeduction(e.target.value)}

/>








<input


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

placeholder="Motif du prélèvement"

value={cause}

onChange={e=>setCause(e.target.value)}

/>









<button


onClick={addDeduction}


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


Ajouter le prélèvement


</button>









<div

className="

mt-5

rounded-3xl

bg-[#FCEBEB]

p-5

"

>


<p

className="

text-sm

text-[#B30D0D]

"

>

Total des prélèvements

</p>




<h3

className="

text-2xl

font-bold

text-[#2C2C2A]

mt-1

"

>

{Number(emp.deductions || 0).toLocaleString()} DA

</h3>



</div>






</div>


);


}


export default DeductionSection;