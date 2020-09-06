import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    padding-left: 15px;
    padding-right: 25px;
    background-color: #299B01;
    color: white;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const SignImg = styled.img`
    width: 50px;
`;

const Sign = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: white;
    font-size: 16px;
`;

const User = styled.div`
    display: flex;
    align-item: center;
    text-align: center;
`;

const LogOut = styled.span`
    font-size: 20px;
    font-weight: 700px;
    cursor: pointer;
    margin-right: 30px;
`;

const Figure = styled.figure`
    margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>BoorgerShop</H1>
        </Logo>
        {authentication ? 
            <User>
                <Figure>
                    <SignImg src={signImg} alt={authentication.displayName}/>
                    <figcaption>{authentication.displayName}</figcaption>
                </Figure>
                <LogOut title="Выйти" onClick={logOut}>X</LogOut>
            </User> : 
            <Sign onClick={logIn}>
                <Figure>
                    <SignImg src={signImg} alt="войти"/>    
                    <figcaption>Войти</figcaption>
                </Figure>
            </Sign> 
            }
    </NavBarStyled>
);