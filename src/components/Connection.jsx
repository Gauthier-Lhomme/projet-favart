import logoFavart from "../assets/logo-icon-header/FAVART.jpg";
import useForm from "./ConnexionLogin.jsx";

import {
  Background,
  ContainerInscription,
  ContainerForm,
  Logo,
  ContainerLogo,
  Slogan,
  Span,
  TitleForm,
  H2,
  DivLabel,
  Formulaire,
  Input,
  Button,
  SpanLink,
} from "../styled-components/Connection";

export default function Connection({ setToken }) {
  const { handleChange, values, handleSubmit } = useForm({ setToken });
  return (
    <Background>
      <ContainerInscription>
        <ContainerLogo>
          <Logo src={logoFavart}></Logo>
          <Slogan>
            The best way to shape the Futur is to <Span>co create</Span> it NOW.
          </Slogan>
        </ContainerLogo>
        <ContainerForm>
          <TitleForm>Connexion</TitleForm>
          <Formulaire>
            <DivLabel>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={values.password}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <Button type="submit" value="Envoyer" onClick={handleSubmit}>
              Confirmer
            </Button>
          </Formulaire>
          <H2>
            Pas encore de compte ?
            <SpanLink to="/inscription">Inscription</SpanLink>
          </H2>
        </ContainerForm>
      </ContainerInscription>
    </Background>
  );
}
