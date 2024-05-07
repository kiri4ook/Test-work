import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 485px;
    display: flex;
    flex-direction: column;
    margin-top: 53px;
    margin-bottom: 120px;
`;

export const Title = styled.div`
    width: 285px;
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

export const SelectionPanel = styled.div`
    height: 31px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #8E8F92;
    border-bottom: 1px solid #2d2d2d;
    margin-top: 20px;

    & p:first-child {
        height: 31px;
        display: flex;
        align-items: center;
        margin: 0;
        margin-right: 30px;
        color: #D1FD0A;
        border-bottom: 1px solid #D1FD0A;
    }

    & img {
        margin-left: 6px;
    }
`;

export const Achievements = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, rgba(33, 33, 34, 1), rgba(33, 33, 34, 0));
    margin-top: 19px;

    & div {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        color: white;
    }

    & p {
        margin: 0;
        height: 40px;
        width: 70px;
        display: flex;
        justify-content: end;
        align-items: center;
        margin-right: 4px;
        background: radial-gradient(circle, rgba(255, 0, 46, 0.25), rgba(255, 0, 46, 0));
    }
`;

export const ListWrapper = styled.div`
    width: 486px;
    height: 308px;
`;

export const List = styled.ul`
    list-style-type: none;
`;

export const ListItem = styled.li`
    position: relative;
    height: 20px;
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 4px;

    & div {
        width: 20px;
        height: 20px;
        border: 2px solid #313131;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        & span {
            width: 10px;
            height: 10px;
            background-color: #D1FD0A;
        }
    }

    & p {
        font-size: 12px;
        font-weight: 600;
        margin: 0;
        color: #FFFFFF;
    }

    & img {
        margin-left: 20px;
        margin-right: 6px;
    }
`;

export const SubList = styled.ul`
    list-style-type: none;
    padding-left: 10px; 
    margin: 0; 
`;

export const SubListItem = styled.li`
    display: block;
    position: relative;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 4px;

    & div {
        width: 20px;
        height: 20px;
        border: 2px solid #313131;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        & span {
            width: 10px;
            height: 10px;
            background-color: #D1FD0A;
        }
    }

    & p {
        font-size: 12px;
        font-weight: 600;
        margin: 0;
        color: #FFFFFF;
    }

    & img {
        margin-right: 5px;
        margin-bottom: 20px;
    }
`;