import { formatMoney } from "../../utils/formatMoney";
import { ContainerResults, Table } from "./style";

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
            <td scope="row" data-label="Evento">Salário Bruto</td>
            <td scope="row" data-label="Alíquota">-</td>
            <td scope="row"  data-label="Proventos" >{formatMoney(results.grossSalary)}</td>
            <td scope="row" data-label="Descontos">-</td>
          </tr>
          <tr>
            <td scope="row" data-label="Evento">Outros</td>
            <td data-label="Alíquota">-</td>
            <td data-label="Proventos">-</td>
            {results.others ? <td data-label="Descontos">{formatMoney(results.others)}</td> : <td data-label="Descontos">-</td>}
          </tr>
          <tr>
            <td scope="row" className="pai"  data-label="Evento">
              INSS
            </td>
            <td data-label="Alíquota">{(results.aliquotInss * 100).toFixed(2)}%</td>
            <td data-label="Proventos">-</td>
            <td data-label="Descontos">{formatMoney(results.inss)}</td>
          </tr>
          <tr>
            <td scope="row" data-label="Alíquota" >IRRF</td>
            <td>{(results.aliquotIrpf * 100).toFixed(2)}%</td>
            <td data-label="Proventos">-</td>
            <td data-label="Descontos" >{formatMoney(results.irrf)}</td>
          </tr>
          <tr>
            <td scope="row">Totais</td>
            <td data-label="Alíquota">-</td>
            <td data-label="Proventos">{formatMoney(results.grossSalary)}</td>
            <td className="total-discount" data-label="Descontos">{formatMoney(results.discountTotals)}</td>
          </tr>
          {/* Totais */}
          <tr>
            <td scope="row" colSpan={4}>
              Valor liquido a receber:{" "}
              <span>{formatMoney(results.netSalary)}</span>
            </td>
          </tr>
        </tbody>
     
      </Table>
    </ContainerResults>
  );
};
