
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


export function calculoInss(salario: number): number {
  const valorInss = inssQuotes.find((cotacao)=> salario <= cotacao.limite);
  if(salario > 7507.49 ){
   const inss = 876.95
   return inss
   
  } else if (valorInss){
   const inss = salario * valorInss.cotacao - valorInss.deducao
   return Math.max(inss, 0)
  }else{
   console.log('Salário fora da faixa do INSS');
   return 0
  }
 }

 
 export function calculoIrpf(salario:number,inss:number,dependentes:number): number {
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

  const valorIrpf = inrpfQuotes.find(cotacao => base <= cotacao.limite)

  if(valorIrpf){
    const irpf = base * valorIrpf.cotacao - valorIrpf.deducao
    return parseFloat(irpf.toFixed(2))
  }

  else{
    console.log("Salário fora da faixa")
    return 0;
  }

}

export function calculoSalario (salario:number, dependentes:number) {
  const inss = calculoInss(salario)
  const irrf = calculoIrpf(salario, inss ?? 0, dependentes)
  
const salarioLiquido = salario - (inss ?? 0) - irrf;
 return  parseFloat(salarioLiquido.toFixed(2)) 
}

