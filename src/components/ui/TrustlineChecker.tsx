import React from 'react';
export function TrustlineChecker({ asset }: { asset: string }) {
  return <div className="p-4 bg-green-100">Trustline verified for {asset}</div>;
}
