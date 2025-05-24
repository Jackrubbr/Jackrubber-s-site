"use client"

import { AppShell, Box, Center, Container, SimpleGrid, Skeleton, Grid, Flex} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { useState } from 'react';

import styles from './page.module.css'


export default function Demo() {
  return (    
    <AppShell bg="black">
      <AppShell.Main>
        <Container p={10} w="100%">
          <Flex direction="row" justify="center" style={{overflowWrap:'break-word'}} gap="xs">
            <Flex direction="column" w={600} gap="xs">
              <div style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%',height:'120px', color: 'white', paddingRight: '50px', paddingLeft: '50px'}}>
                <h1 style={{color:'#fab005',fontFamily:'Pixel Nes', fontSize:'20px'}}>welcome</h1>
                <h2 style={{color:'white', fontFamily:'MS-UIGothic',fontSize:'15px'}}>ihihihaha</h2>
              </div>
              
            </Flex>
            <Flex direction="column" w={300} gap="xs">
              <div style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%',height:'120px', color: 'white'}}>2</div>
              <div style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%',height:'120px', color: 'white'}}>4</div>
            </Flex>
          </Flex>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}