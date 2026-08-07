---
titulo: "Arbitraje triangular en Bybit: altcoins de baja capitalización"
categoria: "Arbitraje triangular"
fecha: "2026-07-15"
---

## Qué es el mecanismo

El arbitraje triangular consiste en ejecutar tres operaciones consecutivas dentro del mismo exchange, aprovechando una ineficiencia temporal en los precios relativos entre tres pares de trading. Así lo entiendo hasta ahora: si el tipo de cambio implícito entre tres monedas no está perfectamente alineado, existe un margen que se puede capturar completando el "triángulo".

## Pasos del proceso

### 1. Identificar el triángulo de pares

Se necesitan tres pares que formen un ciclo cerrado. Por ejemplo, en Bybit: TOKEN/USDT, TOKEN/BTC, BTC/USDT. **Por qué:** si los tres pares no forman un ciclo que regrese a la moneda inicial, no se puede calcular si existe ineficiencia.

### 2. Calcular el tipo de cambio implícito

Se multiplican los tipos de cambio de los tres pares en secuencia. Si el resultado es distinto de 1 (descontando comisiones), existe una oportunidad teórica. **Por qué:** la diferencia respecto a 1 es el margen bruto antes de costos.

### 3. Descontar comisiones por cada operación

Bybit cobra comisión por cada trade. Con tres operaciones, las comisiones se multiplican. En altcoins de baja capitalización las comisiones de maker/taker pueden variar. **Por qué:** muchas ineficiencias que parecen rentables desaparecen al incluir las tres comisiones.

### 4. Verificar la liquidez del order book

Las altcoins de baja capitalización suelen tener order books delgados. El precio visible en el ticker no es necesariamente el precio al que se ejecutará la orden. **Por qué:** el slippage en books delgados puede convertir un margen positivo en pérdida.

### 5. Ejecutar las tres órdenes en secuencia rápida

La velocidad importa porque la ineficiencia puede desaparecer en segundos. En la práctica, esto se hace con bots o scripts que ejecutan las tres órdenes de forma casi simultánea. **Por qué:** si otro trader detecta la misma oportunidad primero, el margen desaparece.

### 6. Verificar el resultado neto

Después de las tres operaciones, se compara el saldo final contra el inicial en la moneda base (USDT, típicamente). **Por qué:** es la única forma de confirmar si la operación fue positiva después de comisiones y slippage real.

## Riesgos técnicos del mecanismo

- **Slippage:** en altcoins con baja liquidez, el deslizamiento de precio puede ser significativo.
- **Latencia:** la ejecución no es instantánea; entre la primera y la tercera orden los precios pueden moverse.
- **Comisiones acumuladas:** tres operaciones implican tres comisiones, que reducen o eliminan márgenes pequeños.
- **Volatilidad:** los precios de altcoins de baja capitalización pueden moverse bruscamente durante la ejecución.
