const Card = ({
  employee,
  getEmployees,
  setIsUpdate,
  setformmodal,
  setemployee,
  setIsView,
}) => {
  return (
    <div className="card-cont1">
      <div className="First_name">{employee?.first_name}</div>
      <div className="Last_name">{employee?.last_name}</div>
      <div className="Email">{employee?.email}</div>
      <div className="Actions">
        <button
          onClick={() => {
            setIsUpdate(true);
            setformmodal(true);
            setemployee(employee);
          }}
        >
          {" "}
          Update
        </button>
        <button
          onClick={() => {
            setIsUpdate(null);
            setformmodal(true);
            setemployee(employee);
            setIsView(true);
          }}
        >
          View
        </button>
        <button
          onClick={() => {
            fetch("http://localhost:9000/delete", {
              method: "delete",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(employee),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                getEmployees();
              });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Card;
