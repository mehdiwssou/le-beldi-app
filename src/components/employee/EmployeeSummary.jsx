import {
  Wallet,
  HandCoins,
  BadgeCheck,
  FileText
} from "lucide-react";


function EmployeeSummary({ emp, netSalary, setSalarySlip }) {


return (

<>


<div

className="

grid

grid-cols-3

gap-3

mt-5

"

>





<div

className="

bg-white

rounded-3xl

p-4

border

border-[#D3D1C7]

"

>

<Wallet

size={20}

className="text-[#B30D0D]"

/>


<p

className="

text-xs

text-[#5F5E5A]

mt-3

"

>

Salaire

</p>



<h3

className="

font-bold

text-sm

text-[#2C2C2A]

"

>

{Number(emp.salary || 0).toLocaleString()} DA

</h3>


</div>









<div

className="

bg-white

rounded-3xl

p-4

border

border-[#D3D1C7]

"

>

<HandCoins

size={20}

className="text-orange-600"

/>


<p

className="

text-xs

text-[#5F5E5A]

mt-3

"

>

Acomptes

</p>



<h3

className="

font-bold

text-sm

text-[#2C2C2A]

"

>

{Number(emp.advances || 0).toLocaleString()} DA

</h3>



</div>









<div

className="

bg-[#14532D]

rounded-3xl

p-4

text-white

"

>


<BadgeCheck size={20}/>



<p

className="

text-xs

opacity-80

mt-3

"

>

Net

</p>




<h3

className="

font-bold

text-sm

"

>

{Number(netSalary || 0).toLocaleString()} DA

</h3>



</div>






</div>









<button

onClick={()=>setSalarySlip(true)}

className="

w-full

mt-5

py-4

rounded-3xl

bg-[#B30D0D]

text-white

font-bold

flex

items-center

justify-center

gap-2

shadow-md

active:scale-95

transition

"

>


<FileText size={20}/>


Générer fiche de paie


</button>





</>

);


}


export default EmployeeSummary;