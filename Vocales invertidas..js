class NodoPila {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class Pila {
  constructor() {
    this.tope = null;
  }

  push(valor) {
    const nuevoNodo = new NodoPila(valor);
    nuevoNodo.siguiente = this.tope;
    this.tope = nuevoNodo;
  }

  pop() {
    if (!this.tope) return null;
    const valorRemovido = this.tope.valor;
    this.tope = this.tope.siguiente;
    return valorRemovido;
  }

  estaVacia() {
    return this.tope === null;
  }
}

function vocalesInversasConPila(S, n) {
  const miPila = new Pila();

  for (let i = 0; i < n; i++) {
    // 1. Convertimos el caracter actual a minúscula inmediatamente
    let letra = S[i].toLowerCase(); 

    // 2. ¡Listo! Ahora solo evaluamos minúsculas de forma súper limpia
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      miPila.push(letra);
    }
  }

  let cadenaInversa = "";
  while (!miPila.estaVacia()) {
    cadenaInversa += miPila.pop();
  }

  return cadenaInversa;
}

