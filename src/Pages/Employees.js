import { useState } from "react";
import Card from "../Components/employeeCard";
import Submitform from "../Components/submitform";

const Employees = () => {
  const [isUpdate, setIsUpdate] = useState(null);
  const [formmodal, setformmodal] = useState(false);
  const [employee, setemployee] = useState(false);
  const employees = [
    {
      first_name: "abhishek",
      last_name: "sharma",
      email: "abhishek2759@gmail.com",
      id: 12345,
      contact: 9418295223,
    },
    {
      first_name: "abhishek",
      last_name: "sharma",
      email: "abhishek2759@gmail.com",
      id: 12345,
      contact: 9418295223,
    },
  ];
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
            {employees?.map((data, index) => {
              return (
                <Card
                  employee={data}
                  isUpdate={isUpdate}
                  setIsUpdate={setIsUpdate}
                  setformmodal={setformmodal}
                  setemployee={setemployee}
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
        />
      )}
    </>
  );
};
export default Employees;
