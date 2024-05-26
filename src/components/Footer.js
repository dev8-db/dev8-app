import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Footer() {
    return (
        <Box as="footer" bg="gray.100" color="gray.800" py={8}>
        <Flex
            direction="column"
            align="center"
            justify="center"
            maxW="4xl"
            mx="auto"
        >
            <Text fontSize="lg" mb={2}>
                Connect with us:
            </Text>
            <Flex>
                <Link href="https://x.com/develop8_studio" mr={4} _hover={{ textDecoration: "none", color: "blue.300" }} target="_blank">Twitter<ExternalLinkIcon mx="2px" /></Link>
            </Flex>
            <Text mt={4}>&copy; Develop8 Studio. All rights reserved.</Text>
        </Flex>
        </Box>
    );
};