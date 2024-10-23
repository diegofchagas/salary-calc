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
  aliquotInss:number;
  aliquotIrpf: number

}

export const Home = () => {
  const [salary, setSalary] = useState(0);
  const [disconts, setDisconts] = useState(0);
  const [dependents, setDependentes] = useState(0);
  const [results, setResults] = useState<SalaryProps>({grossSalary: 0 , inss: 0 , irrf:0,netSalary:0, discountTotals: 0, aliquotInss:0 , aliquotIrpf:0})
  

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    const inssResults = calculoInss(salary);
    if (inssResults) {
      const { value: inss, aliquot: aliquotInss } = inssResults;
      const irrfResults = calculoIrpf(salary, inss, dependents);
      const {value: irrf, aliquot:aliquotIrpf} = irrfResults
      if (irrf !== undefined) {
        const totalDisconts = inss + irrf;
        const netSalary = calculoSalario(salary, dependents) ?? 0;
  
        setResults({
          grossSalary: salary,
          inss,
          irrf,
          netSalary,
          discountTotals: totalDisconts,
          aliquotInss,
          aliquotIrpf
        });
      } else {
        console.log('Erro no cálculo do IRRF');
      }
    } else {
      console.log('Erro no cálculo do INSS');
    }
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
};
