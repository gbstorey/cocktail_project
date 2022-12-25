import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="xs">
        <Link href="https://github.com/gbstorey" isExternal>
          made by garrett storey
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
