import { Swiper, SwiperSlide } from 'swiper/react';
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
import print07 from '../../assets/images/prints_projects/mock-ReciclaPoa.png'
import { Button, Card, CardDescription, CardImage, CardLinks, Description, MyProjectsContainer, ProjectImage } from './styles';
import { useState, useEffect } from 'react';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

const ProjectCard = ({ project }: { project: typeof data[0] }) => (
  <Card>
    <CardImage>
      <ProjectImage src={project.image} alt={project.title} />
    </CardImage>
    <CardDescription>
      <h2>{project.title}</h2>
      <Description>{project.description}</Description>
      <p>Tecnologias: {project.tecnology}</p>
      <CardLinks>
        <Button>
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Repositório</a>
        </Button>
        <Button>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visitar</a>
        </Button>
      </CardLinks>
    </CardDescription>
  </Card>
);

const data = [
  {
    id: '2',
    title: 'ReciclaPoa',
    image: print07,
    description: 'Esse site foi feito para um cliente chamado ReciclaPoa.',
    tecnology: 'React e Ts',
    repositoryUrl: 'https://github.com/gabrielassenato/reciclapoa',
    liveUrl: 'https://reciclapoaresiduos.com.br/'
  },
  {
    id: '1',
    title: 'Efood',
    image: print01,
    description: 'Esse sistema tem como objetivo simular um delivery de comidas.',
    tecnology: 'React e Ts',
    repositoryUrl: 'https://github.com/gabrielassenato/efood',
    liveUrl: 'https://efood-rosy-ten.vercel.app/'
  },
  {
    id: '3',
    title: 'Sorteador',
    image: print03,
    description: 'Esse programa tem como objetivo sortear um número aleatório.',
    tecnology: 'Js, Html e Less',
    repositoryUrl: 'https://github.com/gabrielassenato/sorteador_grunt',
    liveUrl: 'https://sorteador-grunt-blue.vercel.app/'
  },
  {
    id: '4',
    title: 'Assenato Tattoo',
    image: print04,
    description: 'Esse site tem a finalidade de servir como um portifólio para um tatuador.',
    tecnology: 'Html e Css',
    repositoryUrl: 'https://github.com/yourusername/assenato-tattoo',
    liveUrl: 'https://assenato-tattoo-atualizado.vercel.app/'
  },
  {
    id: '5',
    title: 'Finans',
    image: print05,
    description: 'Esse site apresenta uma instituição financeira fictícia.',
    tecnology: 'Html e Css',
    repositoryUrl: 'https://github.com/gabrielassenato/projeto-site-finans?tab=readme-ov-file',
    liveUrl: 'https://lista-contatos-demo.com'
  },
  {
    id: '7',
    title: 'To Do List',
    image: print02,
    description: 'Esse programa visa criar uma lista simples de afazeres.',
    tecnology: 'Vue, Js e Html',
    repositoryUrl: 'https://github.com/gabrielassenato/to-do-list-vue',
    liveUrl: 'https://to-do-list-vue-omega.vercel.app/'
  },
];

const MyProjects = () => {
  const [slidePerView, setSlidePerView] = useState(3)
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const visibleProjects = isMobile && !showAll ? data.slice(0, 3) : data;

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
      <h1>Meus Projetos</h1>
      {isMobile ? (
        <div>
          {visibleProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {!showAll && data.length > 3 && (
            <Button className="full-width" onClick={() => setShowAll(true)}>Ver mais +</Button>
          )}
          {showAll && data.length > 3 && (
            <Button className="full-width" onClick={() => setShowAll(false)}>Ver menos -</Button>
          )}
        </div>
      ) : (
        <Swiper
          slidesPerView={slidePerView}
          centeredSlides={true}
          loop={true}
          speed={500}
          grabCursor={true}
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <ProjectCard project={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </MyProjectsContainer>
  )
}

export default MyProjects