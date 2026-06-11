import { useState } from 'react'
import {
  CompanyItem,
  CompanyList,
  DetailCard,
  DetailHeader,
  DetailList,
  DetailPeriod,
  DetailTitle,
  ExperienceContainer,
  ExperienceContent,
  ProjectLink,
  ProjectsList,
  SectionTitle,
  SiteLink,
  StoryItem,
  StoryMarker,
  StoryText,
  TitleHighlight
} from './styles'

const experiences = [
  {
    id: '1',
    company: 'Onea Company',
    site: 'onea.tec.br',
    role: 'Desenvolvedor Backend (PJ)',
    period: 'Nov 2024 - Jan 2026',
    details: [
      'Desenvolvimento de APIs RESTful em NestJS para sistemas de monitoramento em tempo real, garantindo escalabilidade e segurança com JWT.',
      'Implementação de comunicação em tempo real via WebSockets para atualização instantânea de dados.',
      'Integração de serviços com MQTT para processamento assíncrono e confiável de eventos.',
      'Autenticação e controle de acesso utilizando JWT e boas práticas de segurança.',
      'Participação em reuniões de equipe e organização de entregas seguindo metodologias ágeis.'
    ]
  },
  {
    id: '2',
    company: 'Franck Comunicação',
    site: 'franckcomunica.vercel.app',
    role: 'Desenvolvedor Front-end (Freelance)',
    period: 'Dez 2023 - atual',
    projects: [
      { name: 'ReciclaPoa', url: 'reciclapaoresiduos.com.br' },
      { name: 'Raise Engenharia', url: 'raise.eng.br' },
      { name: 'Yrai', url: 'yrai.com.br' }
    ],
    details: [
      'Criação de interfaces responsivas que aumentaram performance e acessibilidade, utilizando React e Styled Components.',
      'Colaboração com designers para transformar protótipos em aplicações funcionais e alinhadas ao UX.',
      'Manutenção de boas práticas de versionamento com Git e publicação via GitHub.',
      'Desenvolvimento focado em performance, acessibilidade e usabilidade.',
      'Participação em diversos projetos web e mobile com requisitos complexos.'
    ]
  }
]

const Experiences = () => {
  const [selectedId, setSelectedId] = useState(experiences[0].id)
  const selectedExperience = experiences.find((item) => item.id === selectedId) ?? experiences[0]

  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Experiência</SectionTitle>
      <ExperienceContent>
        <CompanyList>
          {experiences.map((item) => (
            <CompanyItem
              key={item.id}
              active={item.id === selectedId}
              onClick={() => setSelectedId(item.id)}
            >
              <strong>{item.company}</strong>
            </CompanyItem>
          ))}
        </CompanyList>

        <DetailCard>
          <DetailHeader>
            <DetailTitle>{selectedExperience.role}</DetailTitle>
            <TitleHighlight>{selectedExperience.company}</TitleHighlight>
            <SiteLink href={`https://${selectedExperience.site}`} target="_blank" rel="noopener noreferrer">
              {selectedExperience.site}
            </SiteLink>
            <DetailPeriod>{selectedExperience.period}</DetailPeriod>
          </DetailHeader>

          <DetailList>
            {selectedExperience.details.map((detail, index) => (
              <StoryItem key={index}>
                <StoryMarker />
                <StoryText>{detail}</StoryText>
              </StoryItem>
            ))}
          </DetailList>

          {selectedExperience.projects && selectedExperience.projects.length > 0 && (
            <ProjectsList>
              {selectedExperience.projects.map((project) => (
                <ProjectLink
                  key={project.url}
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name} ↗
                </ProjectLink>
              ))}
            </ProjectsList>
          )}
        </DetailCard>
      </ExperienceContent>
    </ExperienceContainer>
  )
}

export default Experiences
