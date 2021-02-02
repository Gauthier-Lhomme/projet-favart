import useForm from "./UpdateRessourcesExt.jsx";

import {
  FlexBox2,
  P,
  Formulaire,
  DivLabel,
  Label,
  Input,
  StyledButton,
} from "../styled-components/UpdateRessourcesExtForm";

export default function Inscription() {
  const { handleChange, values, handleSubmit } = useForm();
  return (
    <FlexBox2>
      <P>Remplissez les champs suivants pour ajouter un document :</P>
      <Formulaire onSubmit={handleSubmit}>
        <fieldset>
          <DivLabel>
            <Label>Lien *</Label>
            <Input
              type="text"
              name="link"
              placeholder="Lien"
              value={values.link}
              onChange={handleChange}
              required
            />
          </DivLabel>
          <DivLabel>
            <Label>Titre *</Label>
            <Input
              type="text"
              name="title"
              placeholder="titre"
              value={values.title}
              onChange={handleChange}
              required
            />
          </DivLabel>
          <DivLabel>
            <Label>Description *</Label>
            <Input
              type="text"
              name="description"
              placeholder="Description"
              value={values.description}
              onChange={handleChange}
            />
          </DivLabel>
          <StyledButton type="submit" value="Envoyer" />
        </fieldset>
      </Formulaire>
    </FlexBox2>
  );
}
