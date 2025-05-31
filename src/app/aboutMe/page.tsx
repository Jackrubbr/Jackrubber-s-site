"use client"

import { AppShell, Container,Flex} from '@mantine/core';
import { useEffect, useState } from 'react';
import { menubar } from '@/app/functions';


const siteAboutMeSection = [
  {title: "About Me", text: "Giacomo Bellini \n student", titleCoeff: 1}
];

export default function Demo() {
  const [home, setHome] = useState<React.JSX.Element[]>([]);

  const setAboutMeState = () => {
    setHome(siteAboutMeSection.map(el => {
        
        return <div key={el.title} style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%',height:'120px', paddingRight: '50px', paddingLeft: '50px'}}>
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