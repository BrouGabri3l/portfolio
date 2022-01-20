import { NavContainer, NavItem } from '../styled/styledHeader'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Navigator = (props) => {
    return (
        <>
            <NavContainer direction={props.direction}>
                <NavItem href="https://google.com">Sobre Mim</NavItem>
                <NavItem>Projetos</NavItem>
                <NavItem>Contato</NavItem>
            </NavContainer>
            <NavContainer >
                <FaInstagram />
                <FaFacebook />
                <FaGithub />
                <FaLinkedin />
            </NavContainer>
        </>
    )
}