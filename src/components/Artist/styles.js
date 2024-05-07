import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`;

export const MainInfo = styled.div`
    width: 800px;
    height: 240px;
    padding: 27px 40px 0 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #131314;
`;

export const PopularityInfo = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    background-color: #3539d7;
`;

export const InfoBlock = styled.div`
    height: 190px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Block1 = styled.div`
    width: 232px;
    display: flex;
`;

export const Block2 = styled.div`
    width: 340px;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    height: 80px;
`;

export const Name = styled.div`
    width: 142px;
    height: 133px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    & p:first-of-type{
        font-size: 12px;
        font-weight: 700;
        margin: 0;
        color: #8E8F92;
    }

    & p{
        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
        margin: 0;
        margin-top: 3px;
    }

    & p:last-of-type{
        font-size: 14px;
        font-weight: 600;
        color: #FFFFFF;
        margin: 0;
        margin-top: 6px;

    }
`;

export const Type = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    
    & p:first-of-type{
        margin: 0;
        font-size: 12px;
        font-weight: 600;
        color: #8E8F92;
    }

    & p:last-of-type{
        margin: 0;
        width: 85px;
        height: 24px;
        text-align: center;
        line-height: 25px;
        background-color: #274591; 
        font-size: 10px;
        font-weight: 700;
        color: #6993FF;
        margin-left: 5px;
        border-radius: 20px;
    }
`;

export const Key = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #8E8F92;
    margin: 0;
    margin-right: 10px;
`;

export const Image = styled.img`
    margin-left: 10px;
`;

export const Value = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    margin: 0;
`;


export const Icons = styled.div`
    display: flex;
    margin-top: 8px;

    & img{
        margin-right: 5px;
    }
`;

export const Trending = styled.div`
    width: 116px;
    height: 79px;
    display: flex;
    flex-direction: column;

    & p{
        font-size: 12px;
        font-weight: 600;
        color: #FFFFFF;
        margin-bottom: 6px;
    }

    & div{
        display: flex;
        align-items: center;
        margin-top: 7px;
    }
`;

export const Location = styled.div`
    width: 150px;
    height: 130px;
    display: flex;
    flex-direction: column;

    & div{
        display: flex;
        align-items: center;
        margin-top: 7px;
    }
`;

export const SoundTextBtn = styled.div`
    width: 135px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3F3F41;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 0 15px;
    cursor: pointer;

    & p:first-of-type{
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 600;
        margin-right: 6px;
    }

    & p:last-of-type{
        font-size: 12px;
        font-weight: 700;
        color: #FFFFFF;
    }
`;


export const KeywordsBlock = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 1px solid #202020;
`;

export const Keyword = styled.div`
    height: 24px;
    padding: 8px 10px;
    display: flex;
    align-items: center; 
    box-sizing: border-box;
    background-color: #212122;
    border-radius: 20px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 600;
    margin-right: 5px;
`;


export const VideosInfo = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212122;

`;

export const VideosIcon = styled.img`
margin-top: 31px;
    width: 62px;
    height: 15px;
`;

export const Subscribers = styled.p`
    margin: 0;
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
`;

export const VideoBtn = styled.button`
    width: 106px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-size: 12px;
    font-weight: 700;
    color: #D1FD0A;
    background: none;
    cursor: pointer;
`;

export const GrowthInfo = styled.div`
    height: 100px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #00BE6E;
`;

export const GrowthTitle = styled.p`
    font-size: 13px;
    font-weight: 600;
    margin: 0;
    color: #AAFFDB;
`;

export const GrowthCount = styled.p`
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    color: #FFFFFF;
`;