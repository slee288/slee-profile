import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import TypewriterComponent from 'typewriter-effect';

function Header() {
  return (
    <Container className="w-full pt-16 px-8 pb-24">
      <Row className="grid grid-cols-2 max-w-7xl mx-auto">
        <Col className="grid font-poppins grid-rows-5">
            <Stack className="row-span-1" />
            <Stack className="row-span-4 text-left text-5xl flex flex-col gap-y-8">
                <p>Hello!</p>
                <p>I'm <span className="text-font-primary">Sang Min Lee</span></p>
                <div className="text-font-primary leading-tight pt-8">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Fullstack Developer",
                                "Typescript / Javascript Expert",
                                "React.js / Next.js / Node.js Developer",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
                
            </Stack>
        </Col>
        <Col className="flex items-center justify-end">
            <div className="relative">
                <img src="../../doodles-mixed-round.png" />
                <img className="w-3/5 absolute top-1/2 left-1/3 translate-x-[-50%]" src="../../guy-coding.png" />
            </div>
            
        </Col>
      </Row>
    </Container>
  );
}

export default Header;