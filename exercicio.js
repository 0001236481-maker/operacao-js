/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */

let preçoCafe = 8.50;
let preçoBolo = 12.00;
let taxaOperacional = 15.00;
let clientesAtendidos = 30;
let totalCookies = 125;
let cafeVendido = 42;
let boloVendido = 18;
let capacidadeCaixa = 6;


let faturamentoBruto = preçoCafe * cafeVendido + preçoBolo * boloVendido;
console.log(faturamentoBruto);

let faturamentoliquido = faturamentoBruto - taxaOperacional;
console.log(faturamentoliquido);

let ticketMedio = faturamentoBruto / clientesAtendidos
console.log(ticketMedio)

let sobraDeCookies = totalCookies % capacidadeCaixa
console.log(sobraDeCookies)



/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado difere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */

let idadeInformada =  17;
let idadeNecessaria = 18
let codigoDigitado ="100";
let codigoRegistrado = 100; 
let saldoDisponível = 250.00;
let valorCompra = 250.00;

let maioridadeCivil = idadeInformada > idadeNecessaria;
console.log( maioridadeCivil )


let codigoConfere = codigoDigitado == codigoRegistrado;
console.log(codigoConfere)


let codigoConfere2 = codigoDigitado === codigoRegistrado;
console.log(codigoConfere2)


let tipoDeDado = codigoRegistrado === codigoDigitado;
console.log(tipoDeDado)


let temSaldo = saldoDisponível >= valorCompra
console.log(temSaldo)


/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */


let valorDaCompra = 220;
let clienteAssinantePremium = false;
let possuiCupomPromocional = true;
let endereçoPossuiRestriçãoEntrega = false;
let clienteEstudante = true;
let idade = 22;
let idadeMaxima = 29;


let freteGratis = valorDaCompra >= 200 || clienteAssinantePremium === true && endereçoPossuiRestriçãoEntrega;
console.log(freteGratis)

let descontoUniversitario = idade <= idadeMaxima
console.log(descontoUniversitario)

let areaVip = clienteAssinantePremium === true || valorDaCompra >= 300  && possuiCupomPromocional;
console.log(areaVip)