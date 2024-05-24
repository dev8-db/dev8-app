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
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

export default function IndexPage() {
  const articles = [
    { date: 'May 16', title: '【Next.js】なぜimgタグではなくnext/imageを使うのか', category: 'Tech', url: 'https://zenn.dev/dev8/articles/nextjs_image' },
    { date: 'May 4', title: 'ドメインを入力してからページが表示されるまでの仕組み', category: 'Tech', url: 'https://zenn.dev/dev8/articles/dns_http_https' },
    { date: 'April 23', title: 'VercelでのNext.jsデプロイ時のタグ関連エラー対処法', category: 'Tech', url: 'https://zenn.dev/dev8/articles/error_next_vercel' },
    { date: 'April 20', title: 'JavaScriptとTypeScriptの違い', category: 'Tech', url: 'https://zenn.dev/dev8/articles/typing_js_ts' },
    { date: 'April 20', title: 'ベクター画像とラスター画像の違い', category: 'Tech', url: 'https://zenn.dev/dev8/articles/image_magick' },
    { date: 'April 20', title: 'Gatsby.js 入門', category: 'Tech', url: 'https://zenn.dev/dev8/articles/gatsby_tutorial' }
  ];

  const [copiedMessageId, setCopiedMessageId] = useState(null);

  const handleShareButtonClick = (message) => {
    navigator.clipboard.writeText(message);
    window.location.href = `https://dev8.me#${message}`;
    setCopiedMessageId(message);
  };

  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as='span' className='md:mr-[5px]'>
          {isSelected ? '😎' : '😐'}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  const messages = [
    'I have significantly redesigned this website. I\'ve adopted Chakra UI for the new look.',
    'Hello World',
  ];

  return (
    <div>
      <Tabs variant='enclosed'>
        <TabList>
          <CustomTab>About</CustomTab>
          <CustomTab>Notices</CustomTab>
          <CustomTab>Writings</CustomTab>
          <CustomTab>Contact</CustomTab>
        </TabList>
        <TabPanels className='mt-5'>
          {/* About me */}
          <TabPanel>
            <Heading>About me</Heading>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>What do you usually do?</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>I am developing front-end while attending junior high school.</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>What are you currently developing?</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  I am developing a chat web service called "Nook.dev".
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
          {/* Latest Notices */}
          <TabPanel>
            <Heading>Latest Notices</Heading>
            {messages.map((message, index) => (
            <Card maxW='md' className='mt-10' key={index}>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='/dog.svg' />
                    <Box><Heading size='sm'>dev8</Heading></Box>
                  </Flex>
                  {/* <IconButton
                    variant='ghost'
                    colorScheme='gray'
                    aria-label='See menu'
                    icon={<BsThreeDotsVertical />}
                  /> */}
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>{message}</Text>
              </CardBody>
              <CardFooter justify='space-between' flexWrap='wrap' sx={{'& > button': {minW: '136px',},}}>
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>Like</Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />} onClick={() => handleShareButtonClick(message)}>Share</Button>
              </CardFooter>
            </Card>
            ))}
          </TabPanel>
          {/* Writings */}
          <TabPanel>
            <Heading>Writings</Heading>
            <TableContainer>
              <Table variant='simple' className='mt-5'>
                <Thead>
                  <Tr>
                    <Th>published</Th>
                    <Th>title</Th>
                    <Th isNumeric>type</Th>
                  </Tr>
                </Thead>
                <Tbody>
                {articles.map((article, index) => (
                  <Tr key={index}>
                    <Td>{article.date}</Td>
                    <Td>
                      <Link href={article.url}>{article.title}</Link>
                    </Td>
                    <Td isNumeric>{article.category}</Td>
                  </Tr>
                ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          {/* Contact Us */}
          <TabPanel>
            <Heading>Contact Us</Heading>
            <Alert status='warning' className='rounded-lg mt-5'>
              <AlertIcon />
              The inquiry form is under construction.
            </Alert>
            <FormControl className='mt-5'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' isDisabled/>
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl className='mt-5'>
              <FormLabel>Substance</FormLabel>
              <Textarea placeholder='Enter your message' size='sm' isDisabled/>
            </FormControl>
            <Button type='submit' colorScheme='blue' className='mt-5' isDisabled>Submit</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}