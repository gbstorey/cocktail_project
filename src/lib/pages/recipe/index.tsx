import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Drink, Data, ingredientMeasure } from "../../../util/types";

const createIngredientsMeasures = (drink: Drink) => {
  let ingredientsMeasures = [] as ingredientMeasure[];
  const drinkObject = Object(drink);
  const drinkKeys = Object.keys(drinkObject) as string[];
  const ingredientKeys = drinkKeys.filter((key) => {
    return key.includes("Ingredient");
  });
  const measureKeys = drinkKeys.filter((key) => {
    return key.includes("Measure");
  });
  for (let i = 0; i < ingredientKeys.length; i++) {
    const strIngredient = drinkObject[ingredientKeys[i]];
    const strMeasure = drinkObject[measureKeys[i]];
    if (!strIngredient || !strMeasure) {
      continue;
    }
    ingredientsMeasures.push({
      ingredient: strIngredient,
      measure: strMeasure,
    });
  }
  return ingredientsMeasures;
};

const Recipe = () => {
  const data = useLoaderData() as Data;
  const drink = data.drinks[0];
  console.log(drink);
  const ingredientsMeasures = createIngredientsMeasures(drink);
  if (!drink) {
    return <p>Error finding drink.</p>;
  }

  return (
    <Container maxW={"4xl"} position={"relative"}>
      <Stack
        textAlign={"left"}
        align={"left"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {drink.strDrink}{" "}
        </Heading>
        <Flex alignContent={"space-between"}>
          <Container maxW={"sm"} ml={0} pl={0}>
            <Text
              color={"orange.400"}
              maxW={"3xl"}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              pb={"5"}
            >
              {drink.strCategory}
            </Text>
            {ingredientsMeasures.map((pair) => {
              return (
                <>
                  <Text color={"gray.500"} maxW={"3xl"}>
                    {pair.ingredient}
                    {" - "}
                    <Text as={"span"} color={"orange.400"} maxW={"3xl"}>
                      {pair.measure}
                    </Text>
                  </Text>
                </>
              );
            })}
            <Text
              color={"orange.400"}
              maxW={"3xl"}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              py={"5"}
            >
              Directions
            </Text>
            <Text color={"gray.500"} maxW={"3xl"}>
              {drink.strInstructions}
            </Text>
            <Stack spacing={6} direction={"row"}>
              <Button
                rounded={"full"}
                px={6}
                mt={"10"}
                colorScheme={"orange"}
                bg={"orange.400"}
                _hover={{ bg: "orange.500" }}
              >
                Shop Ingredients
              </Button>
            </Stack>
          </Container>
          <Box boxSize={"sm"} position={"relative"} mt={10}>
            {drink.strDrinkThumb ? (
              <Image src={drink.strDrinkThumb} alt={"Picture of drink"} borderRadius={"20px"}/>
            ) : null}
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Recipe;
