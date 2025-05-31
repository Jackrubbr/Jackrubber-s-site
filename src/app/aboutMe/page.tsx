"use client"

import { AppShell, Container,Flex, Image, HoverCard} from '@mantine/core';
import NextImage, { StaticImageData } from 'next/image';
import imgPortal from '/src/imgs/Portal.jpg';
import imgPortal2 from '/src/imgs/Portal2.png';



import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { ForwardRefExoticComponent, useEffect, useState } from 'react';

import styles from './page.module.css'
import { title } from 'process';

import { menubar } from '/src/app/functions.tsx'

const siteAboutMeSection = [
  {title: "About Me", text: "questo sito non e' da farsi", titleCoeff: 1}
];

export default function Demo() {
  const [home, setHome] = useState([<></>]);

  const setAboutMeState = () => {
    setHome(siteAboutMeSection.map(el => {
        
        return <div style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%',height:'120px', paddingRight: '50px', paddingLeft: '50px'}}>
          <h1 style={{fontSize:el.titleCoeff*5+20}}>{el.title}</h1>
          <p>{el.text}</p>
        </div>
      } 
    ));
  }

  useEffect(setAboutMeState,[]);
  return (    
    <AppShell bg="black">
      <AppShell.Main>
        <Container p={10} w="100%">
          <Flex direction="row" justify="center" style={{overflowWrap:'break-word'}} gap="xs" w={1000}>
            <Flex direction="column" w="100%" gap="xs">
              {home}
            </Flex>
            <Flex direction="column" w={150} gap="xs">
              {menubar()}
            </Flex>
          </Flex>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}