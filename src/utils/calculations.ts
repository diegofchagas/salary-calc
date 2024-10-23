
interface Quotes {
  limite: number;
  cotacao: number;
  deducao: number;

}

const inssQuotes : Quotes[] = [
  {limite:1412, cotacao: 0.075, deducao: 0},
  {limite:2666.68, cotacao: 0.09, deducao: 21.18},
  {limite:4000.03, cotacao: 0.12, deducao: 101.18},
  {limite:7786.02, cotacao: 0.14, deducao: 181.18}
]

const inrpfQuotes: Quotes[] = [
  {limite: 2259.20, cotacao: 0, deducao: 0},
  {limite: 2826.65, cotacao: 0.075, deducao: 169.44},
  {limite: 3751.05, cotacao: 0.15, deducao: 381.44},
  {limite: 4664.68, cotacao: 0.225, deducao: 662.77},
  {limite: Infinity, cotacao: 0.275, deducao: 896}
]

interface inssResult{
  value: number;
  aliquot:number
}

export function calculoInss(salario: number): inssResult | undefined {
  const valorInss = inssQuotes.find((cotacao)=> salario <= cotacao.limite);
  if(salario > 7786.02 ){
    return {
      value:876.95, aliquot: 0.14
    }
   //const inss = 876.95
   //return inss
   
  } else if (valorInss){
   const inss = salario * valorInss.cotacao - valorInss.deducao
   return {value:Math.max(inss, 0), aliquot:valorInss.cotacao }
  }else{
   console.log('Salário fora da faixa do INSS');
  }
 }
 
 interface irpfResults {
  value:number;
  aliquot: number
 }
 
 export function calculoIrpf(salario:number,inss:number,dependentes:number): irpfResults {
  const descontoSimplificado = 564.8;
  const deducaoDependentes = dependentes * 189.59
  const deducoes = inss + deducaoDependentes;
  let base;

  if( deducoes <= descontoSimplificado) {
     base = salario - descontoSimplificado
  }
  else {
    base = salario - deducoes
  }

  base = Math.max(base,0)

  const valorIrpf = inrpfQuotes.find(cotacao => base <= cotacao.limite)

  if(valorIrpf){
    const irpf = base * valorIrpf.cotacao - valorIrpf.deducao
    return  {
      value:parseFloat(irpf.toFixed(2)), 
      aliquot:valorIrpf.cotacao
    }
  }

  else{
    return {
      value:0,
      aliquot:0
    }
  }

}

export function calculoSalario (salario:number, dependentes:number) {
  const inss = calculoInss(salario)
  if(inss === undefined) {
    return undefined
  }
  const irrf = calculoIrpf(salario, inss?.value, dependentes)
  if(irrf === undefined) {
    return undefined;
  }
  
const salarioLiquido = salario - inss?.value - irrf?.value;
 return  parseFloat(salarioLiquido.toFixed(2)) 
}

