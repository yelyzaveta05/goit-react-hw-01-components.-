import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 300px;
    margin: 40px auto;
    padding-top: 16px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: #757575;
`;

export const StatisticsList = styled.ul`
    margin: 0;
    padding: 0;
    width: inherit;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
    font-size: 14px;
    padding-bottom: 8px;
    color: #fff;
`;

export const Percentage = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;