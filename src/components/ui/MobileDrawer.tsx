import React from 'react';
export function MobileDrawer({ isOpen, actions }: any) {
  if (!isOpen) return null;
  return <div className="fixed bottom-0 w-full bg-white rounded-t-xl p-4 shadow-lg z-50">
    <div className="flex flex-col space-y-2">
      {actions.map((act: any, i: number) => <button key={i} onClick={act.onClick} className="p-3 bg-gray-100 rounded">{act.label}</button>)}
    </div>
  </div>;
}
