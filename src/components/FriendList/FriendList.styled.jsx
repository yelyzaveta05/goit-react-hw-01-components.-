import styled from "styled-components";

export const List = styled.ul`
    width: 300px;
    margin: auto;
    padding: 0;
    list-style: none;
    
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    margin: 0 10px;
    border-radius: 100%;
    background-color: ${({ status }) => {
    return status ? 'green' : 'red';
    }};
`;

export const Avatar = styled.img`
    margin-right: 10px;    
`;

export const Name = styled.p`
    font-weight: bold;
`;