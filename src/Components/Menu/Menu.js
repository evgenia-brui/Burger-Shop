import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #333;
    border-radius: 50%;
    width: 120px;
    hight: 120px;
    animation: spin 2s linear infinite;
`;

// const loader = document.getElementById('loader');
// function showLoadingSpinner() {
//     loader.hidden = false;
//     SectionMenu.hidden = true;
// }

// function removeLoadingSpinner() {
//     if (!loader.hidden){
//         SectionMenu.hidden = false;
//         loader.hidden = true;
//     }
// }

export const Menu = ({ dbMenu }) => {
    
//   const res = useFetch();
//   const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner/>
            {dbMenu ? 
            <>
                <SectionMenu>
                <h2>Бургеры</h2>
                <ListItem 
                    itemList={dbMenu.burger}
                />
                </SectionMenu>
                <SectionMenu>
                    <h2>Закуски / напитки</h2>
                    <ListItem 
                    itemList={dbMenu.other}
                    />
                </SectionMenu>
            </> : 
            <Loader>loading...</Loader>
            }
        </MenuStyled>
    )
};