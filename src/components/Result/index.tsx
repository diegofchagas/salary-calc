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
          <td>R$500,00</td>
        </tr>
        <tr>
          <td>INSS</td>
          <td>14.00%</td>
          <td>R$480,00</td>
        </tr>
        <tr>
          <td>IRRF</td>
        </tr>
        <tr>
          <td>Total</td>
        </tr>
      </tbody>
    </table>
  );
};
