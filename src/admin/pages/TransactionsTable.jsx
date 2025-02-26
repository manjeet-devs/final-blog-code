import { Check } from "lucide-react"

const transactions = [
  {
    code: "BT92X",
    user: "alex.sear@spml.com",
    date: "2025/01/1",
    frequency: "Monthly",
    succeeded: true,
    amount: 18.99,
  },
  {
    code: "VH54P",
    user: "john.doe@gmail.com",
    date: "2025/17/1",
    frequency: "Yearly",
    succeeded: false,
    amount: 165.99,
  },
  {
    code: "NS62A",
    user: "sarah.jane@email.com",
    date: "2025/16/1",
    frequency: "Yearly",
    succeeded: true,
    amount: 165.99,
  },
  {
    code: "GA46E",
    user: "liza.miller@tech.com",
    date: "2025/14/1",
    frequency: "Monthly",
    succeeded: true,
    amount: 18.99,
  },
  {
    code: "JC82L",
    user: "mike.todd@email.com",
    date: "2025/16/1",
    frequency: "Monthly",
    succeeded: false,
    amount: 18.99,
  },
  {
    code: "JC82L",
    user: "mike.todd@email.com",
    date: "2025/16/1",
    frequency: "Monthly",
    succeeded: true,
    amount: 18.99,
  },
]

export default function TransactionsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="text-left text-gray-600 dark:text-gray-400">
          <tr>
            <th className="pb-4 font-normal">Code</th>
            <th className="pb-4 font-normal">User</th>
            <th className="pb-4 font-normal hidden sm:table-cell">Date</th>
            <th className="pb-4 font-normal hidden md:table-cell">Frequency</th>
            <th className="pb-4 font-normal">Succeeded</th>
            <th className="pb-4 font-normal text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="text-gray-900 dark:text-white">
          {transactions.map((transaction, index) => (
            <tr key={index} className={index === 0 ? "bg-gray-100 dark:bg-gray-700 rounded-lg" : ""}>
              <td className="py-2 px-2">{transaction.code}</td>
              <td className="py-2 px-2">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>
                  <span className="hidden sm:inline">{transaction.user}</span>
                </div>
              </td>
              <td className="py-2 px-2 hidden sm:table-cell">{transaction.date}</td>
              <td className="py-2 px-2 hidden md:table-cell">
                <span
                  className={`${transaction.frequency === "Yearly" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"}`}
                >
                  {transaction.frequency}
                </span>
              </td>
              <td className="py-2 px-2">{transaction.succeeded && <Check className="text-green-500 h-5 w-5" />}</td>
              <td className="py-2 px-2 text-right">${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 space-x-2">
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600">
          Previous
        </button>
        <button className="px-3 py-1 rounded bg-purple-600 text-white">1</button>
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600">
          2
        </button>
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600">
          3
        </button>
        <span className="px-3 py-1 text-gray-600 dark:text-gray-400">...</span>
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600">
          Next
        </button>
      </div>
    </div>
  )
}

