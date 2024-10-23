import { FormEvent, useState } from "react";
import { FormControlInputs } from "../../components/FormControlInputs"
import { Results } from "../../components/Result"
import { ContainerHome } from "./style"
import { calculoInss, calculoIrpf, calculoSalario} from "../../utils/calculations";


interface SalaryProps{
  grossSalary: number;
  inss: number;
  irrf: number;
  netSalary: number;
  discountTotals: number;

}

export const Home = () => {
  const [salary, setSalary] = useState(0);
  const [disconts, setDisconts] = useState(0);
  const [dependents, setDependentes] = useState(0);
  const [results, setResults] = useState<SalaryProps>({grossSalary: 0 , inss: 0 , irrf:0,netSalary:0, discountTotals: 0})
  

   const handleCalculate = (e: FormEvent) => {
      e.preventDefault();
      const inss = calculoInss(salary);
      const irrf =  calculoIrpf(salary,inss,dependents);
      const totalDisconts = +inss + +irrf;
      const netSalary = calculoSalario(salary,dependents);

      setResults({
        grossSalary: salary,
        inss,
        irrf,
        netSalary,
        discountTotals: totalDisconts,
     });
   };



  return (
    <ContainerHome>
      <FormControlInputs 
      grossSalary={salary} 
      discounts={disconts} 
      dependents={dependents}
      onGrossSalary={setSalary}
      onDependents={setDependentes}
      onDiscounts={setDisconts}
      onTotalCalculation={handleCalculate}
      />
      <Results results={results}/>

    </ContainerHome>
  )
}
