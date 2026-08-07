---
titulo: "Arbitraje P2P entre dos exchanges distintos"
categoria: "Arbitraje P2P"
fecha: "2026-08-06"
---

Así lo entiendo hasta ahora: este tipo de arbitraje P2P no depende del spread entre compradores y vendedores dentro de una sola plataforma, sino de la diferencia de precio para el mismo activo (normalmente USDT) entre dos exchanges P2P distintos. La lógica de fondo es simple — comprar donde está barato, mover el activo, vender donde está caro — pero el mecanismo tiene varias piezas que hay que entender antes de intentarlo.

**1. Por qué existe la diferencia de precio entre exchanges**

Cada exchange P2P tiene su propio libro de ofertas, alimentado por usuarios distintos con distinta liquidez y distinta necesidad de comprar o vender rápido. No hay un mecanismo automático que iguale los precios entre plataformas, así que en un momento dado el precio de compra de USDT en el Exchange A puede ser más bajo que el precio de venta en el Exchange B. Esa brecha es la que se busca capturar.

**2. Por qué se necesita cuenta verificada en ambos exchanges de antemano**

El proceso de verificación (KYC) toma tiempo, y una oportunidad de arbitraje P2P suele durar minutos, no días. Si hay que abrir cuenta y verificar identidad en el momento, la oportunidad ya se cerró para cuando se puede operar. Por eso este mecanismo asume que ya se tiene cuenta activa y fondeada (o con acceso a fondeo rápido) en ambos exchanges antes de buscar la diferencia de precio.

**3. Por qué se compra primero, no se vende primero**

Se compra USDT en el Exchange A usando el método de pago más rápido disponible (transferencia bancaria instantánea, por ejemplo), porque cualquier demora entre el momento en que se ve la oportunidad y el momento en que se cierra la compra reduce el margen — el vendedor del otro lado puede subir su precio o desaparecer la oferta. Solo después de tener el USDT confirmado en la cuenta se pasa al siguiente paso.

**4. Por qué mover el USDT entre exchanges es el paso más delicado**

Una vez comprado el USDT en el Exchange A, hay que transferirlo a la wallet del Exchange B antes de poder venderlo ahí. Esto implica una transacción en blockchain (normalmente en una red como TRC20 por su costo bajo), que tiene un tiempo de confirmación. Este tiempo es el mayor riesgo del mecanismo: mientras el USDT viaja, el precio en el Exchange B puede moverse y borrar el margen que se había identificado. Cuanto más rápida la red elegida, menor la ventana de exposición a ese riesgo.

**5. Por qué se vende con el método de pago que primero se acredite**

Al llegar el USDT al Exchange B, se vende eligiendo la oferta con el mejor precio entre los compradores disponibles, priorizando métodos de pago con acreditación rápida sobre métodos más lentos aunque paguen un poco más — porque el objetivo es cerrar el ciclo completo antes de que el mercado se mueva, no maximizar cada operación individual.

**6. Comisiones, slippage y liquidez como parte del mecanismo**

Cada exchange cobra comisión por la operación P2P (o la absorbe en el spread mostrado), y la red blockchain usada para mover el USDT cobra una comisión de red aparte. Además, si el monto a operar es grande respecto a la liquidez disponible en la oferta, puede que no se llene al precio anunciado y haya que tomar varias ofertas a precios ligeramente distintos (esto es el slippage). Estos tres factores — comisión del exchange, comisión de red, y slippage por tamaño de la operación — son los que hay que restar del margen bruto observado para saber si realmente queda margen después de todo el ciclo.

**7. Por qué el margen observado no es el margen real**

El precio que se ve en pantalla en ambos exchanges es el margen bruto. El margen real es ese número menos comisiones de ambas plataformas, menos comisión de red, menos cualquier slippage por tamaño de la orden, y ajustado por el tiempo que tarda todo el ciclo (porque durante ese tiempo el mercado en cualquiera de los dos exchanges puede moverse en contra). Este es el cálculo que determina si el ciclo completo tenía sentido o no, una vez cerrado.

Este mecanismo, en resumen, depende de tener las cuentas ya listas, ejecutar rápido en cada paso, y entender que el número que se ve al inicio no es el número que queda al final.