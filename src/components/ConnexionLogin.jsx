import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function useForm({ setToken }) {
  const dispatch = useDispatch();

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
      setToken(res.data.token);
      dispatch({ type: "SET_ID", test: res.data.idClient });
      dispatch({ type: "SET_TOKEN", test: res.data.token });
      if (res.data.idClient === 1) {
        history.push("/pagefavart");
      } else {
        history.push("/clientpage");
      }
    });
  };

  return { handleChange, values, handleSubmit };
}
