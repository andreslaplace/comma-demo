export type ConfirmationModalOptions = {
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
};

export function createConfirmationModal(options: ConfirmationModalOptions) {
  return {
    component: "ConfirmationModal",
    ...options,
  };
}
