import React, { useEffect, useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Spacer, useDisclosure, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import Link from "next/link";

export default function Header() {
    const { isOpen, onToggle } = useDisclosure();
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const isMobile = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMobile]);

    return (
        <Box px={5} py={3} boxShadow="sm" zIndex="50" className={`fixed w-[100%] top-0 bg-white md:bg-opacity-50 backdrop-blur-lg transition-transform duration-300 ${showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <Flex alignItems="center">
            {/* <Link href="/" className='fixed ml-5'><Image src="/cheese.png" width="75px" /></Link> */}
            <Heading letterSpacing="5" fontSize={{base: "2xl", md:"xl"}}><Link href="/">🐱🍡🐶</Link></Heading>
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
                <Link mx={2} className='text-gray-600' href="/about">
                About
                </Link>
                <Link mx={2} className='text-gray-600 ml-5' href="/notices">
                Notices
                </Link>
                <Link mx={2} className='text-gray-600 ml-5' href="/writings">
                Writings
                </Link>
                <Link mx={2} className='text-gray-600 ml-5' href="/contact">
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
                <Link py={2} className='text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg' href="/about">
                About
                </Link>
                <Link py={2} className='text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg' href="/notices">
                Notices
                </Link>
                <Link py={2} className='text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg' href="/writings">
                Writings
                </Link>
                <Link py={2} className='text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg' href="/contact">
                Contact
                </Link>
            </Box>
            )}
        </Box>
    );
};