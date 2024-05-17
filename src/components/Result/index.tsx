export const Result = () => {
  return (
    <table>
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
          <td>Salário Bruto</td>
          <td>-</td>
          <td>R$4.000,00</td>
          <td>-</td>
        </tr>
        <tr>
          <td>INSS</td>
          <td>14.00%</td>
          <td>-</td>
          <td>R$480,00</td>
        </tr>
        <tr>
          <td>IRRF</td>
          <td>15.00%</td>
          <td>-</td>
          <td>285,15</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>-</td>
          <td>4000</td>
          <td>600</td>
        </tr>
      </tbody>
    </table>
  );
};
