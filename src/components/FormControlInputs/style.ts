import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
     border: 0.5px solid black;
    border-radius: 30px;
    margin-top: 2rem;
    margin-left:2rem;
    > div {
        text-align: center;
        font-weight:700;
        color:white;
        background-color:#A52C6B;
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
    padding: 1.25rem;

    .inputs {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: .625rem;

        label{
            color:#080B12;
            font-weight:500;
        }
    }

    input{
        border: 0;
        min-height: 40px;
        line-height: 40px;
        margin-top:.625rem;
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
font-size:1rem;
font-weight:700;
cursor: pointer;
border-radius:30px;
background:#CA3884;
color: #fff;
transition: background-color 1s;

&:hover{
  background-color:#A52C6B;
}
`;

export const CleanButton = styled.button`
border:none;
padding: 1rem 1.5rem;
font-size:1rem;
font-weight:700;
cursor: pointer;
border-radius:30px;
background-color:transparent;
border: 1px solid #CA3884;
color:#CA3884;
transition: background-color 1.5s;

&:hover{
background-color:#A52C6B;
color: #fff;
}

`;