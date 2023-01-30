import React from "react";
import Text from "../../components/text";
import Box from "../../components/box";
import Heading from "../../components/heading";
import StyledAbout from "./styled-about";
import quality from "../../imgs/quality.png";
import nature from "../../imgs/nature.png";
import customers from "../../imgs/customers.png";

const About = ({ ...rest }) => {
  return (
    <StyledAbout id="about">
      <Box className="about-box">
        <Heading level={2}>Обо мне</Heading>
        <Text className="about-text">Меня зовут Анна, и я сертифицированный парфюмер. Концепция, которую я несу в мир парфюмерии - это уникальность. Я помогаю раскрыть внутренний свет каждого с помощью создания персонального аромата. </Text>
        <Text className="about-text">Встреча со мной это не просто флакон духов по завершению, а нечто большее! И каждый, кто хоть раз побывал у меня, подтвердит это. </Text>
        <Text className="about-text">Я очень люблю то, чем занимаюсь. Это дело - моя душа и огромная часть жизни. Приходя ко мне, вы через Кроличью нору попадаете в волшебный мир, мир в котором вы ощущаете ароматы так, как чувствую их я. Это особая атмосфера любви к себе и прекрасному. </Text>
        <Text className="about-text">Я заметила, у всех, кто первый раз переступает порог моей студии, в глазах растерянность и некая робость перед неизвестным… А через 1,5 часа я обнимаю на прощание человека, парящего над землей, с глазами полными искреннего детского восторга и радости. А после, я светящаяся от счастья, смакую приятное послевкусие от прошедшей встречи. </Text>
        <Text className="about-text">Я жду вас в любое время! Приходите не просто создавать аромат, а вместе творить волшебство.</Text>
      </Box>
      <Box className="why-box">
        <Heading level={3}>Почему я?</Heading>
        <Box className="container">
          <Box className="inside-container">
            <div>
              <img src={customers} alt="pic" />
              <Text className="why-text">Парфюм создается в непосредственном контакте с клиентом в результате 100% попадания в запрос.</Text>
            </div>

          </Box>
          <Box className="inside-container">
            <div>
              <img src={nature} alt="pic" />
              <Text className="why-text">В своей работе я использую компоненты высочайшего качества ведущих французских, американских и российских лабораторий.</Text>
            </div>

          </Box>
          <Box className="inside-container">
            <div>
              <img src={quality} alt="pic" />
              <Text className="why-text">Вы становитесь обладателем уникального аромата, который отражает вашу индивидуальность.</Text>
            </div>

          </Box>
        </Box>
      </Box>
    </StyledAbout>
  );
};

export default About;