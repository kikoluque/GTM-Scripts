<script>
  window.dataLayer = window.dataLayer || [];

  window.addEventListener('message', function (e) {
    if (typeof e.data === 'object' && e.data.event && e.data.event.indexOf('calendly.') === 0) {
      var calendlyEvent = e.data.event.split('.')[1]; 

      // Capturar eventos relevantes de Calendly
      if (calendlyEvent === 'profile_page_viewed' || 
          calendlyEvent === 'event_type_viewed' || 
          calendlyEvent === 'date_and_time_selected' || 
          calendlyEvent === 'event_scheduled') {
        
        window.dataLayer.push({
          'event': 'calendly',
          'calendly_event': calendlyEvent
        });

        console.log("Calendly event detected:", calendlyEvent); // Salida de eventos consola
      }
    }
  }, false);
</script>
