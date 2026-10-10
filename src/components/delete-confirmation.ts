import { createConfirmationModal } from "./confirmation-modal";

export const deleteConfirmation = createConfirmationModal({
  title: "Eliminar elemento",
  message: "Esta acción no se puede deshacer.",
  confirmLabel: "Eliminar",
  cancelLabel: "Cancelar",
});
