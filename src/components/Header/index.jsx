import React from 'react';
import { Wrapper, Logo, Info, DownloadBtn, UpdateBtn, UpdatingDate, Date } from './styles.js';
import download from '../../images/download.png';
import update from '../../images/update.png';

function Header() {
    return (
        <Wrapper>
           <Logo>AI Prediction</Logo>
           <Info>
            <UpdatingDate>
                <Date>Last update: 13.03.2024</Date>
                <Date>Date added to the platform: 17.12.2023</Date>
            </UpdatingDate>
            <UpdateBtn>
                <img src={update} alt="" />
                <p>Update</p>
            </UpdateBtn> 
            <DownloadBtn>
                <img src={download} alt="" />
                <p>Download</p>
            </DownloadBtn>
           </Info>
        </Wrapper>
    );
}

export default Header;