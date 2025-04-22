function calcular(operacion) {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valor1) || isNaN(valor2)) {
      resultado.textContent = "Ingrese números válidos";
      return;
    }
  
    let total;
  
    switch (operacion) {
      case "sumar":
        total = valor1 + valor2;
        break;
      case "restar":
        total = valor1 - valor2;
        break;
      case "multiplicar":
        total = valor1 * valor2;
        break;
      case "dividir":
        if (valor2 === 0) {
          resultado.textContent = "Error: división por cero";
          return;
        }
        total = valor1 / valor2;
        break;
      default:
        resultado.textContent = "Operación inválida";
        return;
    }
  
    resultado.textContent = total;
  }
  