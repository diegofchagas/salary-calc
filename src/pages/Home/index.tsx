import { FormEvent, useState } from "react";
import { FormControlInputs } from "../../components/FormControlInputs"
import { Results } from "../../components/Result"
import { ContainerHome, FormWrapper, ResultsWrapper } from "./style"
import { calculateIncomeTax, calculateSocialSecurityContribution, calculationNetSalary } from "../../utils/calculations";
//import TableTwo from "./table";


interface SalaryProps{
  grossSalary: number;
  inss: number;
  irrf: number;
  netSalary: number;
  discountTotals: number;
  aliquotInss:number;
  aliquotIrpf: number;
  others?:number;
}

export const Home = () => {
  const [salary, setSalary] = useState(0);
  const [disconts, setDisconts] = useState(0);
  const [dependents, setDependentes] = useState(0);
  const [isThereCalculation, setIsThereCalculation] = useState(false)
  const [results, setResults] = useState<SalaryProps>({grossSalary: 0 , inss: 0 , irrf:0,netSalary:0, discountTotals: 0, aliquotInss:0 , aliquotIrpf:0, others:0})
  

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    const inssResults = calculateSocialSecurityContribution(salary);
    if (inssResults) {
      const { value: inss, aliquot: aliquotInss } = inssResults;
      const irrfResults = calculateIncomeTax(salary, inss, dependents);
      const {value: irrf, aliquot:aliquotIrpf} = irrfResults
      if (irrf !== undefined) {
        const totalDisconts = inss + irrf;
        const netSalary = calculationNetSalary(salary, dependents, disconts) ?? 0;
        
        if(salary > 0) {
        setResults({
          grossSalary: salary,
          inss,
          irrf,
          netSalary,
          discountTotals: totalDisconts,
          aliquotInss,
          aliquotIrpf,
          others:disconts
        });

        setIsThereCalculation(true)
      }
      } else {
        throw new Error('Erro no cálculo do IRRF');
      }
    } else {
      throw new Error('Erro no cálculo do INSS');
    }
  };

  
  const handleClear = () => {
    setSalary(0);
    setDependentes(0);
    setDisconts(0);
    setResults({
      grossSalary: 0,
      inss:0,
      irrf:0,
      netSalary:0,
      discountTotals: 0,
      aliquotInss:0,
      aliquotIrpf:0,
      others:0
    });
    setIsThereCalculation(false)
  }

  return (
    <ContainerHome>
      <FormWrapper>
      <FormControlInputs 
      grossSalary={salary} 
      discounts={disconts} 
      dependents={dependents}
      onGrossSalary={setSalary}
      onDependents={setDependentes}
      onDiscounts={setDisconts}
      onTotalCalculation={handleCalculate}
      onClear={handleClear}
      />
      </FormWrapper>

      {isThereCalculation && <ResultsWrapper><Results results={results}/> </ResultsWrapper> }


    </ContainerHome>
  )
};
