export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-80 bg-[#1a1a1a] border-r border-gray-700 flex flex-col p-6 fixed h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-8 text-white">🔵 SANKTIONSGENERATOR</h1>
      
      <nav className="space-y-2 flex-1">
        <button
          onClick={() => setActiveTab('sanktion')}
          className={`w-full text-left px-4 py-3 rounded font-medium transition ${
            activeTab === 'sanktion'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          📋 Sanktion
        </button>
        
        <button
          onClick={() => setActiveTab('akte')}
          className={`w-full text-left px-4 py-3 rounded font-medium transition ${
            activeTab === 'akte'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          📁 Akte
        </button>
        
        <button
          onClick={() => setActiveTab('suspendierung')}
          className={`w-full text-left px-4 py-3 rounded font-medium transition ${
            activeTab === 'suspendierung'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          🚫 Suspendierung
        </button>
      </nav>

      <div className="text-xs text-gray-500 border-t border-gray-700 pt-4 space-y-1">
        <p>Sanktionsgenerator</p>
        <p>v1.0.0</p>
      </div>
    </div>
  )
}
