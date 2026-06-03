export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'sanktion', label: '📋 Sanktion', icon: '📋' },
    { id: 'akte', label: '📁 Akte', icon: '📁' },
    { id: 'suspendierung', label: '⛔ Suspendierung', icon: '⛔' },
  ]

  return (
    <div className="w-80 bg-dark-sidebar border-r border-gray-700 flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8 text-white">🔵 SANKTIONSGENERATOR</h1>
      
      <div className="space-y-2 flex-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-4 py-3 rounded transition ${
              activeTab === tab.id
                ? 'bg-accent text-white font-semibold'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
        <p>Made by Sanktionsgenerator</p>
        <p>v1.0.0</p>
      </div>
    </div>
  )
}
