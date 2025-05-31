"use client"

import { AppShell, Container,Flex,Center,Image} from '@mantine/core';
import {useEffect, useState } from 'react';
import { menubar } from '@/app/functions';
import Link from 'next/link';
import NextImage from 'next/image';
import imgTitle from '/src/imgs/Title.png';


function hyperlink(a:string|null,href:string) {
  // if(a!=null) { return <a href={href} style={{color:'#fab005',fontSize:'20px'}}>{a}</a> }
  if(a!=null) { return <Link href={href} style={{color:'#fab005',fontSize:'20px'}}>{a}</Link> }
  return null
}

function projectsContent(content:{id:number,a:string|null,descritpion:string,href:string}[]|undefined): React.JSX.Element[]|null
{
  if (content !=  undefined){
    return  content.map( el =>
      <Flex gap="xs" direction="row" align="center" key={el.id}>
        {hyperlink(el.a,el.href)}
        <p>{el.descritpion}</p>
      </Flex>
    )}
  return null
}

const siteHomeSection = [
  {id:0,title: "Welcome", content: [{id:0,a:null, descritpion:"Sito di Bellini Giacomo", href:"#"}], titleCoeff: 1},
  {id:1,title: "Blog", content: [{id:0,a:null, descritpion:"Ancora niente", href:"#"}], titleCoeff: 0},
  {id:2,title: "Projects", content: [{id:0,a:"EEG",descritpion:"--- work in progress", href:"#"}], titleCoeff: 0,},
];


export default function Demo() {
  const [home, setHome] = useState<React.JSX.Element[]>([]);

  const setHomeState = () => {
    setHome(siteHomeSection.map(el =>
      <div key={el.id} id={el.title} style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%',height:'auto', paddingRight: '50px', paddingLeft: '50px'}}>
        <h1 style={{fontSize:el.titleCoeff*5+20}}>{el.title}</h1>
        {projectsContent(el.content)}
      </div>
    ));
  }
  

  useEffect(setHomeState,[]);
  return (    
    <AppShell bg="black">
      <AppShell.Main>
        <Center><Image component={NextImage} src={imgTitle} alt={"Titel"} w="auto" h={80} fit="contain" mt={15}/></Center>
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