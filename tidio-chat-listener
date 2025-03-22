<script>
  // Esperar a que Tidio esté completamente cargado
  function cuandoTidioEsteListo(callback) {
    if (window.tidioChatApi && window.tidioChatApi.on) {
      callback();
    } else {
      setTimeout(function () {
        cuandoTidioEsteListo(callback);
      }, 100);
    }
  }

  cuandoTidioEsteListo(function () {
    // Evento: Chat abierto
    window.tidioChatApi.on("open", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Interaccion_chat_Tidio',
        'accionChat': 'Chat abierto'
      });
    });

    // Evento: Chat cerrado
    window.tidioChatApi.on("close", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Interaccion_chat_Tidio',
        'accionChat': 'Chat cerrado'
      });
    });

    // Evento: Inicio de conversación (primer mensaje del usuario)
    window.tidioChatApi.on("conversationStart", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Interaccion_chat_Tidio',
        'accionChat': 'Primer mensaje del usuario'
      });
    });

    // Evento: Mensaje enviado por el operador
    window.tidioChatApi.on("messageFromOperator", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Interaccion_chat_Tidio',
        'accionChat': 'Mensaje enviado por operador'
      });
    });

    // Evento: Mensaje enviado por el visitante
    window.tidioChatApi.on("messageFromVisitor", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Interaccion_chat_Tidio',
        'accionChat': 'Mensaje enviado por visitante'
      });
    });

    // Evento: Formulario previo enviado
    window.tidioChatApi.on("preFormFilled", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Interaccion_chat_Tidio',
        'accionChat': 'Formulario previo completado'
      });
    });

    // Evento: Cambio de estado del chat (por ejemplo, online, offline, ausente)
    window.tidioChatApi.on("setStatus", function (estado) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Interaccion_chat_Tidio',
        'accionChat': 'Estado del chat actualizado',
        'estadoChat': estado // online, offline, away
      });
    });
  });
</script>
