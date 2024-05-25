import { TabPanel } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

export default function About() {
    return (
        <TabPanel>
        <VStack className='mb-5'><Heading>About me</Heading></VStack>
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
    )
}