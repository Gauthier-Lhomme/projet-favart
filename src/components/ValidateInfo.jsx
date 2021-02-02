export default function validateInfo(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Un mot de passe est requis";
  } else if (values.password.length < 8) {
    errors.password = "Le mot de passe est trop court (8 caractères minimums)";
  }
  if (values.password2 !== values.password) {
    errors.password = "Les mots de passes doivent être identiques";
  }
  return errors;
}
