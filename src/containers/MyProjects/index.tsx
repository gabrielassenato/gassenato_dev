import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

import print01 from '../../assets/images/prints_projects/mock-efood2.png'
import print02 from '../../assets/images/prints_projects/mock-toDoList.png'
import print03 from '../../assets/images/prints_projects/mock-sorteador.png'
import print04 from '../../assets/images/prints_projects/mock-tattoo.png'
import print05 from '../../assets/images/prints_projects/mock-finans.png'
import print06 from '../../assets/images/prints_projects/mock-contatos2.png'
import { Button, Card, CardDescription, CardImage, CardLinks, MyProjectsContainer, ProjectImage } from './styles';
import { useState, useEffect } from 'react';


const MyProjects = () => {
  const [slidePerView, setSlidePerView] = useState(3)
  const data = [
    { id: '1', title: 'Efood', image: print01, tecnology: 'React, Java e Ts'},
    { id: '2', title: 'Efood1', image: print02, tecnology: 'React,  Ts'},
    { id: '3', title: 'Efood2', image: print03, tecnology: 'Reaa e Ts'},
    { id: '4', title: 'Efood3', image: print04, tecnology: 'Ts'}
  ]

  useEffect(() => {
    function handleResize(){
      if(window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (

  <MyProjectsContainer>
  <h1>Projetos</h1>
    <Swiper
        spaceBetween={10}
        slidesPerView={slidePerView}
        centeredSlides={true}
        loop={true}
        speed={500}
        grabCursor={true}
      >
        {data.map( (item) => (
        <SwiperSlide key={item.id}>
          <Card>
            <CardImage>
              <ProjectImage src={item.image} alt="" />
            </CardImage>
            <CardDescription>
              <h2>{item.title}</h2>
              <p>
                Tecnologias: {item.tecnology}
              </p>
            </CardDescription>
            <CardLinks>
              <Button>
                <a href="#">Acessar</a>
                </Button>
              <Button>
                <a href="#">Visitar</a>
              </Button>
            </CardLinks>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
</MyProjectsContainer>
  )
}

export default MyProjects