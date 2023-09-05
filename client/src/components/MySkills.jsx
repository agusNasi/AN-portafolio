import Carousel from 'react-bootstrap/Carousel';
import Skill from './Skill';

function MySkills() {
  return (
    <>
      <div className="header">
        <h1>My Skills</h1>
      </div>
      <Carousel variant="dark" indicators={false} interval={null}>
        <Carousel.Item>
          <div className="inner">
            <div className="container">
              <Skill src={'img/html-logo.svg'} title={'HTML'} />
              <Skill src={'img/css-logo.svg'} title={'CSS'} />
              <Skill src={'img/javascript-logo.svg'} title={'JavaScript'} />
              <Skill src={'img/reactJS-logo.svg'} title={'React JS'} />
              <Skill src={'img/sass-logo.svg'} title={'SASS'} />
              <Skill src={'img/bootstrap.png'} title={'Bootstrap'} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="inner">
            <div className="container">
              <Skill src={'img/mongoDB.png'} title={'MongoDB'} />
              <Skill src={'img/nodejs.png'} title={'Node JS'} />
              <Skill src={'img/express-js.png'} title={'express JS'} />
              <Skill src={'img/vite-logo.png'} title={'VITE'} />
              <Skill src={'img/git-logo.svg'} title={'GIT'} />
              <Skill src={'img/GitHub_logo.png'} title={'GitHub'} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default MySkills;
