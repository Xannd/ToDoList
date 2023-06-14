import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 4%;
    display: flex;
    gap:2%;
`;

export const Tag = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    border-radius:10px;
    justify-content: center;
    font-size: .9rem; 
    align-items: center;
    background: ${props => props.color};
    //color: #312F2F;
    color: #fff;
    text-shadow: 1px 1px 1px #001;


`;

