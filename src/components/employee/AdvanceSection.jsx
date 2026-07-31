import { HandCoins, Plus } from "lucide-react";


function AdvanceSection({
  emp,
  advance,
  setAdvance,
  addAdvance
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

bg-orange-100

text-orange-700

flex

items-center

justify-center

"

>

<HandCoins size={22}/>

</div>



<div>


<h2

className="

font-bold

text-[#2C2C2A]

"

>

Acomptes

</h2>


<p

className="

text-sm

text-[#5F5E5A]

"

>

Ajouter une avance

</p>


</div>



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

"

type="number"

placeholder="Montant de l'acompte (DA)"

value={advance}

onChange={e=>setAdvance(e.target.value)}

/>









<button

onClick={addAdvance}

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

Ajouter l'acompte

</button>









<div

className="

mt-5

rounded-3xl

bg-orange-50

p-5

"

>


<p

className="

text-sm

text-orange-700

"

>

Total des acomptes

</p>



<h3

className="

text-2xl

font-bold

text-[#2C2C2A]

mt-1

"

>

{Number(emp.advances || 0).toLocaleString()} DA

</h3>



</div>






</div>


);


}


export default AdvanceSection;