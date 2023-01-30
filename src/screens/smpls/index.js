import React from "react";
import Text from "../../components/text";
import Box from "../../components/box";
import Heading from "../../components/heading";
import StyledSamples from "./styled-samples";
import ingr from "../../imgs/ingr_pic.svg";

const Samples = ({ ...rest }) => {
  return (
    <StyledSamples id="samples">
      <Box>
        <Heading level={2}>МОИ Работы</Heading>
        <Box className="collections-box">
          <Heading level={4}>Эксклюзивная коллекция парфюма от меня</Heading>
          <Box className="collection-box">
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={4}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={4}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={4}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={4}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
          </Box>

        </Box>
        <Box className="collections-box">
          <Heading level={3}>Эксклюзивная коллекция Авто-парфюма от меня</Heading>
          <Box className="collection-box">
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={3}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={3}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={3}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
            <div>
              <img src={ingr} alt="pic" />
              <Heading level={3}>Солёная карамель</Heading>
              <Text>Верхние ноты: Молоко</Text>
              <Text>Средние ноты: Морская соль</Text>
              <Text>Низкие ноты: Жженая карамель</Text>
            </div>
          </Box>

        </Box>
      </Box>
    </StyledSamples>
  );
};

export default Samples;