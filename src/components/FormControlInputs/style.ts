import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    border: 1px solid black;
    border-radius: 30px;
    h3 {
        text-align: center;
    }
`;

export const Forms = styled.form`
    color: #000;
    font-size: 16px;
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    padding: 20px;

    .inputs {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    input{
        border: 0;
        min-height: 40px;
        line-height: 40px;
        margin-top:10px;
        padding: 0 15px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        border-radius: 11px;
    }
`;

export const Buttons = styled.div`
    display:flex;
    justify-content:center;
    gap: 20px;
    padding: 0 30px 30px;
`;