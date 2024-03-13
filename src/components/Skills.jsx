import react from '../assets/react.svg';
import backend from '../assets/backend.svg';
import github from '../assets/github.svg';
const skills = [
  {
    title: 'Frontend',
    description:
      'Although I have a strong focus on the backend, I love to work with the frontend as well.',
    options: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next',
      'Tailwind',
      'Bootstrap',
      'Material UI',
      'Styled Components',
    ],
    img: react,
    alt: 'Frontend',
  },
  {
    title: 'Backend',
    description:
      'Excited to work with databases and build scalable and secure RESTful APIs.',
    options: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'RESTful APIs',
      'GraphQL',
      'Nextjs',
    ],
    img: backend,
    alt: 'Backend',
  },
  {
    title: 'DevOps',
    description:
      'As a DevOps Specialist, I love to work and develop CI/CD pipelines and work with cloud services.',
    options: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Google Cloud Platform',
      'Azure',
      'CI/CD',
      'Terraform',
      'Ansible',
      'Jenkins',
    ],
    img: github,
    alt: 'DevOps',
  },
];

function Options({ options }) {
  return (
    <>
      {options.map((option) => (
        <span
          key={option.title}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          #{option}
        </span>
      ))}
    </>
  );
}

function Skill({ skill }) {
  return (
    <>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-secondary flex flex-col justify-center items-center pt-6 mb-11">
          <img className="w-32 " src={skill.img} alt={skill.alt} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{skill.title}</div>
            <p className="text-gray-700 text-base">{skill.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Options options={skill.options} />
          </div>
        </div>
      </div>
    </>
  );
}

function SkillsList({ skills }) {
  return (
    <>
      <div>
        <div className="border-t-2 pt-20 border-primary border-b-2 pb-10 mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">
            My Skills Set
          </h2>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill) => (
              <Skill key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <SkillsList skills={skills} />
    </>
  );
}

export default Skills;
