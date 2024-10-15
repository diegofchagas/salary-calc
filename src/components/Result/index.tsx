import { ContainerResults, Table } from "./style";

export const Results = () => {
  return (
    <ContainerResults>
      <div className="line"></div>
      <Table>
        <caption>Quanto vou receber:</caption>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Alíquota</th>
            <th>Proventos</th>
            <th>Descontos</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td scope="row">Salário Bruto</td>
            <td>-</td>
            <td>R$4.000,00</td>
            <td>-</td>
          </tr>
          <tr>
            <td scope="row" className="pai">
              INSS
            </td>
            <td>14.00%</td>
            <td>-</td>
            <td>R$480,00</td>
          </tr>
          <tr>
            <td scope="row">IRRF</td>
            <td>15.00%</td>
            <td>-</td>
            <td>R$285,15</td>
          </tr>
          <tr>
            <td scope="row">Totais</td>
            <td>-</td>
            <td>R$4000</td>
            <td>R$600</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td scope="row" colSpan={3}>
              Valor liquido a receber:{" "}
            </td>
            <td>R$3.000</td>
          </tr>
        </tfoot>
      </Table>
    </ContainerResults>
  );
};
