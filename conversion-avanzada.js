<script>
(function() {
    // Tiempo de sesión en segundos
    var tiempoSesionMinimo = 120; // 2 minutos
    // Número mínimo de vistas de producto
    var vistasProductoMinimas = 5;
    // Variable para controlar el estado del carrito
    var agregadoCarrito = false;

    // Recuperar o inicializar datos en el almacenamiento local
    var datosSesion = JSON.parse(localStorage.getItem('datosSesionConversion')) || {
        inicioSesion: Date.now(),
        vistasProducto: 0,
        agregadoCarrito: false
    };

    // Actualizar el tiempo de inicio si la sesión ha expirado
    var tiempoActual = Date.now();
    if ((tiempoActual - datosSesion.inicioSesion) > 30 * 60 * 1000) { // 30 minutos de inactividad
        datosSesion = {
            inicioSesion: tiempoActual,
            vistasProducto: 0,
            agregadoCarrito: false
        };
    }

    // Actualizar vistas de producto si el evento view_item ocurre
    if ({{Event}} === 'view_item') { 
        datosSesion.vistasProducto += 1;
    }

    // Marcar si el evento add_to_cart ocurre
    if ({{Event}} === 'add_to_cart') {
        datosSesion.agregadoCarrito = true;
    }

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('datosSesionConversion', JSON.stringify(datosSesion));

    // Verificar las condiciones de conversión
    var tiempoTranscurrido = (tiempoActual - datosSesion.inicioSesion) / 1000; // Convertir a segundos
    if (
        tiempoTranscurrido >= tiempoSesionMinimo &&
        datosSesion.vistasProducto >= vistasProductoMinimas &&
        datosSesion.agregadoCarrito
    ) {
        // Disparar evento de conversión personalizada
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'conversion_completada',
            conversionDetails: {
                tiempoSesion: tiempoTranscurrido,
                vistasProducto: datosSesion.vistasProducto,
                carrito: datosSesion.agregadoCarrito
            }
        });

        // Limpiar datos después de la conversión
        localStorage.removeItem('datosSesionConversion');
    }
})();
</script>
