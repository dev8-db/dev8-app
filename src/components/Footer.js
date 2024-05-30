import { Box, Flex, Text, VStack, Stack, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <Box bg="gray.100" className="py-5 px-5 mt-[75px]">
        <Flex className="w-[90%] md:max-w-[1200px] mx-auto flex justify-between items-center flex-col md:flex-row text-center md:text-left">
            <VStack spacing={2.5} align={["center", "center", "flex-start"]} className="mb-5 md:mb-0">
                <Link href="/"><Image src="/cheese-face.png" width="20" /></Link>
                <Text className="text-sm text-gray-600">&copy; 2024 Develop8 Studio. All rights reserved.</Text>
            </VStack>
            <Stack direction="row" spacing={[2.5, 5, 10]} align="flex-start" className="flex-col md:flex-row">
                <VStack align={["flex-start"]}>
                    <Link href="/about" className="text-gray-500 hover:underline"><Text>About</Text></Link>
                    <Link href="/writings" className="text-gray-500 hover:underline"><Text>Writings</Text></Link>
                    <Link href="/contact" className="text-gray-500 hover:underline"><Text>Contact</Text></Link>
                </VStack>
                <VStack align="flex-start">
                    <Link href="/" className="text-gray-500 hover:underline"><Text>Privacy Policy</Text></Link>
                    <Link href="/" className="text-gray-500 hover:underline"><Text>Terms of Service</Text></Link>
                    <Link href="/" className="text-gray-500 hover:underline"><Text>Support</Text></Link>
                </VStack>
            </Stack>
        </Flex>
        </Box>
    );
};