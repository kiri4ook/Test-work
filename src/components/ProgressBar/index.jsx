import styled from 'styled-components';

const Wrapper = styled.div`
    width: 425px;
    height: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Name = styled.div`
    display: flex;

    & p {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #FFFFFF;
        margin-left: 8px;
    }
`;

const Logo = styled.img`
    width: 20px;
    height: 20px;
`;

const Percent = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
`;

const ProgressWrapper = styled.div`
    width: 425px;
    height: 8px;
    background-color: #212122;
    display: flex;
    align-items: center;

`;

const CustomProgressBar = styled.div`
    width: ${props => props.progress}%;
    height: 8px;
    background-color: #D1FD0A;
    border: 2px solid #212122;
    border-right: none;
    box-sizing: border-box;
`;

const BorderPoint = styled.div`
    width: 2px;
    height: 10px;
    background-color: #ffffff;
`;

const ProgressBar = ({ image, name, progress }) => {

    return (
        <Wrapper>
            <Title>
                <Name>
                    <Logo src={image} alt="" />
                    <p>{name}</p>
                </Name>
                <Percent>{progress}%</Percent>
            </Title>
            <ProgressWrapper>
                <CustomProgressBar progress={progress}></CustomProgressBar>
                <BorderPoint></BorderPoint>
            </ProgressWrapper>
        </Wrapper>
    );
};

export default ProgressBar;