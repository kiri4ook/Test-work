import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 40px 11px 40px;
    background-color: #0D0D0E;
`;

export const Logo = styled.p`
    min-width: 96px;
    font-size: 14px;
    font-weight: 700;
    color: #404044;
`;

export const Info = styled.div`
    width: 870px;
    height: 36px;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const DownloadBtn = styled.button`
    width: 90px;
    height: 20px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3C6DFF;
    border: none;
    background: none;
    cursor: pointer;
`;

export const UpdateBtn = styled.button`
    width: 72px;
    height: 20px;
    margin-right: 30px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #94969C;
    border: none;
    background: none;
    cursor: pointer;
`;

export const UpdatingDate = styled.div`
    width: 196px;
    height: 36px;
    margin-right: 30px;
`;

export const Date = styled.p`
    margin: 3px;
    align-items: center;
    text-align: end;
    font-size: 10px;
    font-weight: 700;
    color: #37373A;
`;