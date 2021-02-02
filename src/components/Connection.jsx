import logoFavart from "../assets/logo-icon-header/FAVART.jpg";

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

export default function Connection() {
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
                required
              />
            </DivLabel>
            <DivLabel>
              <Input
                type="text"
                name="password"
                id="password"
                placeholder="Mot de passe"
                required
              />
            </DivLabel>
            <Button>Confirmer</Button>
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
