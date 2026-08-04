function AttendanceSection({ attendance }) {

  return (
    <div className="mt-5 bg-white rounded-2xl p-4 shadow-sm">

      <h3 className="font-bold text-lg mb-3">
        Pointages
      </h3>

      {attendance.length === 0 ? (

        <p className="text-gray-500">
          Aucun pointage trouvé
        </p>

      ) : (

        <div className="space-y-2">

          {attendance.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b pb-2"
            >

              <span>
                {new Date(item.check_time).toLocaleDateString()}
              </span>

              <span>
                {new Date(item.check_time).toLocaleTimeString()}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default AttendanceSection;