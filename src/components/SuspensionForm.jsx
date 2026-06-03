export default function SuspensionForm() {
  const rangs = [
    '– Rang wählen –',
    '01. Officer',
    '02. Senior Officer',
    '03. Inspector',
    '04. Senior Inspector',
    '05. Lieutenant',
  ]

  return (
    <div className="ml-80 p-8 bg-[#0f0f0f] min-h-screen">
      <h2 className="text-3xl font-bold mb-6">🚫 Suspendierungs-Formular</h2>

      <div className="bg-[#1a1a1a] p-6 rounded border border-gray-700 space-y-4 max-w-2xl">
        <input
          type="text"
          placeholder="Vor- u. Nachname"
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Reisepassnummer (ID)"
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Grund der Suspendierung"
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 h-20 focus:outline-none focus:border-blue-500 resize-none"
        />

        <input
          type="text"
          placeholder="Discord Nachrichtslink"
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />

        <select className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500">
          {rangs.map((rang) => (
            <option key={rang} value={rang}>
              {rang}
            </option>
          ))}
        </select>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400 mb-2">Aktueller Rang:</p>
          <p className="text-lg font-semibold text-blue-500">02. Sanctioned Officer</p>
        </div>

        <input
          type="text"
          placeholder="Zeitraum"
          defaultValue="Bis Sanktion erfüllt ist"
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition">
          ✓ Suspendierung Registrieren
        </button>
      </div>
    </div>
  )
}
