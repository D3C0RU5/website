import { Background, Divider, Img } from './styles'

const Skills: React.FC = () => {
  const skills = [
    {
      img: 'images/tools/html.webp',
      title: 'HTML5',
    },
    {
      img: 'images/tools/css.webp',
      title: 'CSS3',
    },
    {
      img: 'images/tools/js.webp',
      title: 'JavaScript',
    },
    {
      img: 'images/tools/tailwind.webp',
      title: 'Tailwindcss',
    },
    {
      img: 'images/tools/react.webp',
      title: 'ReactJS',
    },
    {
      img: 'images/tools/next.webp',
      title: 'NextJS',
    },
    {
      img: 'images/tools/typescript.webp',
      title: 'TypeScript',
    },
    {
      img: 'images/tools/nodejs.webp',
      title: 'NodeJS',
    },
    {
      img: 'images/tools/mongodb.webp',
      title: 'MongoDB',
    },
    {
      img: 'images/tools/git.webp',
      title: 'Git',
    },
    {
      img: 'images/tools/github.webp',
      title: 'GitHub',
    },
    {
      img: 'images/tools/jest.webp',
      title: 'TDD,Jest',
    },
  ]

  return (
    <Background className="py-5 p-md-5 d-flex align-items-center">
      <div className="container">
        <div className="col">
          <div className="fs-3 text-center mb-2" style={{ fontWeight: 600 }}>
            MY SKILLS
          </div>
          <div className="description text-center fs-6">
            See some of the tools i use to bring excellent solutions to life
          </div>
          <Divider />
          <div className="row mt-4">
            {skills.map((s, key) => (
              <div
                key={key}
                className="col col-6 col-md-2 text-center px-4 py-2"
              >
                <Img src={s.img} />
                <div className="text-center my-2" style={{ fontWeight: 600 }}>
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Background>
  )
}

export default Skills
