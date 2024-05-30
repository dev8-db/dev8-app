import React, { useEffect, useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Spacer, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

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

    const headerStyles = {
        base: {
            position: 'fixed',
            width: '100%',
            top: 0,
            bg: 'white',
            transition: 'transform 0.3s',
            zIndex: 50,
            transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
        },
        supported: {
            backdropFilter: 'blur(10px)',
            bg: 'rgba(255, 255, 255, 0.5)',
        },
        fallback: {
            bg: 'rgba(255, 255, 255, 0.8)',
        },
    };

    return (
        <Box
        sx={{
            ...headerStyles.base,
            ...(isMobile
                ? {}
                : {
                    '@supports (backdrop-filter: blur(10px)) and (min-width: 48em)': headerStyles.supported,
                    '@supports not (backdrop-filter: blur(10px))': headerStyles.fallback,
                }),
        }}
            px={5} py={3}
            boxShadow="sm" zIndex="50"
        >
            <Flex alignItems="center">
                <Heading letterSpacing="5" fontSize={{ base: '2xl', md: 'xl' }}>
                    <Link href="/">🐱🍡🐶</Link>
                </Heading>
                <Spacer />
                <IconButton
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
                    <Link mx={2} className="text-gray-600" href="/about">
                        About
                    </Link>
                    <Link mx={2} className="text-gray-600 ml-5" href="/notices">
                        Notices
                    </Link>
                    <Link mx={2} className="text-gray-600 ml-5" href="/writings">
                        Writings
                    </Link>
                    <Link mx={2} className="text-gray-600 ml-5" href="/contact">
                        Contact
                    </Link>
                </Flex>
            </Flex>
            {isOpen && (
                <Box display={{ base: 'flex', md: 'none' }} flexDirection="column" p={5}>
                    <Link py={2} className="text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg" href="/about">
                        About
                    </Link>
                    <Link py={2} className="text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg" href="/notices">
                        Notices
                    </Link>
                    <Link py={2} className="text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg" href="/writings">
                        Writings
                    </Link>
                    <Link py={2} className="text-gray-600 py-[10px] px-[15px] hover:bg-gray-100 rounded-lg" href="/contact">
                        Contact
                    </Link>
                </Box>
            )}
        </Box>
    );
}
