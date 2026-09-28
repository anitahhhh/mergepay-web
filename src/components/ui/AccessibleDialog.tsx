import React, { useEffect, useRef } from 'react';
export function AccessibleDialog({ isOpen, onClose, children }: any) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) ref.current?.showModal();
    else ref.current?.close();
  }, [isOpen]);
  return <dialog ref={ref} onClose={onClose} className="p-4 rounded">{children}</dialog>;
}
