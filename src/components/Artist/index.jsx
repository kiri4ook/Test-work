import React from 'react';
import { 
    Wrapper, 
    MainInfo, 
    PopularityInfo, 
    InfoBlock,
    Block1,
    Block2,
    Logo,
    Name,
    Type,
    Key,
    Value,
    Image,
    Icons,
    Trending,
    Location,
    SoundTextBtn,
    KeywordsBlock,
    Keyword,
    VideosInfo, 
    VideosIcon, 
    Subscribers, 
    VideoBtn, 
    GrowthInfo, 
    GrowthTitle, 
    GrowthCount
} from './styles.js';
import videosIcon from '../../images/videosIcon.png';
import playIcon from '../../images/playIcon.png';
import logoSound from '../../images/logoSound.png';
import spotify from '../../images/spotify.png';
import apple_music from '../../images/apple_music.png';
import tiktok from '../../images/tiktok.png';
import bitrate from '../../images/bitrate.png';
import Canada from '../../images/Canada.png';

function ArtistInfo() {
    return (
        <Wrapper>
           <MainInfo>
                <InfoBlock>
                    <Block1>
                        <Logo>
                            <img src={logoSound} alt="" />
                        </Logo>
                        <Name>
                            <p>Official Artist</p>
                            <p>Khabane Lame</p>
                            <p>Melodic sound</p>
                            <Type>
                                <p>Type: </p>
                                <p>ORIGINAL</p>
                            </Type>
                            <Icons>
                                <img src={spotify} alt="" />
                                <img src={apple_music} alt="" />
                                <img src={tiktok} alt="" />
                            </Icons>
                        </Name>
                    </Block1>
                    <Block2>
                        <Trending>
                            <p>🔥🔥🔥 Trending</p>
                            <div>
                                <Key>Duration:</Key>
                                <Value>00:45</Value>
                            </div>
                            <div>
                                <Key>Bitrate:</Key>
                                <Value>
                                    <img src={bitrate} alt="" />
                                </Value>
                            </div>
                        </Trending>
                        <Location>
                            <div>
                                <Key>Country:</Key>
                                <Value>Canada   
                                    <Image src={Canada} alt="" />
                                </Value>
                            </div>
                            <div>
                                <Key>Place in the country:</Key>
                                <Value>05</Value>
                            </div>
                            <div>
                                <Key>Place in the world:</Key>
                                <Value>43</Value>
                            </div>
                            <SoundTextBtn>
                                <p>A</p>
                                <p>Sound to text</p>
                            </SoundTextBtn>
                        </Location>
                    </Block2>
                </InfoBlock>
                <KeywordsBlock>
                    <Key>Keywords:</Key>
                    <Keyword>Whispering breeze</Keyword>
                    <Keyword>Wandering soul</Keyword>
                    <Keyword>Crimson dawn</Keyword>
                    <Keyword>Echoes of silence</Keyword>
                </KeywordsBlock>
           </MainInfo>
           <PopularityInfo>
                <VideosInfo>
                    <VideosIcon src={videosIcon} alt="" />
                    <Subscribers>1.8M</Subscribers>
                    <VideoBtn>
                        <img src={playIcon} alt="" />
                        <p>Watch Videos</p>
                    </VideoBtn>
                </VideosInfo>
                <GrowthInfo>
                    <GrowthTitle>Daily Growth</GrowthTitle>
                    <GrowthCount>+100k</GrowthCount>
                </GrowthInfo>
           </PopularityInfo>
        </Wrapper>
    );
}

export default ArtistInfo;