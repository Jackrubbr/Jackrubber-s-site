"use client"

import { AppShell, Container,Flex, Image, HoverCard} from '@mantine/core';
import NextImage, { StaticImageData } from 'next/image';
import imgPortal from '/src/imgs/Games/Portal.jpg';
import imgPortal2 from '/src/imgs/Games/Portal2.png';
import imgDanganronpa from '/src/imgs/Games/Danganronpa.png';
import imgDanganronpa2 from '/src/imgs/Games/Danganronpa2.png';
import imgDanganronpa3 from '/src/imgs/Games/Danganronpa3.png';
import imgIlFuMattiaPascal from '/src/imgs/Books/IlFuMattiaPascal.jpg'
import imgCacciatoreDiAndroidi from '/src/imgs/Books/CacciatoreDiAndroidi.jpg'
import imgIlDesertoDeiTartari from '/src/imgs/Books/IlDesertoDeiTartari.jpg'
import imgOsayumiPunPun from '/src/imgs/Manga/OsayumiPunPun.jpg'
import imgFullmetalAlchemistBrotherhood from '/src/imgs/Anime/FullmetalAlchemistBrotherhood.jpg'
import imgCowboyBebop from '/src/imgs/Anime/CowboyBebop.jpg'
import imgReZero from '/src/imgs/Anime/ReZero.jpg'
import { useEffect, useState } from 'react';
import { menubar } from '@/app/functions';

const siteRecomendationSection = [
  {id:0,title: "Recomendations section", text: "Some recommendations about stuff I like", titleCoeff: 1},
  {id:1,title: "Books", titleCoeff: 0,content: [{id:0,image: imgIlFuMattiaPascal, alt: "Il Fu Mattia Pascal Image", description:"Late Mattia Pascal from Luigi Pirandello"},{id:1,image: imgCacciatoreDiAndroidi, alt: "Cacciatore Di Androidi Image",description:"Do Androids Dream of Electric Sheep? from 	Philip K. Dick"},{id:2,image: imgIlDesertoDeiTartari, alt: "Il Deserto Dei Tartari Image", description:"The Tartar Steppe from Dino Buzzati"}]},
  {id:2,title: "Manga", titleCoeff: 0, content:[{id:0,image: imgOsayumiPunPun, alt: "Osayumi Pun Pun Image", description:"Osayumi Pun Pun from Inio Asano"}]},
  {id:3,title: "Anime", titleCoeff: 0,content:[{id:0,image: imgFullmetalAlchemistBrotherhood, alt: "Fullmetal Alchemist Brotherhood Image", description:"Fullmetal Alchemist Brotherhood"},{id:1,image: imgCowboyBebop, alt: "Cowboy Bebop Image", description:"Cowboy Bebop"},{id:2,image: imgReZero, alt: "Re:Zero Image", description:"Re:Zero"}]},
  {id:4,title: "Games", titleCoeff: 0, content: [{id:0,image: imgPortal, alt: "Portal Image", description:"Portal"},{id:1,image: imgPortal2, alt: "Portal2 Image",description:"Portal 2"},{id:2,image: imgDanganronpa, alt: "Danganronpa Image", description:"Danganronpa"},{id:3,image: imgDanganronpa2, alt: "Danganronpa 2 Image", description:"Danganronpa 2"},{id:4,image: imgDanganronpa3, alt: "Danganronpa 3 Image", description:"Danganronpa 3"}]}
];

export default function Demo() {
  const [home, setHome] = useState<React.JSX.Element[]>([]);

    const setRecommendationState = () => {
    setHome(siteRecomendationSection.map(el => 
      <div key={el.id} id={el.title} style={{border:'2px solid #cc5de8', borderRadius: '5px', width:'100%', paddingRight: '50px', paddingLeft: '50px'}}>
        <h1 style={{fontSize:el.titleCoeff*5+20}}>{el.title}</h1>
        {fillParagraph(el.text)}
        <Flex gap="xs" wrap="wrap">{fillImages(el.content)}</Flex>
      </div>
    ));
  }

  function fillImages(content:{id:number,image:StaticImageData,alt:string,description?:string}[]|undefined)
  {
      if(content != undefined){
        return content.map(el => {
            return fillImage(el.id,el.image,el.alt,el.description)
          })
    }
    return null;
  }

  function fillImage(id:number,image:StaticImageData|undefined, alt:string|undefined,description:string|undefined)
  {
    if(image != undefined && alt != undefined)
    {
      return(
      <HoverCard key={id} closeDelay={1}>
        <HoverCard.Target><Image component={NextImage} src={image} alt={alt} w="auto" h={185} fit="contain" mb={15}/></HoverCard.Target> {/*aggiungere scrollbar cambiare font e colore forse*/}
      <HoverCard.Dropdown c="black" style={{overflowWrap:'break-word'}}>{description}</HoverCard.Dropdown></HoverCard>);
    }
    return null;
  }

  function fillParagraph(text:string|undefined)
  {
    if(text != undefined)
    {
      return <p>{text}</p>;
    }
    return null;
  }

  useEffect(setRecommendationState,[]);
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