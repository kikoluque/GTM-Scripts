<script>
  // Asegúrate de esperar a que Tidio esté completamente cargado
  function onTidioReady(callback) {
    if (window.tidioChatApi && window.tidioChatApi.on) {
      callback();
    } else {
      setTimeout(function () {
        onTidioReady(callback);
      }, 100);
    }
  }

  onTidioReady(function () {
    // Evento: Abrir el chat
    window.tidioChatApi.on("open", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Tidio_chat_interaction',
        'chatAction': 'Chat abierto'
      });
    });

    // Evento: Cerrar el chat
    window.tidioChatApi.on("close", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Tidio_chat_interaction',
        'chatAction': 'Chat cerrado'
      });
    });

    // Evento: Primer mensaje del usuario
    window.tidioChatApi.on("conversationStart", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Tidio_chat_interaction',
        'chatAction': 'Primer mensaje del usuario'
      });
    });

    // Evento: Mensaje del operador
    window.tidioChatApi.on("messageFromOperator", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Tidio_chat_interaction',
        'chatAction': 'Mensaje enviado por operador'
      });
    });

    // Evento: Mensaje del visitante
    window.tidioChatApi.on("messageFromVisitor", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Tidio_chat_interaction',
        'chatAction': 'Mensaje enviado por visitante'
      });
    });

    // Evento: Formulario prefill enviado
    window.tidioChatApi.on("preFormFilled", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Tidio_chat_interaction',
        'chatAction': 'Formulario previo completado'
      });
    });

    // Evento: Cambio de estado del chat (por ejemplo: online, offline, away)
    window.tidioChatApi.on("setStatus", function (status) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'Tidio_chat_interaction',
        'chatAction': 'Estado del chat actualizado',
        'status': status
      });
    });
  });
</script>
