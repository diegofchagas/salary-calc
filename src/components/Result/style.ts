import styled from "styled-components";

export const ContainerResults = styled.div`
  padding: 0 30px 30px;

  .line{
    width: 35%;
    height: 4px;
    background-color: black;
    margin: 40px 270px; 
    border-radius: 15px;
  }
`;

export const Table = styled.table`
  width: 800px;
  margin-top: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  border-collapse: collapse;

  caption {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  thead th:first-child {
    border-top-left-radius: 30px;
  }

  thead th:last-child {
    border-top-right-radius: 30px;
  }

  thead th {
    color: black;
    font-weight: 600;
    padding: 13px 10px;
    text-align: center;
    background-color: #c7c7c7;
  }

  thead th {
    padding: 10px;
    text-align: center;
    color: #000;
    position: relative;
  }

  thead tr th::after {
    content: "";
    width: 2px;
    background-color: black;
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
    background-color: #efefef;
  }

  tbody td {
    padding: 10px;
    text-align: center;
    color: #000;
    position: relative;
  }

  tbody tr td::after {
    content: "";
    width: 2px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }

  tbody td:last-child::after {
    content: none;
  }

  tfoot tr td {
    padding: 20px;
    color: #000;
  }

  tfoot tr td:last-child {
    text-align: center;
  }
`;
