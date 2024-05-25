import React from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Spacer, useDisclosure } from '@chakra-ui/react';
import Link from "next/link";

export default function Header() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box bg="white" px={4} py={3} boxShadow="sm">
            <Flex alignItems="center">
                <Heading color="gray.900" size="md">Develop8</Heading>
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
                <Link mx={2} className='text-gray-700 hover:underline' href="/">
                    About
                </Link>
                <Link mx={2} className='text-gray-700 ml-5 hover:underline' href="/notices">
                    Notices
                </Link>
                <Link mx={2} className='text-gray-700 ml-5 hover:underline' href="/writings">
                    Writings
                </Link>
                <Link mx={2} className='text-gray-700 ml-5 hover:underline' href="/contact">
                    Contact
                </Link>
                </Flex>
            </Flex>
            {isOpen && (
                <Box
                    display={{ base: 'flex', md: 'none' }}
                    flexDirection="column"
                    alignItems="flex-end"
                    p={3}
                >
                <Link py={2} className='text-gray-700 hover:underline mb-[3px] md:mb-0' href="/">
                    About
                </Link>
                <Link py={2} className='text-gray-700 hover:underline mb-[3px] md:mb-0' href="/notices">
                    Notices
                </Link>
                <Link py={2} className='text-gray-700 hover:underline mb-[3px] md:mb-0' href="/writings">
                    Writings
                </Link>
                <Link py={2} className='text-gray-700 hover:underline' href="/contact">
                    Contact
                </Link>
                </Box>
            )}
        </Box>
    );
};