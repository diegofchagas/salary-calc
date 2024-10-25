
interface Quotes {
  limit: number;
  quote: number;
  deduction: number;

}

const inssQuotes : Quotes[] = [
  {limit:1412, quote: 0.075, deduction: 0},
  {limit:2666.68, quote: 0.09, deduction: 21.18},
  {limit:4000.03, quote: 0.12, deduction: 101.18},
  {limit:7786.02, quote: 0.14, deduction: 181.18}
]

const inrpfQuotes: Quotes[] = [
  {limit: 2259.20, quote: 0, deduction: 0},
  {limit: 2826.65, quote: 0.075, deduction: 169.44},
  {limit: 3751.05, quote: 0.15, deduction: 381.44},
  {limit: 4664.68, quote: 0.225, deduction: 662.77},
  {limit: Infinity, quote: 0.275, deduction: 896}
]

interface inssResult{
  value: number;
  aliquot:number;
}

export function calculateSocialSecurityContribution(wage: number): inssResult | undefined {
  const valueSocialSecurity = inssQuotes.find((quotes) => wage <= quotes.limit);
  if (wage > 7786.02) {
    return {
      value: 908.86,
      aliquot: 0.14,
    };
    //const inss = 876.95
    //return inss
  } else if (valueSocialSecurity) {
    const inss = wage * valueSocialSecurity.quote - valueSocialSecurity.deduction;
    return { value: parseFloat(inss.toFixed(2)), aliquot: valueSocialSecurity.quote };
  } else {
    throw new Error("Salário fora da faixa do INSS");
  }
}

 interface irpfResults {
  value:number;
  aliquot: number
 }
 
 export function calculateIncomeTax(wage:number,inss:number,dependents:number): irpfResults {
  const simplifiedDiscount = 564.8;
  const dependentDeduction = dependents * 189.59;
  const deductions = inss + dependentDeduction;
  let calculationBasis;

  if( deductions <= simplifiedDiscount) {
      calculationBasis = wage - simplifiedDiscount
  }
  else {
      calculationBasis = wage - deductions
  }

  calculationBasis = Math.max(calculationBasis,0)

  const incomeTaxCalculationBasis = inrpfQuotes.find(quote => calculationBasis <= quote.limit)

  if(incomeTaxCalculationBasis){
    const incomeTaxSalaryValue = calculationBasis * incomeTaxCalculationBasis.quote - incomeTaxCalculationBasis.deduction
    return  {
      value:parseFloat(incomeTaxSalaryValue.toFixed(2)), 
      aliquot:incomeTaxCalculationBasis.quote
    }
  }

  else{
    return {
      value:0,
      aliquot:0
    }
  }

}

export function calculationNetSalary (wage:number, dependentes:number, discounts:number) {
  const inss = calculateSocialSecurityContribution(wage)
  if(inss === undefined) {
    return undefined
  }
  const irrf = calculateIncomeTax(wage, inss?.value, dependentes)
  if(irrf === undefined) {
    return undefined;
  }
  
const netSalary = wage - inss?.value - irrf?.value - discounts
  return  parseFloat(netSalary.toFixed(2)) 
}

