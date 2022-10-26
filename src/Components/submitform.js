import { useEffect, useState } from "react";

const Submitform = ({
  isUpdate,
  setIsUpdate,
  setformmodal,
  employee,
  getEmployees,
}) => {
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
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      user?.email?.length < 1 ||
      user?.last_name?.length < 1 ||
      user?.first_name?.length < 1 ||
      user?.contact?.length < 1 ||
      !user
    ) {
      return setError(`Fields should not be empty`);
    } else {
      if (
        user.email.match(
          "(^([a-z-A-Z0-9]+)([@]{1})([A-Za-z]*)([.]{1})([a-zA-Z]{2,4}))"
        ) == null
      ) {
        setError("Email should be of type abhishek@gmail.com");
      } else if (user.contact.length != 10) {
        setError("Phon number must be 10 digits");
      } else {
        setError(null);
        if (!isUpdate) {
          const url = `http://localhost:9000/adduser`;
          fetch(url, {
            method: "Post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user),
          }).then((res) => {
            if (res.status == 200) {
              getEmployees();
              setformmodal(false);
            }
            if (res.status == 403) {
              res.json().then((data) => {
                console.log(data.error);
                setError(data.error);
              });
            }
          });
        } else {
          fetch("http://localhost:9000/update", {
            method: "Put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              getEmployees();
              setformmodal(false);
            });
        }
      }
    }
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
            name="first_name"
            value={user.first_name}
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
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          {isUpdate ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default Submitform;
