import React from 'react';
import { Wrapper, Title, Logo, Name, NotifyWrapper, NotifyBtn} from './styles.js';
import relatedLogo from '../../images/relatedLogo.png';
import bellIcon from '../../images/bellIcon.png';


function RelatedSounds() {

    return (
        <Wrapper>
            <Title>
                <Logo src={relatedLogo}></Logo>
                <Name><span style={{color: '#D1FD0A'}}>Related</span> Sounds</Name>
            </Title>  
            <NotifyWrapper>
                <img src={bellIcon} alt="" />
                <p>Notify me when these features start working</p>
                <NotifyBtn>Notify Me</NotifyBtn>
            </NotifyWrapper>  
        </Wrapper>
    );
}

export default RelatedSounds;