import { SkillCard, SkillGrid, SkillsContainer } from "./styles"
import logo1 from '../../assets/images/icons/Bootstrap.png'
import logo2 from '../../assets/images/icons/Css3_Logo.png'
import logo3 from '../../assets/images/icons/Git.png'
import logo4 from '../../assets/images/icons/Grunt.png'
import logo5 from '../../assets/images/icons/Gulp.png'
import logo6 from '../../assets/images/icons/Html_5.png'
import logo7 from '../../assets/images/icons/Java.png'
import logo8 from '../../assets/images/icons/Js_Squared.png'
import logo9 from '../../assets/images/icons/Learning.png'
import logo10 from '../../assets/images/icons/Node_Js.png'
import logo11 from '../../assets/images/icons/React_Native.png'
import logo12 from '../../assets/images/icons/Redux.png'
import logo13 from '../../assets/images/icons/Sass.png'
import logo14 from '../../assets/images/icons/TypeScript.png'
import logo15 from '../../assets/images/icons/Vuejs.png'

const Skills = () => {
  const data = [
    { id: '1', image: logo1},
    { id: '2', image: logo2},
    { id: '3', image: logo3},
    { id: '4', image: logo4},
    { id: '5', image: logo5},
    { id: '6', image: logo6},
    { id: '5', image: logo5},
    { id: '6', image: logo6},
    { id: '5', image: logo5},
    { id: '6', image: logo6},
    { id: '5', image: logo5},
    { id: '6', image: logo6},
    { id: '5', image: logo5},
    { id: '6', image: logo6},
    { id: '6', image: logo6}
  ]
  return (
    <SkillsContainer>
        <SkillGrid>
          {data.map( (item) => (
            <SkillCard key={item.id}>
              <img src={item.image} alt="" />
            </SkillCard>
          )) }
        </SkillGrid>
        <h1>Habilidades</h1>
    </SkillsContainer>
  )
}

export default Skills