import ProjectBox from '../../components/ProjectBox/ProjectBox.jsx';
import project from '../../components/ProjectBox/project.json';

export default function Projects() {
  return (
    <>
      <ul>
        {project.map((profile, i) => {
          return (
            <li key={i}>
              {' '}
              <ProjectBox {...profile} />{' '}
            </li>
          );
        })}
      </ul>
    </>
  );
}
