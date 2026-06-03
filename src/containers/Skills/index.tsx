import { useState } from "react";
import { SkillCard, SkillGrid, SkillsContainer, SkillDetails } from "./styles";
import logo1 from "../../assets/images/icons/Bootstrap.png";
import logo2 from "../../assets/images/icons/Css3_Logo.png";
import logo3 from "../../assets/images/icons/Git.png";
import logo4 from "../../assets/images/icons/Grunt.png";
import logo5 from "../../assets/images/icons/Gulp.png";
import logo6 from "../../assets/images/icons/Html_5.png";
import logo7 from "../../assets/images/icons/Java.png";
import logo8 from "../../assets/images/icons/Js_Squared.png";
import logo9 from "../../assets/images/icons/Learning.png";
import logo10 from "../../assets/images/icons/Node_Js.png";
import logo11 from "../../assets/images/icons/React_Native.png";
import logo12 from "../../assets/images/icons/Redux.png";
import logo13 from "../../assets/images/icons/Sass.png";
import logo14 from "../../assets/images/icons/TypeScript.png";
import logo15 from "../../assets/images/icons/Vuejs.png";

const skillsData = [
  { id: "1", image: logo1, title: "Bootstrap", description: "Framework CSS para desenvolvimento rápido e responsivo." },
  { id: "2", image: logo2, title: "CSS3", description: "Linguagem de estilização para páginas da web." },
  { id: "3", image: logo3, title: "Git", description: "Sistema de controle de versão distribuído." },
  { id: "4", image: logo4, title: "Grunt", description: "Ferramenta JavaScript para automação de tarefas." },
  { id: "5", image: logo5, title: "Gulp", description: "Automação de tarefas com JavaScript." },
  { id: "6", image: logo6, title: "HTML5", description: "Linguagem de marcação para criação de páginas web." },
  { id: "7", image: logo7, title: "Java", description: "Linguagem de programação popular para desenvolvimento backend e mobile." },
  { id: "8", image: logo8, title: "JavaScript", description: "Linguagem de programação para web." },
  { id: "9", image: logo9, title: "Aprendizado Contínuo", description: "Habilidade de sempre buscar conhecimento e evoluir profissionalmente." },
  { id: "10", image: logo10, title: "Node.js", description: "Ambiente de execução para JavaScript no backend." },
  { id: "11", image: logo11, title: "React Native", description: "Framework para desenvolvimento de apps móveis com React." },
  { id: "12", image: logo12, title: "Redux", description: "Biblioteca para gerenciamento de estado em aplicações React." },
  { id: "13", image: logo13, title: "Sass", description: "Pré-processador CSS que adiciona recursos avançados à estilização." },
  { id: "14", image: logo14, title: "TypeScript", description: "Superset do JavaScript que adiciona tipagem estática." },
  { id: "15", image: logo15, title: "Vue.js", description: "Framework progressivo para construção de interfaces web." },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <SkillsContainer id="skills" expanded={selectedSkill !== null}>
      <h1>Habilidades</h1>
      <h2>* clique na iamgem para ver a descrição *</h2>
      <SkillGrid>
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.id}
            onClick={() =>
              setSelectedSkill(selectedSkill === skill.id ? null : skill.id)
            }
          >
            <img src={skill.image} alt={skill.title} />
          </SkillCard>
        ))}
      </SkillGrid>

      {/* Exibir detalhes da skill selecionada com transição */}
      <SkillDetails className={selectedSkill ? "expanded" : ""}>
        {selectedSkill && (
          <>
            <h2>{skillsData.find((skill) => skill.id === selectedSkill)?.title}</h2>
            <p>{skillsData.find((skill) => skill.id === selectedSkill)?.description}</p>
            <button onClick={() => setSelectedSkill(null)}>Fechar</button>
          </>
        )}
      </SkillDetails>
    </SkillsContainer>
  );
};

export default Skills;
