import { Users, DollarSign, TrendingUp, Download } from "lucide-react"
import React, { useState } from 'react';
import TransactionsTable from "./TransactionsTable"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200 flex items-center">
          <span className="mr-2">+</span> New Invoice
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard title="Subscriptions" value="1240" change="+10%" icon={<Users className="h-6 w-6" />} />
        <MetricCard title="Revenue" value="$35,231.81" change="+22%" icon={<DollarSign className="h-6 w-6" />} />
        <MetricCard title="MRR" value="$5,632" change="+14%" icon={<TrendingUp className="h-6 w-6" />} />

      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Last Transactions</h3>
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
        <TransactionsTable />
      </div>
    </div>
  )
}

function MetricCard({ title, value, change, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-600 dark:text-gray-400">{title}</h3>
        <div className="text-purple-600 dark:text-purple-400">{icon}</div>
      </div>
      <div className="flex items-baseline">
        <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mr-2">{value}</span>
        <span className="text-green-500 text-sm">{change}</span>
      </div>
      <div className="mt-4 bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "60%" }}></div>
      </div>
    </div>
  )
}

