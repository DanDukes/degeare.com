import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`
export const ProjectImg = styled.img`
  float:right;
  margin-right: 50%;
  @media (max-width: 640px) {
    margin-right: 0;
  }
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }
`