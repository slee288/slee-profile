import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import TypewriterComponent from 'typewriter-effect';

function AboutMe() {
  return (
    <Container className="bg-primary w-full pt-16 px-8 pb-24">
      <Row className="grid grid-cols-2 max-w-7xl mx-auto">
        <Col className="flex items-center justify-start">
            <div className="relative">
                <img src="../../doodles-items.png" />
                <img className="w-3/5 absolute top-1/3 left-1/2 translate-x-[-50%]" src="../../guy-sleeping.png" />
            </div>
        </Col>
        <Col className="grid font-poppins grid-cols-6">
            <Stack className="col-span-1" />
            <Stack className="col-span-5 text-left text-xl flex flex-col gap-y-4 text-white leading-snug">
                <p className="font-semibold text-6xl">About <span className="text-font-primary">Me</span></p>
                <p>Programming has always challenged me to push my limits in growing both technically and personally.</p>
                <p>As a fullstack developer specializing in <span className="text-font-primary">Javascript / Typescript</span>, my experience primarily involves building web applications with modern tech stacks like <span className="text-font-primary">React.js, Node.js, and Next.js</span></p>
                <p>My area of interest expands to network systems and cybersecurity, now pursuing a Certificate in <span className="text-font-primary">Applied Cybersecurity.</span></p>
                <p>My ultimate goal is to deliver robust and efficient solutions to the best of my ability, while learning from my teammates to become a more versatile developer with every challenge.</p>
            </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;