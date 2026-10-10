import { createConfirmationModal } from "./confirmation-modal";

export const checkoutConfirmation = createConfirmationModal({
  title: "Confirmar compra",
  message: "Vas a completar el pedido.",
  confirmLabel: "Confirmar",
  cancelLabel: "Volver",
});
