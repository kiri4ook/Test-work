import React from 'react';
import { Wrapper, Title, Logo, Name, ProgressWrapper} from './styles.js';
import audienceLogo from '../../images/audienceLogo.png';
import chairIcon from '../../images/chairIcon.png';
import boomboxIcon from '../../images/boomboxIcon.png';
import performanceIcon from '../../images/performanceIcon.png';
import soccerIcon from '../../images/soccerIcon.png';
import healthIcon from '../../images/healthIcon.png';
import beachIcon from '../../images/beachIcon.png';
import otherIcon from '../../images/otherIcon.png';
import ProgressBar from '../ProgressBar';

function SoundAudience() {

    return (
        <Wrapper>
            <Title>
                <Logo src={audienceLogo}></Logo>
                <Name>Sound Audience</Name>
            </Title>    
            <ProgressWrapper>
                <ProgressBar name={'Beauty'} image={chairIcon} progress={40}></ProgressBar>
                <ProgressBar name={'Show'} image={performanceIcon} progress={14}></ProgressBar>
                <ProgressBar name={'Music'} image={boomboxIcon} progress={31}></ProgressBar>
                <ProgressBar name={'Sport'} image={soccerIcon} progress={12}></ProgressBar>
                <ProgressBar name={'Travel'} image={beachIcon} progress={22}></ProgressBar>
                <ProgressBar name={'Health'} image={healthIcon} progress={9}></ProgressBar>
                <ProgressBar name={'Other'} image={otherIcon} progress={6}></ProgressBar>
            </ProgressWrapper>
        </Wrapper>
    );
}

export default SoundAudience;