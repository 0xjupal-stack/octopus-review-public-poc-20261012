export interface PaymentSession {
  accountId: string;
  sessionId: string;
  active: boolean;
}

export interface PaymentTransaction {
  id: string;
  accountId: string;
  amount: number;
}

export function canAuthorizePayment(
  session: PaymentSession,
  transaction: PaymentTransaction
): boolean {
  if (!session.active) return false;
  if (transaction.amount <= 0) return false;

  return session.accountId === transaction.accountId;
}
