import { ContainerResults, ContainerTable, Table } from "./style";

interface ResultsProps{
  results:{
    grossSalary:number;
    inss:number;
    irrf:number;
    netSalary:number;
    discountTotals:number;
    aliquotInss: number;
    aliquotIrpf: number;
    others?: number;
  }
}

export const Results = ({results}: ResultsProps) => {
  return (
    <ContainerResults>
      <div className="line"></div>
      <ContainerTable>
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
            <td>Outros</td>
            <td>-</td>
            <td>-</td>
            {results.others ? <td>R${results.others}</td> : <td>-</td>}
          </tr>
          <tr>
            <td scope="row" className="pai">
              INSS
            </td>
            <td>{(results.aliquotInss * 100).toFixed(2)}%</td>
            <td>-</td>
            <td>R${results.inss}</td>
          </tr>
          <tr>
            <td scope="row">IRRF</td>
            <td>{(results.aliquotIrpf * 100).toFixed(2)}%</td>
            <td>-</td>
            <td>R${results.irrf}</td>
          </tr>
          <tr>
            <td scope="row">Totais</td>
            <td>-</td>
            <td>R${results.grossSalary}</td>
            <td className="total-discount">R${results.discountTotals}</td>
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
      </ContainerTable>
    </ContainerResults>
  );
};
