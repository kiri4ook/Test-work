import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 117px;
    display: flex;
    flex-direction: column;
    margin-top: 53px;
`;

export const Title = styled.div`
    width: 177px;
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
    color: #FFFFFF;
`;

export const NotifyWrapper = styled.div`
    width: 870px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212122;
    margin-top: 17px;

    & p{
        margin: 0;
        margin-right: 20px;
    }

    & img {
        width: 28px;
        height: 33px;
        margin-right: 11px;
    }
`;

export const NotifyBtn = styled.button`
    width: 101px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D1FD0A;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    color: #000;
    cursor: pointer;
`;