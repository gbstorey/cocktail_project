import {Container, Heading, Stack, Text, Button} from '@chakra-ui/react';
import DrinkAnimation from "./components/DrinkAnimation";

export default function Home() {
  return (
      <Container maxW={'5xl'}>
        <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 28 }}>
          <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
            Complex spirits{' '}
            <Text as={'span'} color={'orange.400'}>
              made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Receive a random cocktail now.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <form action={"/recipe"}>
            <Button
                type={"submit"}
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            </form>
            {/*<Button rounded={'full'} px={6}>*/}
            {/*  Learn more*/}
            {/*</Button>*/}
          </Stack>
          <DrinkAnimation />
        </Stack>
      </Container>
  );
}