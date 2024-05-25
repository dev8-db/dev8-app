import { Button, ButtonGroup } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useTab } from '@chakra-ui/react';
import { useMultiStyleConfig } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea
} from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import {
  Flex,
  Avatar,
  IconButton,
  Image
} from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import About from "@/components/about";
import Notices from "@/components/notices"
import Writings from "@/components/writings";
import Contact from "@/components/contact";

export default function IndexPage() {
  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as='span' className='sm:mr-[5px]'>
          {isSelected ? '😎' : '😐'}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  return (
    <div className='grid grid-rows-auto grid-cols-1 min-h-screen'>
      <Tabs variant='enclosed'>
        <TabList>
          <CustomTab>About</CustomTab>
          <CustomTab>Notices</CustomTab>
          <CustomTab>Writings</CustomTab>
          <CustomTab>Contact</CustomTab>
        </TabList>
        <TabPanels className='mt-5'>
          {/* About me */}
          <About />
          {/* Latest Notices */}
          <Notices />
          {/* Writings */}
          <Writings />
          {/* Contact Us */}
          <Contact />
        </TabPanels>
      </Tabs>
      <div className='flex flex-col items-center'>
        <Divider className='mt-10 mb-5' />
        <Text className='mb-5'>&copy; 2024 Develop8 Studio. All rights reserved.</Text>
      </div>
    </div>
  )
}