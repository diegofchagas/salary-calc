import styled from "styled-components";

export const ContainerResults = styled.div`
  max-width: 50rem;
  /* .line{
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
    } */
`;

export const Table = styled.table`
  width: 100%;
  position: relative;
  margin-top: 1.25rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  border-collapse: collapse;

  caption {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    color: #a52c6b;
  }

  thead tr th {
    color: #fff;
    font-weight: 600;
    position: relative;
    padding: 0.813rem 0.625rem;
    text-align: center;
  }

  thead th {
    font-weight: 600;
    padding: 0.813rem 0.625rem;
    text-align: center;
    background-color: #a52c6b;
    padding: 0.625rem;
    text-align: center;
    color: #000;
    position: relative;
  }

  thead tr th::after {
    content: "";
    width: 2px;
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
  }

  thead th:first-child {
    border-top-left-radius: 30px;
  }

  thead th:last-child {
    border-top-right-radius: 30px;
  }

  thead tr th:last-child::after {
    content: none;
  }

  tbody tr td {
    color: #000;
    padding: 0.625rem;
    text-align: center;
    position: relative;
  }

  tbody tr td::after {
    content: "";
    width: 2px;
    background-color: #a52c6b;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }

  tbody td:first-child {
    text-align: left;
    font-weight: 600;
  }

  tbody tr:nth-child(2n) {
    background-color: #fff;
  }

  tbody td:last-child::after {
    content: none;
  }
  //verificar depois essa linha
  tbody tr:nth-last-child(2) td:after {
    bottom: 20%;
    height: 80%;
  }

  tbody tr:first-child td::after {
    top: 20%;
    height: 80%;
  }

  tbody tr:last-child td {
    color: #fff;
    font-weight: 700;
    border-radius: 0 0 30px 30px;
    padding: 0.938rem 1.875rem;
    background-color:#A52C6B;
    line-height: 22px;
    text-align:center;
  }

 

  tbody td {
    padding: 0.625rem;
    text-align: center;
    color: #000;
    position: relative;
  }

  tbody tr .total-discount {
    color: #f70b17;
    font-weight: 600;
  }


  @media (max-width: 768px) {
    border-radius: 20px;
    thead tr {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tbody tr td {
      display: block;
      text-align: right !important;
      padding: 5px 10px;
    }

    tbody tr td:before {
      content: attr(data-label) ":";
      float: left;
      font-weight: 600 !important;
      display: block;
    }

    tbody tr td:after {
      content: none;
    }

    tbody tr td:first-child {
      padding-top: 15px;
    }

    tbody tr td:last-child {
      padding-bottom: 15px;
    }

    tbody tr:last-child td:before {
      content: none;
    }

    tbody tr td:last-child {
    }
  }
`;
