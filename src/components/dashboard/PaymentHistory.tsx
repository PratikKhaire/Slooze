"use client";

const payments = [
  { id: 1, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 2, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 3, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 4, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 5, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 6, status: "Success", email: "Youremail@email.com", amount: "$100" },
];

export function PaymentHistory() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)]">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Payment History
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-4">
        Manage your payments.
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 pb-2 border-b border-[var(--border)] text-xs text-[var(--foreground-secondary)]">
        <span>Status</span>
        <span>Email</span>
        <span className="text-right">Amount</span>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-[var(--border)]">
        {payments.map((payment) => (
          <div key={payment.id} className="grid grid-cols-3 gap-4 py-2.5 items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-sm text-[var(--foreground)]">{payment.status}</span>
            </div>
            <span className="text-sm text-[var(--foreground-secondary)]">
              {payment.email}
            </span>
            <span className="text-sm font-medium text-[var(--foreground)] text-right">
              {payment.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-1.5 text-sm bg-[#06B6D4] text-white rounded hover:bg-[#0891B2] transition-colors">
          Previous
        </button>
        <button className="px-4 py-1.5 text-sm bg-[#06B6D4] text-white rounded hover:bg-[#0891B2] transition-colors">
          Next
        </button>
      </div>
    </div>
  );
}
