import { useEffect, useState } from "react";

const Submitform = ({ isUpdate, setIsUpdate, setformmodal, employee }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    email: "",
    last_name: "",
    contact: "",
  });

  useEffect(() => {
    if (isUpdate) {
      setUser(employee);
    }
  }, []);
  console.log(employee);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="Submitform-cont">
      <div className="Submitform-cont1">
        <div
          className="close"
          onClick={() => {
            setIsUpdate(null);
            setformmodal(false);
          }}
        >
          <i className="fa fa-remove"></i>
        </div>

        <div className="authscreen-info">
          {isUpdate ? "Update" : "Add employee"}
        </div>
        <div
          className="authscreen-form"
          style={error ? { marginBottom: 0 } : { marginBottom: 20 }}
        >
          <input
            type="text"
            placeholder="First name"
            name="name"
            value={user ? user.first_name : ""}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={user ? user.email : ""}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Last name"
            name="last_name"
            value={user ? user.last_name : ""}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="text"
            placeholder="Phone no"
            name="contact"
            value={user ? user.contact : ""}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {error && <p className="error-show">{error}</p>}
        <button>{isUpdate ? "Update" : "Add"}</button>
      </div>
    </div>
  );
};

export default Submitform;
