import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    /* border: 0.5px solid black; */
    border-radius: 30px;
    margin-top: 2rem;
    margin-left:2rem;
    > div {
        text-align: center;
        font-weight:700;
        color:white;
        background-color:black;
        border-radius: 30px 30px 0 0;
        padding: .700rem .940rem;

        span{
            font-size:1.3rem;
        }
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

export const ContainerButtons = styled.div`
    display:flex;
    justify-content:center;
    gap: 20px;
    padding: 0 30px 30px;
`;

export const CalculateButton = styled.button`
border:none;
padding: 1rem 1.5rem;
font-weight:700;
cursor: pointer;
border-radius:30px;
`;

export const CleanButton = styled.button`
border:none;
padding: 1rem 1.5rem;
font-weight:700;
cursor: pointer;
border-radius:30px;
`;