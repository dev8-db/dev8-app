import { Box, Flex, Text, VStack, Stack, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <Box bg="gray.100" className="py-5 px-5 md:mt-0 mt-[75px]">
        <Flex className="w-[90%] md:max-w-[1200px] mx-auto flex justify-between items-center flex-col md:flex-row text-center md:text-left">
            <VStack spacing={2.5} align={["center", "center", "flex-start"]} className="mb-5 md:mb-0">
                <Link href="/"><Image src="/develop8-studio.png" alt="Develop8" width="100px" /></Link>
                <Text className="text-sm text-gray-600">&copy; 2024 Develop8 Studio. All rights reserved.</Text>
            </VStack>
            <Stack direction="row" spacing={[5, 5, 10]} align="flex-start" className="flex-col md:flex-row">
                <VStack align={["flex-start"]}>
                    <Link href="/about" className="text-gray-500 hover:underline">About</Link>
                    <Link href="/writings" className="text-gray-500 hover:underline">Writings</Link>
                    <Link href="/contact" className="text-gray-500 hover:underline">Contact</Link>
                </VStack>
                <VStack align="flex-start">
                    <Link href="/" className="text-gray-500 hover:underline">Privacy Policy</Link>
                    <Link href="/" className="text-gray-500 hover:underline">Terms of Service</Link>
                    <Link href="/" className="text-gray-500 hover:underline">Support</Link>
                </VStack>
            </Stack>
        </Flex>
        </Box>
    );
};