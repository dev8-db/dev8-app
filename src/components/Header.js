import React from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Spacer, useDisclosure, Image } from '@chakra-ui/react';
import Link from "next/link";

export default function Header() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box bg="white" px={4} py={3} boxShadow="sm" position="fixed" top={0} width="100%" zIndex="50">
        <Flex alignItems="center">
            <Link href="/" className='text-gray-700'><Image src="/develop8-studio.png" width="100px" /></Link>
            <Spacer />
            <IconButton
                aria-label={isOpen ? "Close menu" : "Open menu"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={onToggle}
                variant="outline"
                colorScheme="gray"
                display={{ base: 'flex', md: 'none' }}
            />
            <Flex
                display={{ base: 'none', md: 'flex' }}
                flexDirection="row"
                alignItems="center"
                flexGrow={1}
                justifyContent="flex-end"
                mt={{ base: 5, md: 0 }}
            >
                <Link mx={2} className='text-gray-600 hover:underline' href="/about">
                About
                </Link>
                <Link mx={2} className='text-gray-600 ml-5 hover:underline' href="/notices">
                Notices
                </Link>
                <Link mx={2} className='text-gray-600 ml-5 hover:underline' href="/writings">
                Writings
                </Link>
                <Link mx={2} className='text-gray-600 ml-5 hover:underline' href="/contact">
                Contact
                </Link>
            </Flex>
            </Flex>
            {isOpen && (
            <Box
                display={{ base: 'flex', md: 'none' }}
                flexDirection="column"
                p={5}
            >
                <Link py={2} className='text-gray-600 py-2 px-3 hover:bg-gray-100 rounded-lg' href="/about">
                About
                </Link>
                <Link py={2} className='text-gray-600 py-2 px-3 hover:bg-gray-100 rounded-lg' href="/notices">
                Notices
                </Link>
                <Link py={2} className='text-gray-600 py-2 px-3 hover:bg-gray-100 rounded-lg' href="/writings">
                Writings
                </Link>
                <Link py={2} className='text-gray-600 py-2 px-3 hover:bg-gray-100 rounded-lg' href="/contact">
                Contact
                </Link>
            </Box>
            )}
        </Box>
    );
};