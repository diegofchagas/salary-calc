import styled from "styled-components";

export const Container = styled.div`
    width: 50rem;
    border: 1px solid #A52C6B;
    border-radius: 1.875rem;
    margin-top: 2rem;
    margin-left:2rem;
    > div {
        text-align: center;
        font-weight:700;
        color:white;
        background-color:#A52C6B;
        border-radius: 1.875rem 1.875rem 0 0;
        padding: .700rem .940rem;

        span{
            font-size:1.3rem;
        }
    }

    @media (max-width: 900px) {
    width: 43.75rem;
}

    @media (max-width: 750px) {
    width: 35.75rem;
}

@media (max-width: 600px) {
    width:auto;

    > div {
        padding: .400rem .640rem;

        span{
            font-size:1rem;
        }
    }
}


`;

export const Forms = styled.form`
    color: #000;
    font-size: 1rem;
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
        min-height: 2.5rem;
        line-height: 2.5rem;
        margin-top:.625rem;
        padding: 0 15px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        border-radius: 11px;
        outline:none;

        &:focus{
            outline: 2px solid #A52C6B; 
        }

    }


    @media (max-width: 600px) {
        flex-direction:column;
        align-items:center;

        .inputs{

            padding: .400rem;
            label{
                font-size:.800rem;
            }
        }
}

`;

export const ContainerButtons = styled.div`
    display:flex;
    justify-content:center;
    gap: 1.25rem;
    padding: 0 1.875rem 1.875rem;


    @media (max-width: 600px) {
        flex-direction:column;
        align-items:center;
}
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

@media (max-width: 600px) {
    padding: .800rem 1rem;
    font-size:.800rem;
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

@media (max-width: 600px) {
    padding: .800rem 1rem;
    font-size:.800rem;
}

`;


