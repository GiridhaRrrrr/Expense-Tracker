import { TransactionForm } from '@/components/TransactionForm';
import { TransactionList } from '@/components/TransactionList';

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Transactions</h1>
        <p className="text-muted-foreground">
          Manage your income and expenses
        </p>
      </div>

      <TransactionForm />
      <TransactionList />
    </div>
  );
}