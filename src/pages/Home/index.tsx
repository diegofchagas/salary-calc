import { FormControlInputs } from "../../components/FormControlInputs"
import { Results } from "../../components/Result"
import { ContainerHome } from "./style"


export const Home = () => {
  const resultado = {
    grossSalary: 0, inss: 0, irrf: 0, netSalary: 0 , discountTotals: 100
  }
  return (
    <ContainerHome>
      <FormControlInputs />
      <Results results={resultado}/>
    </ContainerHome>
  )
}
