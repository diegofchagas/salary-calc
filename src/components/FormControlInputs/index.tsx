import { HeaderForm } from "./style"

export const FormControlInputs  = () => {
  return (

    <HeaderForm>
      <h3>Calculadora Salário Líquido</h3>
    <form>
      <input type="number" placeholder="Informe seu salário"/>
      <input type="number" placeholder="Descontos" />
      <input type="number" placeholder="Dependentes" />
    </form>
    </HeaderForm>
  )
}
