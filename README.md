# comma-demo

Repositorio local de ejemplo para validar los flujos de Comma con contenido totalmente sintético. No contiene código ni datos de un equipo real.

## Casos que representa

- Dos PRs ficticios en paralelo que tocan el mismo archivo, para probar un aviso de posible trabajo duplicado.
- Historial sintético de autores y revisiones que permite probar `/comma quién-sabe` con evidencia trazable.
- Un mapa explícito de componentes y temas en `docs/topic-map.md`.
- Eventos de muestra en `fixtures/github-events.json`; son datos de prueba, no respuestas de la API de GitHub.

El piloto de Comma debe conectar este repo de ejemplo antes de cualquier repositorio de producción. Para probar webhooks reales, se puede publicar este repo en una organización de pruebas y abrir PRs con el escenario del fixture.
