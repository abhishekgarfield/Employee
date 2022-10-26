import { useEffect, useState } from "react";
import Card from "../Components/employeeCard";
import Submitform from "../Components/submitform";

const Employees = () => {
  
  const [isUpdate, setIsUpdate] = useState(null);
  const [formmodal, setformmodal] = useState(false);
  const [employee, setemployee] = useState(false);
  const [employees, setEmployees] = useState(null);
  const [isView,setIsView]=useState(null);
  const getEmployees = () => {
    console.log("here")
    fetch("http://localhost:9000/getemployees").then((res) => {
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
      });
  };
  useEffect(() => {
    getEmployees();
  },[]);
  return (
    <>
      <div className="Employee-cont1">
        <div className="Employee-cont2">
          <div className="Header">Employees List</div>
          <div className="Add-employee-button">
            <button
              onClick={() => {
                setformmodal(true);
                setIsUpdate(false);
              }}
            >
              Add employee
            </button>
          </div>

          <div className="Employee-list">
            <div className="card-headers">
              <div className="First_name">First name</div>
              <div className="Last_name">Last name</div>
              <div className="Email">Email</div>
              <div className="Actions">Actions</div>
            </div>
            {employees && employees.length>0 && employees?.map((data, index) => {
              return (
                <Card
                  employee={data}
                  isUpdate={isUpdate}
                  setIsUpdate={setIsUpdate}
                  setformmodal={setformmodal}
                  setemployee={setemployee}
                  setIsView={setIsView}
                  getEmployees={getEmployees}
                />
              );
            })}
          </div>
        </div>
      </div>
      {formmodal && (
        <Submitform
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          setformmodal={setformmodal}
          employee={employee}
          getEmployees={getEmployees}
          setIsView={setIsView}
          isView={isView}
        />
      )}
    </>
  );
};
export default Employees;
