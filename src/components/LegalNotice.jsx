import { P, H1, H2, Background } from "../styled-components/LegalNotice";
import Footer from "./Footer";

export default function LegalNotice() {
  return (
    <>
      <Background>
        <H1>Mentions légales</H1>
        <P>
          La société FAVART est une Société à Responsabilité Limitée de 500
          000€, inscrite au Registre du Commerce et des Sociétés de Paris sous
          le numéro B 512 548 165, dont le siège social est situé au 94 rue La
          Fayette, 75009 Paris.
        </P>
        <P>Téléphone: +33(0) 155 333 333 / +33(0) 601 048 062</P>
        <P>TVA intracommunautaire : FR22 512 548 165</P>
        <P>Pour nous contacter: contact@favart.com</P>
        <H2>Directeur de la publication</H2>
        <P>
          Le directeur de la publication est Yoann GEFFROY, Fondateur et
          Directeur de la société FAVART.
        </P>
        <H2>Hébergement</H2>
        <P>
          Le site Favart.com est hébergé par OVH, société immatriculée au RCS de
          Lille sous le numéro 424 761 419 00045 et dont le siège social se
          situe au 2, rue Kellermann, 59100 Roubaix
        </P>
      </Background>
      <Footer />
    </>
  );
}
