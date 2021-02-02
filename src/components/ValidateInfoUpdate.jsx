export default function validateInfoUpdate(values) {
  let errors = {};
  if (values.password2 !== values.password) {
    errors.password = "Les mots de passes doivent être identiques";
  }
  return errors;
}
