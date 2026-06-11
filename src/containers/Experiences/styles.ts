import styled from 'styled-components'
import { colors } from '../../styles'

const accentGreen = '#13A127'

export const ExperienceContainer = styled.section`
  scroll-margin-top: 100px;
  margin: 160px 0;
  padding: 62px 40px;
  background-color: rgba(28, 28, 28, 0);

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin: 32px 0;
  }
`

export const SectionTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 34px;
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const CompanyList = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`

export const CompanyItem = styled.button<{ active: boolean }>`
  min-width: 200px;
  padding: 14px 28px;
  border-radius: 10px;
  border: ${({ active }) => (active ? `3px solid ${accentGreen}` : '1px solid rgba(255, 255, 255, 0.08)')};
  background: ${({ active }) => (active ? '#ffffff7c' : 'rgba(255, 255, 255, 0.03)')};
  color: ${({ active }) => (active ? '#06120a' : colors.white)};
  cursor: pointer;
  text-align: center;
  transition: background-color 0.15s ease, transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  font-weight: 800;
  box-shadow: ${({ active }) => (active ? `0 6px 20px rgba(19,161,43,0.12)` : 'none')};

  &:hover {
    transform: translateY(-2px);
    border-color: ${accentGreen};
  }
`

export const DetailCard = styled.div`
  background: rgba(1, 4, 10, 0.95);
  box-shadow: 0 0 40px rgba(0, 255, 0, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-height: 360px;

  @media (max-width: 900px) {
    padding: 28px;
  }
`

export const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const DetailTitle = styled.h2`
  font-size: 26px;
  font-weight: 800;
`

export const TitleHighlight = styled.span`
  color: ${accentGreen};
  font-weight: 700;
`

export const DetailPeriod = styled.span`
  color: #a8a8a8;
  font-size: 14px;
`

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const StoryItem = styled.li`
  display: flex;
  gap: 18px;
  align-items: flex-start;
`

export const StoryMarker = styled.span`
  width: 10px;
  min-height: 10px;
  margin-top: 6px;
  border-radius: 50%;
  background: ${accentGreen};
  box-shadow: 0 0 14px rgba(143, 60, 255, 0.4);
`

export const StoryText = styled.p`
  color: ${colors.white};
  line-height: 1.8;
  margin: 0;
  font-size: 16px;
`

export const FooterControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const StepButton = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: ${colors.white};
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(143, 60, 255, 0.25);
    transform: scale(1.05);
  }
`

export const PageIndicator = styled.span`
  color: #c7c7c7;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  flex: 1;
`

export const SiteLink = styled.a`
  color: ${accentGreen};
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid ${accentGreen};
    outline-offset: 2px;
    border-radius: 4px;
  }
`

export const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(19, 161, 43, 0.1);
  border: 1px solid ${accentGreen};
  border-radius: 6px;
  color: ${accentGreen};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(19, 161, 43, 0.2);
    transform: translateY(-1px);
  }
`
