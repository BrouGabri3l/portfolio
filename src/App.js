import logo from './logo.svg';
import './App.css';
import { Header } from './components/NavBar/header';
import { SideNav } from './components/NavBar/sidenav'
import { ProjectGrid } from './components/Grid/Grid'
import { Container } from './components/Container'
import styled from 'styled-components';

const Grid = styled.div`
  display:grid;
  grid-template-columns:1fr 2fr;
  `
const Item = styled.div`
  max-width: 800px;
  padding:1em;
  p{
    text-align:justify;
    padding:1em;
  }
`
const SobreMim = () => {
  return (
    <Container>
      <h2>Sobre mim</h2>
      <Wrapper>
        <Grid>
          <Item style={{
            backgroundColor: '#f0f'
          }}>
            imagem
          </Item>
          <Item style={{ backgroundColor: '#f00' }}>
            <h3>Gabriel Rodrigues</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat dolores dolor sed veritatis soluta, dignissimos eaque, est voluptatum et unde rerum reprehenderit aperiam consequatur recusandae excepturi ipsam, placeat error.</p>

          </Item>
        </Grid>
      </Wrapper>
    </Container >
  )
}
const Wrapper = styled(Container)`
    padding-top:1em;
    a{
      color: #000;
      padding:5px;
      text-decoration:none;
      font-size:18px;
    }
    span{
      font-size:20px;
      font-weight:bold
    }
`

const Contato = () => {

  return (
    <Container>
      <h2>Contato</h2>
      <Wrapper>
        <span>Envie uma mensagem</span>
        <Wrapper>
          <a href="">Email: gabriel-rodriguesbs@hotmail.com </a>
          <a href="">Github: @BrouGabri3l</a>
          <a href="">Linkedin</a>
        </Wrapper>
      </Wrapper>
    </Container>
  )
}
const Footer = ({ className }) =>
(
  <Container className={className}>
    <span>&copy; Gabriel Rodrigues - 2022</span>
  </Container>
)
const StyledFooter = styled(Footer)`
  color:#fff;
  background-color:#000;

`

function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      < Header />
      <SobreMim />
      <ProjectGrid />
      <Contato />
      <StyledFooter />
    </div >
  );
}

export default App;
