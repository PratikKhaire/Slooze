"use client";

const payments = [
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
  { status: "Success", email: "Youremail@email.com", amount: "$100" },
];

export function PaymentHistory() {
  return (
    <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] flex flex-col h-full">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
        Payment History
      </h3>
      <p className="text-sm text-[var(--foreground-secondary)] mb-4">
        Manage your payments.
      </p>

      {/* Table */}
      <div className="flex-1 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-2 text-xs font-medium text-[var(--foreground-secondary)]">Status</th>
              <th className="text-left py-2 text-xs font-medium text-[var(--foreground-secondary)]">Email</th>
              <th className="text-right py-2 text-xs font-medium text-[var(--foreground-secondary)]">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-b border-[var(--border)] last:border-b-0">
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="w-3 h-3 accent-[#10B981]" />
                    <span className="text-xs text-[var(--foreground)]">{payment.status}</span>
                  </div>
                </td>
                <td className="py-2">
                  <span className="text-xs text-[var(--foreground)]">{payment.email}</span>
                </td>
                <td className="text-right py-2">
                  <span className="text-xs font-medium text-[var(--foreground)]">{payment.amount}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-1.5 text-xs font-medium bg-[#10B981] text-white rounded hover:bg-[#059669] transition-colors">
          Previous
        </button>
        <button className="px-4 py-1.5 text-xs font-medium bg-[#10B981] text-white rounded hover:bg-[#059669] transition-colors">
          Next
        </button>
      </div>
    </div>
  );
}
