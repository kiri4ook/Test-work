import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 53px;
`;

export const Header = styled.div`
    width:793px;
    height: 79px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    width: 109px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 24px;
    height: 24px;
`;

export const Name = styled.p`
    font-size:20px;
    font-weight: 700;
    margin: 0;
    color: #D1FD0A;
`;

export const Attributes = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 25px;
`;

export const Attribute = styled.div`
    height: 34px;
    border: 2px solid #151515;
    border-radius: 20px;
    padding: 13px 20px 13px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    margin-right: 5px;
`;

export const Image = styled.div`
    height: 34px;
    border-radius: 20px;
    padding: 7px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom, #FF98FB, #FFE769);
    margin-right: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    color: #000000;
`;


export const CustomChart = styled.img`
    width: 874px;
    height: 295px;
    pointer-events: none;
`;

