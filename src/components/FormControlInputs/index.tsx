import {Container, ContainerInputs, Forms,ContainerButtons, CalculateButton, CleanButton} from "./style";

export const FormControlInputs = () => {
  return (
    <Container>
      <div> <span>Calculadora Salário Líquido</span></div>
      <Forms>
        <ContainerInputs>
          <div className="inputs">
            <label>Salário bruto:</label>
            <input type="number" placeholder="R$0.000,00"/>
          </div>

          <div className="inputs">
            <label>Descontos:</label>
            <input type="number" placeholder="R$0.000,00" />
          </div>

          <div className="inputs">
            <label>Número de dependentes:</label>
            <input type="number" placeholder="0" />
          </div>
        </ContainerInputs>

        <ContainerButtons>
          <CalculateButton>Calcular</CalculateButton>
          <CleanButton>Limpar</CleanButton>
        </ContainerButtons>
      </Forms>
    </Container>
  );
};
