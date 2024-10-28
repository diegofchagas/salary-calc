import styled from "styled-components";

export const ContainerResults = styled.div`
  padding: 0 1.875rem 1.875rem;
  width:55rem;
  .line{
    width: 35%;
    height: 4px;
    background-color: #080B12;
    margin: 2.5rem 16.875rem;
    border-radius: 15px;
  }

   @media (max-width: 500px) {
    .line{
    max-width: 20%;
    height: 4px;
    margin: 2rem 22rem;
    border-radius: 15px;
    }

    }
`;

export const ContainerTable = styled.div`
 @media (max-width: 800px){
  margin: 0 auto;
  width:80vw;
  overflow-x: auto;
 }
`;

export const Table = styled.table`
  width:100%;
  margin-top: 1.25rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  border-collapse: collapse;

  caption {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    color:#A52C6B;
  }

  thead th:first-child {
    border-top-left-radius: 30px;
  }

  thead th:last-child {
    border-top-right-radius: 30px;
  }

  thead tr th {
    color:#FFF;
  }

  thead th {
    font-weight: 600;
    padding: .813rem .625rem;
    text-align: center;
    background-color: #A52C6B;
    padding: .625rem;
    text-align: center;
    color: #000;
    position: relative;
  }

  thead tr th::after {
    content: "";
    width: 2px;
    background-color: #FFF;
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
  }

  thead th:last-child::after {
    content: none;
  }

  tbody td:first-child {
    text-align: left;
    font-weight: 600;
  }

  tbody tr:nth-child(2n) {
    background-color: #FFF;
  }

  tbody td {
    padding: .625rem;
    text-align: center;
    color: #000;
    position: relative;
  }

  tbody  tr:last-child{
    border-bottom: 2px solid #A52C6B;
  }

  tbody tr .total-discount{
    color:#C93847;
    font-weight:600;

  }

  tbody tr td::after {
    content: "";
    width: 2px;
    background-color: #A52C6B;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }

  tbody td:last-child::after {
    content: none;
  }

  tfoot tr td {
    padding: 1.25rem;
    color: #080B12;
    font-weight:bold;

  }

  tfoot tr td:last-child {
    text-align: center;
  }

    @media (max-width: 800px) {

    caption {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  thead th {
    padding: .525rem;
    text-align: center;
    font-size:1rem;
  }

  tbody{
    overflow-x:auto;
  }
  tbody td {
    padding: .525rem;
    font-size:1rem;
  }
    }

    tfoot tr td {
    padding: .900rem;
    color: #080B12;
    font-weight:bold;

  }



`;
