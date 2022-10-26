const Card = ({employee,setIsUpdate,setformmodal,setemployee}) => {
  return (
    <div className="card-cont1">
      <div className="First_name">{employee?.first_name}</div>
      <div className="Last_name">{employee?.last_name}</div>
      <div className="Email">{employee?.email}</div>
      <div className="Actions">
        <button onClick={()=>{
        setIsUpdate(true);
        setformmodal(true);
        setemployee(employee);
    }}> Update</button>
        <button>View</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
export default Card;
