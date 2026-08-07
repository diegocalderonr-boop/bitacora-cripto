---
titulo: "Arbitraje cash-and-carry en cripto"
categoria: "Arbitraje cash-and-carry"
fecha: "2026-08-01"
---

## Qué es el mecanismo

El cash-and-carry es una estrategia que aprovecha la diferencia entre el precio spot (precio actual) de una criptomoneda y el precio de su contrato de futuros. Así lo entiendo hasta ahora: cuando el futuro cotiza por encima del spot (situación llamada "contango"), se puede comprar en spot y vender en futuros, bloqueando la diferencia como ganancia al vencimiento del contrato.

## Pasos del proceso

### 1. Identificar contango en un par cripto

Se compara el precio spot de una cripto (por ejemplo, BTC en Bybit spot) con el precio de su contrato de futuros con fecha de vencimiento. **Por qué:** el contango es la condición necesaria; si el futuro cotiza por debajo del spot (backwardation), este mecanismo no aplica.

### 2. Calcular el basis (diferencia spot-futuros)

El basis es la diferencia porcentual entre el precio del futuro y el spot. Se anualiza para comparar con otras oportunidades. **Por qué:** un basis de 2% a 30 días no es lo mismo que un basis de 2% a 90 días — la tasa anualizada permite comparar.

### 3. Descontar costos de financiamiento y comisiones

Se restan: comisión de compra spot, comisión de apertura del short en futuros, funding rates (si aplican en perpetuos), y cualquier costo de mantener la posición abierta. **Por qué:** estos costos reducen el margen real y pueden hacer que una operación aparentemente rentable no lo sea.

### 4. Comprar en spot

Se compra la cripto al precio actual de mercado. **Por qué:** esta es la "pata larga" de la operación — se posee el activo subyacente.

### 5. Abrir posición short en futuros por el mismo monto

Se vende un contrato de futuros por la misma cantidad de cripto comprada en spot. **Por qué:** el short en futuros "bloquea" el precio de venta futuro, eliminando el riesgo direccional.

### 6. Mantener ambas posiciones hasta el vencimiento

Se mantienen ambas posiciones abiertas hasta que el contrato de futuros vence. Al vencimiento, el precio del futuro converge con el spot. **Por qué:** la convergencia es lo que materializa la ganancia — la diferencia original entre futuro y spot se convierte en el beneficio bruto.

### 7. Cerrar posiciones al vencimiento

El contrato de futuros se liquida automáticamente (o se cierra manualmente cerca del vencimiento) y se vende el spot. **Por qué:** cerrar ambas posiciones simultáneamente evita quedar expuesto a riesgo direccional.

## Riesgos técnicos del mecanismo

- **Funding rates en perpetuos:** si se usan contratos perpetuos en vez de futuros con fecha, el funding rate puede ser negativo y erosionar la ganancia gradualmente.
- **Riesgo de liquidación:** la posición short en futuros requiere margen; si el precio sube bruscamente, puede requerir margen adicional o ser liquidada.
- **Riesgo de exchange:** mantener posiciones abiertas durante semanas o meses expone al riesgo de problemas con el exchange.
- **Costos de oportunidad:** el capital queda inmovilizado durante la duración del contrato.
- **Basis negativo temporal:** aunque al vencimiento convergen, durante la vida del contrato el basis puede invertirse temporalmente.
