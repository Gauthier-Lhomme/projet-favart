import {
  FooterMain,
  DivContactUs,
  Hr,
  UlIcons,
  A,
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
            <Li>94, rue La Fayette</Li>
            <Li>75009 PARIS</Li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>Le Touquet</Li>
            <Li>94, rue La Fayette</Li>
            <Li>75009 PARIS</Li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>Roubaix</Li>
            <Li>94, rue La Fayette</Li>
            <Li>75009 PARIS</Li>
          </ul>
        </div>
      </DivAdress>
      <DivContactUs>
        <div>
          <H1Underline>Nous contacter</H1Underline>
          <ul>
            <Li>Tél. :+33(0) 155 333 333</Li>
            <Li>Mail : contact@favart.com</Li>
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
        <a href="#">Informations légales</a>
        <p>FAVART - 2021</p>
      </DivEndFooter>
    </FooterMain>
  );
}
