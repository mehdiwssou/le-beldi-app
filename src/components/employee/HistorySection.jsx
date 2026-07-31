import {
  History,
  HandCoins,
  ReceiptText,
  CalendarDays
} from "lucide-react";


function HistorySection({ emp }) {


  function getIcon(type){


    if(type === "Acompte"){

      return (

        <HandCoins
          size={18}
          className="text-orange-700"
        />

      );

    }



    if(type === "Prélèvement"){

      return (

        <ReceiptText
          size={18}
          className="text-[#B30D0D]"
        />

      );

    }



    return (

      <CalendarDays
        size={18}
        className="text-[#14532D]"
      />

    );


  }





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







      <div className="flex items-center justify-between mb-6">



        <div className="flex items-center gap-3">



          <div

            className="

              w-11

              h-11

              rounded-2xl

              bg-[#F1EFE8]

              text-[#B30D0D]

              flex

              items-center

              justify-center

            "

          >

            <History size={22}/>

          </div>





          <div>


            <h2

              className="

                font-bold

                text-[#2C2C2A]

              "

            >

              Historique

            </h2>



            <p

              className="

                text-sm

                text-[#5F5E5A]

              "

            >

              Dernières activités

            </p>



          </div>



        </div>





        <span

          className="

            bg-[#F1EFE8]

            px-3

            py-1

            rounded-full

            text-sm

            font-bold

            text-[#2C2C2A]

          "

        >

          {emp.history?.length || 0}

        </span>



      </div>









      {

        (emp.history || []).length === 0 ?


        (

          <div

            className="

              bg-[#F1EFE8]

              rounded-2xl

              p-4

              text-center

              text-[#5F5E5A]

            "

          >

            Aucune activité enregistrée

          </div>


        )


        :


        (

          <div className="space-y-3">



          {

          emp.history.map((h,i)=>(



            <div

              key={i}

              className="

                flex

                items-center

                gap-4

                bg-[#F1EFE8]

                rounded-3xl

                p-4

              "

            >






              <div

                className="

                  w-11

                  h-11

                  rounded-2xl

                  bg-white

                  flex

                  items-center

                  justify-center

                "

              >

                {getIcon(h.type)}


              </div>







              <div className="flex-1">



                <p

                  className="

                    font-bold

                    text-[#2C2C2A]

                  "

                >

                  {h.type}

                </p>







                <p

                  className="

                    text-sm

                    text-[#5F5E5A]

                    mt-1

                  "

                >


                {

                  h.amount &&

                  `${Number(h.amount).toLocaleString()} DA`

                }


                {

                  h.cause &&

                  ` • ${h.cause}`

                }



                </p>







                <p

                  className="

                    text-xs

                    text-[#5F5E5A]

                    mt-1

                  "

                >

                  {h.date}

                </p>




              </div>







            </div>



          ))

          }



          </div>


        )

      }





    </div>


  );


}


export default HistorySection;