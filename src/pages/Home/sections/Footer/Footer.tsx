import React from "react";
import {
    FooterContainer,
    FooterContent,
    Column,
    Title,
    Menu,
    MenuItem,
    CustomizedLink,
    Image,
    SocialsList,
    SocialIcon,
    IconLink,
    Copyright,
} from "./styles.ts";
import { Link } from "react-router-dom";

import logo from "../../../../assets/images/chemicalLogoAlex.png";
import SiteSeguro from "../../../../assets/images/site-protegido.webp";

import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

interface CustomLink {
    label: string;
    targetBlank?: boolean;
    href: string;
}

export interface WidgetFooterMenu {
    id: string;
    title: string;
    menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
    {
        id: "1",
        title: "Contato",
        menus: [
            { href: "/contact", label: "ENTRE EM CONTATO"},
            { href: "#", label: "(11) 4109-6235"},
            { href: "https://wa.me/87981157269", label: "+55 (87) 98115-7269"},
            { href: "mailto: alexjose68@hotmail.com", label: "email: alex@heisenberg.com"},
        ],
    },
    {
        id: "2",
        title: "Localização",
        menus: [
            { href: "https://www.google.com.br/maps/place/Av.+Humberto+de+Alencar+Castelo+Branco+-+Alves+Dias,+S%C3%A3o+Bernardo+do+Campo+-+SP/@-23.7164415,-46.5885768,16.25z/data=!4m6!3m5!1s0x94ce43ee4d27dc6f:0x6617db7636183f88!8m2!3d-23.7163259!4d-46.5848744!16s%2Fg%2F1ymx0nh0w?entry=ttu", label: "Av. Humberto de Alencar Castelo Branco, S/N. Alves Dias, SBC - SP"},
            { href: "https://www.google.com.br/maps/place/Av.+Paulista,+1754+-+189+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP,+01310-200/@-23.5599133,-46.6593301,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce59cc11b3304b:0x4e73dc20f448dede!8m2!3d-23.5599182!4d-46.6567552?entry=ttu", label: "Av. Paulista 1754 - conj 189"},
            { href: "https://www.google.com.br/maps/place/Av.+Le%C3%A3o+Dourado,+680+-+Caiuca,+Caruaru+-+PE,+55034-190/@-8.2875222,-35.9884435,18.25z/data=!4m6!3m5!1s0x7a98b9a6a0dcdf3:0xe25a7edc815c9951!8m2!3d-8.2877213!4d-35.9876482!16s%2Fg%2F11j0tb2lm9?entry=ttu", label: "Av. Leão Dourado, S/N. Vila Kennedy, Caruaru - PE"},
        ],
    },
    {
        id: "3",
        title: "Sobre Nós",
        menus: [
            { href: "#", label: "Condições Gerais" },
            { href: "#", label: "Política de Privacidade" },
            { href: "#", label: "Cookies" },
        ],
    },
];

const Footer: React.FC = () => {
    const renderWidgetMenuItem = (menu: WidgetFooterMenu) => (
        <Column key={menu.id}>
            <Title>{menu.title}</Title>
            <Menu>
                {menu.menus.map((item, index) => (
                    <MenuItem key={index}>
                        <CustomizedLink
                          href={item.href}
                          textDecoration="none"
                          color="#fff"
                          fontSize="inherit">
                            {item.label}
                        </CustomizedLink>
                    </MenuItem>
                ))}
            </Menu>
            {menu.id === "1" && (
                <Title>
                    <a href="/dashboard" style={{textDecoration: 'None', color: 'white'}}>
                        Blog
                    </a>
                </Title>
            )}
            {/* Adicione a imagem apenas para o item "Sobre Nós" */}
            {menu.title === "Sobre Nós" && (
                <Image
                src={SiteSeguro}
                alt="Site Protegido"
                style={{ width: "70%" }}/>
            )}
        </Column>
    );

    return (
        <FooterContainer>
            <FooterContent>
                <Column>
                    <Image src={logo} alt="Logo Chemical Alex" />
                    <SocialsList>

                        <SocialIcon>
                            <IconLink href="https://github.com/alexdev613" target="_blank">
                              <FaGithub />
                            </IconLink>
                        </SocialIcon>

                        <SocialIcon>
                            <IconLink href="https://www.linkedin.com/in/alex-nascimento-b818b694/" target="_blank">
                              <FaLinkedinIn />
                            </IconLink>
                        </SocialIcon>

                        <SocialIcon>
                            <IconLink href="https://instagram.com/alexnascimento613" target="_blank">
                                <FaInstagram />
                            </IconLink>
                        </SocialIcon>

                        <SocialIcon>
                            <IconLink href="https://youtube.com/" target="_blank">
                                <FaYoutube />
                            </IconLink>
                        </SocialIcon>
                    </SocialsList>
                </Column>
                {widgetMenus.map(renderWidgetMenuItem)}
            </FooterContent>
            <Copyright>
                <span>
                    Copyright © 2009 - 2024 AlexHeisenberg Operating Company. Todos os direitos reservados.
                    A marca nominativa AlexHeisenberg é uma marca registrada globalmente.
                </span>
                <p>
                    O uso deste site está sujeito aos termos de uso expressos. Ao usar este
                    site, você concorda em estar vinculado por estes
                </p>
                <CustomizedLink
                    href="#"
                    textDecoration="underline"
                    color="#FFF"
                    fontSize="0.825rem"
                >
                        <Link to="/serviceterms" style={{ color: "inherit" }}>Termos de Serviço Universal</Link>
                </CustomizedLink>
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
