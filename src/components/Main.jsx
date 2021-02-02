import React from "react";
import HeaderMenu01 from "./header/HeaderMenu01";
import HeaderBody01 from "./header/HeaderBody01";
import woods from "../assets/images/woods.jfif";
import docteur from "../assets/images/docteur.jfif";
import {
  H1Left,
  ContainerWhy,
  ImgWhy,
  PWhy,
  H2Title,
  PTitle,
  H1Right,
  ContainerWhom,
  ImgWhom,
  PWhom,
  Body,
  PMap,
  List,
  SubTitle,
  Bold,
  Listli,
  ListliWhom,
  FSentence,
  FPagraph,
} from "../styled-components/MainStyle";

export default function MainPage() {
  return (
    <Body>
      <FSentence>
        Explorer de nouveaux moyens d’action pour relever les grands défis de
        notre société
      </FSentence>
      <FPagraph>
        Favart est une agence d’ingénierie en innovation sociétale. Nous
        imaginons, développons et essaimons depuis plus de 10 ans des solutions
        de rupture à fort impact sociétal afin de répondre aux situations de
        fragilité de personnes (précarité, exclusion), de territoires (pauvreté,
        chômage, logement), de systèmes (Education, Action Sociale, Santé, …).
        Nous mettons en œuvre de nouveaux moyens d’action à destination des
        entreprises, des associations, des services de l’Etat et des
        collectivités locales afin de répondre aux enjeux des territoires.
      </FPagraph>
      <H1Left>Pourquoi FAVART ?</H1Left>
      <ContainerWhy>
        <ImgWhy src={woods} alt="Forêt avec rayons de soleil"></ImgWhy>
        <PWhy>
          <h3>Ce que les crises nous apprennent :</h3>
          <List>
            <Listli>
              Il n’y a aucune création de valeur durable dans un environnement
              économique, social et environnemental totalement dégradé.
            </Listli>
            <Listli>
              Aucun des outils économiques, juridiques et financiers actuels
              n’est adapté à la résolution des crises sociale, environnementale
              et sanitaire actuelles et à venir
            </Listli>
          </List>
          Le monde d’avant la crise de 2020 favorise la création de valeur
          marchande et les activités humaines permettant de maximiser la marge
          des produits-services (valeur d’échange) avec des processus de
          production délocalisés, immatériels et mondialisés, sans se préoccuper
          de la valeur d’usage (utilité sociale). dès l'apparition de cette
          crise, le monde “d’après” à mis la priorité sur les activités ayant la
          plus forte valeur d’usage : notamment la santé, le logement,
          l’alimentation, l’éducation, et la mise en œuvre de processus de
          production et de distribution relocalisés, matériels et de proximité.
        </PWhy>
      </ContainerWhy>

      <H2Title>Notre raison d’être</H2Title>

      <PTitle>
        Face à la gravité des problèmes sociaux et environnementaux avec des
        conséquences déjà irréversibles, il ne s’agit plus d’adapter à la marge
        le système de production, consommation, protection sociale mais de
        changer de paradigme en transformant fondamentalement les règles du jeu
        économique, juridique et financier.
        <br />
        <br />
        Favart contribue au changement de paradigme afin de renverser les
        contraintes à partir desquelles sont organisées les activités humaines :
        Passer d’une approche systémique dans laquelle le système financier
        domine le système humain qui lui-même domine l’écosystème naturel, à une
        approche holistique dans laquelle le capital naturel nourrit le capital
        humain qui guide le capital financier.
        <br></br>
        Notre ambition est d’expérimenter et de développer des solutions de
        rupture favorisant le passage :
        <List>
          <Listli>De l’abondance à la frugalité</Listli>
          <Listli>
            De l’économie de la rareté et exclusive à l’économie du bien commun
            et inclusive
          </Listli>
          <Listli>Du pyramidal à l’horizontal et au collaboratif</Listli>
          <Listli>Du progrès au bien-être de chacune</Listli>
        </List>
      </PTitle>

      <H1Right>Auprès de qui ?</H1Right>

      <ContainerWhom>
        <PWhom>
          Favart accompagne depuis 2009, l’amorçage et le développement de
          solutions concrètes et radicales capables de transformer la vie des
          habitants sur les territoires en répondant aux situations de fragilité
          des :
          <List>
            <ListliWhom>Personnes : précarité, exclusion</ListliWhom>
            <ListliWhom>
              Territoires : pauvreté, chômage, mal-logement
            </ListliWhom>
            <ListliWhom>
              Politiques publiques : éducation, action sociale, santé, sport
            </ListliWhom>
          </List>
          <p>
            Les solutions que nous développons répondent à quatre principes :
          </p>
          <List>
            <ListliWhom>
              Être non extractives en ne consommant aucune ressource rare
            </ListliWhom>
            <ListliWhom>
              Non propriétaires en permettant de rendre les produits-services
              créés accessibles au plus grand nombre
            </ListliWhom>
            <ListliWhom>
              Inclusives en rendant l'excellence accessible à ceux qui en ont le
              plus besoin
            </ListliWhom>
            <ListliWhom>
              Être pérenne à travers la recherche d’un profit qui maximise la
              valeur des capitaux naturels, humains et financiers
            </ListliWhom>
          </List>
        </PWhom>

        <ImgWhom
          src={docteur}
          alt="Jonas Salk, inventeur du vaccin contre la polio"
        />
      </ContainerWhom>
      <SubTitle>
        "Changer la vie des personnes les plus fragiles. Annihiler les
        situations de précarité sur les territoires."
      </SubTitle>

      <H1Left>Avec qui ?</H1Left>

      <PMap>
        Mobiliser toutes les compétences disponibles au service des habitants
        des territoires. Les solutions que nous développons s’adresse aux :
        <List>
          <Listli>
            <Bold>Pouvoirs publics/institutionnels</Bold> : Ministères, Agences
            nationales, Services déconcentrés de l’Etat, Départements
          </Listli>
          <Listli>
            <Bold>Collectivités locales</Bold> : Communautés d’agglomérations,
            Communes / Services municipaux
          </Listli>
          <Listli>
            <Bold>Entreprises </Bold>: fonctions/services Stratégie, Innovation,
            Responsabilité Sociétales des Entreprises, Finance
          </Listli>
          <Listli>
            <Bold>Associations</Bold>
          </Listli>
          <Listli>
            <Bold>Fonds d’investissement, Family Office</Bold>
          </Listli>
          <Listli>
            <Bold>Fondations</Bold>
          </Listli>
          <Listli>
            <Bold>Citoyens</Bold>
          </Listli>
        </List>
      </PMap>
    </Body>
  );
}
