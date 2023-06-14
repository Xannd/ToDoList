import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 60px;
    min-height: 60px;
    border: 1px solid #dedede;
    border-top:0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #312F2F;
`
export const Stripe = styled.div`
    width: 2%;
    height: 90%;
    border-radius: 10px;
    background-color: ${props => props.color};
`;

export const Text = styled.div`
    width: 95%;
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Task = styled.div`
    width: 35%;
    height: 100%;
    gap: 1%;
    border-right: 1px solid #dedede;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonEdit = styled.button`
    width: 30px;
    height: 30px;
    border:none;
    cursor:pointer;
    background: #dedede;
    color: #312F2F;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    position: absolute;
    top: 3px;
    right: 5px;
    opacity: 0.5;
    transition: opacity 200ms ease-in-out;
    
    &:hover{opacity: 1;}
`;

export const TextArea = styled.textarea`
    min-width: 95%;
    min-height: 65%;
    max-height: 95%;
    margin: 0;
    padding: 5px;
    box-sizing: border-box;
`;

export const Date = styled.div`
    width: 25%;
    height: 100%;
    border-right: 1px solid #dedede;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const Status = styled.div`
    width: 20%;
    height: 100%;
    border-right: 1px solid #dedede;
    display:flex;
    align-items: center;
    justify-content: center;

    select {
        width: 80%;
        height: 80%;
        border-radius: 10px;
        padding: 10px;
        font-size: 1rem;
        background-color: #fff;
        color: #312F2F;
    }
`;

export const Action = styled.div`
    width: 20%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
`;

export const Button = styled.button`
    width: 22%;
    border:none;
    height: 80%;
    display:flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.color}; 
    border-radius: 10px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:disabled{
        cursor: not-allowed;
        opacity: .5;
    }
`;