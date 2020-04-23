import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectImg, ProjectItem, ProjectTitle, SkillContainer} from './styles';





const Projects = ({ user }) => {

  return (
    <Layout user={user}>
    {console.log(user.projects)}
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectImg src={project.images[0].resolutions.thumbnail.url} />
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <a href={project.website}>Deployed</a>
              <br />
              <br />
              <a href={project.githubUrl}>Github</a>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer> 
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;