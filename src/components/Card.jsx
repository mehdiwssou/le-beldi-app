function Card({children,className=""}){


return(

<div

className={`

bg-white

dark:bg-slate-800

rounded-3xl

shadow-sm

p-5

${className}

`}

>

{children}

</div>


)

}


export default Card