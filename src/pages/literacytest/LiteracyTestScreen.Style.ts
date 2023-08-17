import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const QuestionNumber = styled.div`
    font-weight: bold;
    margin: 10px;
`;

export const QuestionText = styled.div`
    font-size: 20px;
    margin: 20px;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

export const OptionButton = styled.button`
    padding: 10px;
    margin: 5px;
    cursor: pointer;
`;

export const CurrentPosition = styled.div`
    font-size: 16px;
    margin: 10px;
`;
