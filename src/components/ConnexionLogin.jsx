import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function useForm({ setToken }) {
  let history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/login", values).then((res) => {
      setToken(res.data);
      history.push("/clientpage");
    });
  };

  return { handleChange, values, handleSubmit };
}
