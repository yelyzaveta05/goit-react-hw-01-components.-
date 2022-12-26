import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 300px;
    margin: 40px auto;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
`;

export const Wrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const Avatar = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    border-radius: 50%;
    background-color: #757575`;

export const Name = styled.p`
    font-weight: bold;
    margin-top: 20px;
`;

export const Tag = styled.p`
    color: #a9a9a9;
`;

export const Location = styled.p`
margin: 0;
color: #a9a9a9;
`;

export const StatsList = styled.ul`
    margin: 0;
    padding 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: inherit;
    background-color: #e9ecf0;
    border-top: 1px solid #d3d5e3;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 16px;
    :not(:last-child){
        border-right: 1px solid #d3d5e3
    };
`;

export const Label = styled.span`
    font-size: 14px;
    padding-bottom: 8px;
    color: #a9a9a9;
`;

export const Quantity = styled.span`
    font-weight: bold;
`;