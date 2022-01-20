import styled from "styled-components"
import imagem from '../../img/xps-EzYq1HOl5_8-unsplash.jpg'
import { Container } from '../Container'
const Grid = styled.div`
    padding-top:2em;
    width:66vw;
    max-width:1000px;
    display:grid;
    justify-items:center;
    align-items:center;
    justify-content:center;
    align-content:center;
    gap:20px;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
`

const Card = styled.div`
    min-width:150px;
    max-width:300px;
    background-color:#f3e4e5;
    padding:1em;
    span{
        text-transform:capitalize;
        font-weight: bold;
        font-size:18px;
    }
`
const Btn = styled.button`
    background-color:#000;
    color:#fff;
    padding:8px 32px;
    font-family:"Roboto";
    text-transform:uppercase;
    transition:0.2s ease-in-out;
    text-decoration:none;
    font-size:14px;
    &:hover{
        color:#000;
        background-color:#fff;
    }

`
const CardItem = props => (
    <Card>
        <span>{props.title}</span>
        <div style={{ width: '100%' }}>
            <img style={{ width: '80%', height: "auto", padding: '10px 0', }} src={props.img} alt="" />
        </div>
        <Btn as='a' href={props.link}>Clique</Btn>
    </Card>
)
export const ProjectGrid = () => {
    return (
        <Container>
            <h2>Projetos</h2>
            <Grid>
                <CardItem title='projeto' img={imagem}></CardItem>
                <CardItem title='projeto' img={imagem}></CardItem>
                <CardItem title='projeto' img={imagem}></CardItem>
                <CardItem title='projeto' img={imagem}></CardItem>
                <CardItem title='projeto' img={imagem}></CardItem>
                <CardItem title='projeto' img={imagem}></CardItem>
            </Grid>
        </Container>
    )
}