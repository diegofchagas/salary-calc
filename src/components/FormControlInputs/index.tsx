import { Buttons, Container, ContainerInputs, Forms} from "./style";

export const FormControlInputs = () => {
  return (
    <Container>
      <h3>Calculadora Salário Líquido</h3>
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

        <Buttons>
          <button>Calcular</button>
          <button>Limpar</button>
        </Buttons>
      </Forms>
    </Container>
  );
};
