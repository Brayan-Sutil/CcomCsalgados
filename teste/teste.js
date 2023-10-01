const entrada = Array.from(Array(10000000), () => "a");

const GSM7_CHARS = entrada;
console.log("Tamanho da entrada:", entrada.length);
const letra = "j";

function indexOfAnyButGsm7Char(str, startIndex, count) {
  if (entrada.length > 100000000) {
    return -1
  }
  if (str.length === 0) return "-1";
  for (let i = startIndex; i < startIndex + count; i++) {
    if (!GSM7_CHARS.includes(str[i])) {
      return i;
    }
  }
  return "-1";
}

let inicio = performance.now();

const teste = indexOfAnyButGsm7Char(letra, 0, 50);

let fim = performance.now();

let tempo = fim - inicio;

console.log("resultado", teste);
console.log({ tempo });

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

function binarySearch(array, target) {
  let menor = 0;
  let maior = array.length - 1;

  while (menor <= maior) {
    const meio = Math.floor((menor + maior) / 2);

    if (array[meio] === target) {
      return true;
    }

    if (array[meio] < target) {
      menor = meio + 1;
    } else {
      maior = meio - 1;
    }
  }

  return false;
}

function indexOfAnyButGsm7Char2(str, startIndex, count) {
  if (str.length === 0) return -1;

  for (let i = startIndex; i < startIndex + count && i < str.length; i++) {
    if (!binarySearch(GSM7_CHARS, str[i])) {
      return i;
    }
  }

  return -1;
}

let inicio2 = performance.now();

const teste2 = indexOfAnyButGsm7Char2(letra, 0, 50);

let fim2 = performance.now();

let tempo2 = fim2 - inicio2;

console.log("BomResultado", teste2);
console.log("Bom", { tempo2 });
