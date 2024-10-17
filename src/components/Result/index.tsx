import { ContainerResults, Table } from "./style";

interface ResultsProps{
  results:{
    grossSalary:number;
    inss:number;
    irrf:number;
    netSalary:number;
    discountTotals:number

  }
}

export const Results = ({results}: ResultsProps) => {
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
            <td>R${results.grossSalary}</td>
            <td>-</td>
          </tr>
          <tr>
            <td scope="row" className="pai">
              INSS
            </td>
            <td>14.00%</td>
            <td>-</td>
            <td>R${results.inss}</td>
          </tr>
          <tr>
            <td scope="row">IRRF</td>
            <td>15.00%</td>
            <td>-</td>
            <td>R${results.irrf}</td>
          </tr>
          <tr>
            <td scope="row">Totais</td>
            <td>-</td>
            <td>R${results.grossSalary}</td>
            <td>R${results.discountTotals}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td scope="row" colSpan={3}>
              Valor liquido a receber:{" "}
            </td>
            <td>R${results.netSalary}</td>
          </tr>
        </tfoot>
      </Table>
    </ContainerResults>
  );
};
