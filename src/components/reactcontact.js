import React, { useState } from "react";

const Reactcontact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    //destructuring of data
    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      const response = await fetch(
        "https://reactfirebaseform-43bb2-default-rtdb.firebaseio.com/firebasereactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (response) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Data stored successfully");
      }
    } else {
      alert("Please fill all the data..");
    }
  };
  return (
    <>
      <div>
        <div>
          <form>
            <div>
              <span class="label-input100">Your name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                autocomplete="off"
                required="required"
              />
            </div>

            <div>
              <div>
                <span class="label-input100">Email</span>
                <input
                  type="text"
                  name="email"
                  text="text"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={getUserData}
                  autocomplete="off"
                  required="required"
                />
              </div>
            </div>

            <div>
              <span class="label-input100">Mobile Number</span>
              <input
                type="text"
                name="phone"
                placeholder="Enter your Mobile number"
                value={user.mobile}
                onChange={getUserData}
                autocomplete="off"
                required="required"
              />
            </div>

            <div>
              <span class="label-input100">Message</span>
              <input
                type="text"
                name="message"
                placeholder="Enter your Message"
                value={user.message}
                onChange={getUserData}
                autocomplete="off"
                required="required"
              />
            </div>

            <div>
              <button onClick={postData}>
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Reactcontact;
