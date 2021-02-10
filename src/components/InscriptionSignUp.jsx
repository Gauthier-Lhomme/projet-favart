import { useState } from "react";
import { api } from "../conf";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function useForm(validateInfo) {
  let history = useHistory();

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    job: "",
    structure_name: "",
    structure_type: "",
    structure_field: "",
    job_field: "",
    territory: "",
    wishes: "",
    website: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    delete values.password2;
    api.post("/auth/signup", values).then((res) => {
      setValues(res.data);
      dispatch({ type: "SET_ID", setId: res.data.idClient });
      dispatch({ type: "SET_INFOS", setInfos: res.data.infosClients });

      history.push("/clientpage");
    });
  };

  return { handleChange, values, handleSubmit, errors };
}
