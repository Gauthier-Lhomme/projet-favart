import {
  FooterMain,
  DivContactUs,
  Hr,
  UlIcons,
  A,
  A2,
  DivEndFooter,
  H1,
  DivAdress,
  H1Underline,
  UlIconsMobile,
  Li,
} from "../styled-components/Footer";

import { ulMap } from "../assets/others/IconsList";

export default function Footer() {
  return (
    <FooterMain>
      <H1>Nous Localiser</H1>
      <Hr />
      <DivAdress>
        <div>
          <ul>
            <Li>Paris</Li>
            <Li>16, Place de la Bourse, 3ème étage</Li>
            <Li>75002 Paris</Li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>Métropole Européenne de Lille / Roubaix - Eurotéléport</Li>
            <Li>84, Boulevard du Général Leclerc</Li>
            <Li>Paraboles II, 7ème étage Gauche</Li>
            <Li>59100 Roubaix</Li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>Côte d’Opale </Li>
          </ul>
        </div>
      </DivAdress>
      <DivContactUs>
        <div>
          <H1Underline>Nous contacter</H1Underline>
          <ul>
            <Li>Yoann Geffroy </Li>
            <Li>Tél. : 06 01 04 80 62</Li>
            <Li>Mail : yoann.geffroy@favart.com</Li>
          </ul>
        </div>
        <div>
          <H1Underline>Nous suivre</H1Underline>
          <UlIcons>
            {ulMap.map((social) => {
              return (
                <Li key={social.name}>
                  <A href={social.link}>
                    <img src={social.url} alt={social.alt} />
                  </A>
                </Li>
              );
            })}
          </UlIcons>
        </div>
      </DivContactUs>
      <UlIconsMobile>
        {ulMap.map((social) => {
          return (
            <Li key={social.name}>
              <A href={social.link}>
                <img src={social.url} alt={social.alt} />
              </A>
            </Li>
          );
        })}
      </UlIconsMobile>
      <DivEndFooter>
        <A2 to="/mentionslegales">Informations légales</A2>
        <p>FAVART - 2021</p>
      </DivEndFooter>
    </FooterMain>
  );
}
