import {Container, ContainerInputs, Forms,ContainerButtons, CalculateButton, CleanButton} from "./style";

interface InputsProps {
  grossSalary: number;
  discounts:number;
  dependents:number;
  onGrossSalary: (value:number) => void;
  onDiscounts: (value:number) => void;
  onDependents: (value:number) => void;
  onTotalCalculation: () => void;
}

export const FormControlInputs = ({grossSalary, discounts, dependents, onGrossSalary, onDiscounts,onDependents, onTotalCalculation}: InputsProps) => {

  return (
    <Container>
      <div>
        {" "}
        <span>Calculadora Salário Líquido</span>
      </div>
      <Forms onSubmit={onTotalCalculation}>
        <ContainerInputs>
          <div className="inputs">
            <label>Salário bruto:</label>
            <input
              type="text"
              placeholder="R$0.000,00"
              value={grossSalary}
              onChange={({ target }) => onGrossSalary(parseFloat(target.value))}
            />
          </div>

          <div className="inputs">
            <label>Descontos:</label>
            <input
              type="number"
              placeholder="R$0.000,00"
              value={discounts}
              onChange={({ target }) => onDiscounts(parseFloat(target.value))}
            />
          </div>

          <div className="inputs">
            <label>Número de dependentes:</label>
            <input
              type="number"
              placeholder="0"
              value={dependents}
              onChange={({ target }) => onDependents(parseFloat(target.value))}
            />
          </div>
        </ContainerInputs>

        <ContainerButtons>
          <CalculateButton type="submit">Calcular</CalculateButton>
          <CleanButton>Limpar</CleanButton>
        </ContainerButtons>
      </Forms>
    </Container>
  );
};
