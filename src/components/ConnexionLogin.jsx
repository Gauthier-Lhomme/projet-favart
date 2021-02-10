import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { api } from "../conf";

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
    api.post("/auth/login", values).then((res) => {
      setToken(res.data.token);
      dispatch({ type: "SET_ID", setId: res.data.idClient });
      if (res.data.idClient === 1) {
        history.push("/pagefavart");
      } else {
        history.push("/clientpage");
      }
    });
  };

  return { handleChange, values, handleSubmit };
}
