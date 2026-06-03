import { useState } from 'react'

export default function SuspensionForm() {
  const [form, setForm] = useState({
    name: '',
    spielerId: '',
    grund: '',
    sanktionLink: '',
    ehemaligenRang: '',
    zeitraum: 'Bis Sanktion erfüllt ist',
  })

  const rangs = [
    '– Rang wählen –',
    '01. Officer',
    '02. Senior Officer',
    '03. Inspector',
    '04. Senior Inspector',
    '05. Lieutenant',
  ]

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">⛔ Suspendierungs-Formular</h2>

      <div className="bg-dark-sidebar p-6 rounded border border-gray-700 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Vor- u. Nachname</label>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Reisepassnummer (ID)</label>
          <input
            type="text"
            placeholder="Spieler ID"
            value={form.spielerId}
            onChange={(e) => setForm({ ...form, spielerId: e.target.value })}
            className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Grund</label>
          <textarea
            placeholder="Grund der Suspendierung"
            value={form.grund}
            onChange={(e) => setForm({ ...form, grund: e.target.value })}
            className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500 h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Sanktion: [Discord Post Link]</label>
          <input
            type="text"
            placeholder="Discord Nachrichtslink"
            value={form.sanktionLink}
            onChange={(e) => setForm({ ...form, sanktionLink: e.target.value })}
            className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Ehem. Rang</label>
          <select
            value={form.ehemaligenRang}
            onChange={(e) => setForm({ ...form, ehemaligenRang: e.target.value })}
            className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white"
          >
            {rangs.map((rang) => (
              <option key={rang} value={rang}>
                {rang}
              </option>
            ))}
          </select>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400 mb-2">Aktueller Rang:</p>
          <p className="text-lg font-semibold text-accent">02. Sanctioned Officer</p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Zeitraum</label>
          <input
            type="text"
            placeholder="Bis Sanktion erfüllt ist"
            value={form.zeitraum}
            onChange={(e) => setForm({ ...form, zeitraum: e.target.value })}
            className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
          />
        </div>

        <button className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition mt-6">
          ✓ Suspendierung Registrieren
        </button>
      </div>
    </div>
  )
}
