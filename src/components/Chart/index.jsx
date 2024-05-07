import React from 'react';
import { Wrapper, Header, CustomChart, Title, Logo, Name, Attributes, Attribute, Image} from './styles.js';
import chart from '../../images/chart.png';
import growthLogo from '../../images/growthLogo.png';
import likeIcon from '../../images/likeIcon.png';
import starsIcon from '../../images/starsIcon.png';
import locationIcon from '../../images/locationIcon.png';

function Chart() {

    return (
        <Wrapper>
            <Header>
                <Title>
                    <Logo src={growthLogo}></Logo>
                    <Name>Growth</Name>
                </Title>
                <Attributes>
                    <Attribute>
                        <Image>
                            <img src={likeIcon} alt="" />
                        </Image>
                        High Trending Chance
                    </Attribute>
                    <Attribute>
                        <Image style={{background: '#00FF94'}}>
                            <img src={starsIcon} alt="" /> 
                            <p>8</p>
                        </Image>
                        Sound assessment from our AI
                    </Attribute>
                    <Attribute>
                        <Image style={{background: '#FFE600'}}>
                            <img src={locationIcon} alt="" /> 25%
                        </Image>
                        Geo Popularity
                    </Attribute>
                </Attributes>
            </Header>
            <CustomChart src={chart} alt=''></CustomChart>
        </Wrapper>
    );
}

export default Chart;