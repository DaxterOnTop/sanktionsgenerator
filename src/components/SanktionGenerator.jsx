import { useState } from 'react'

export default function SanktionGenerator() {
  const [form, setForm] = useState({
    name: '',
    spielerId: '',
    beschuldigung: '',
    hl: '',
    ngrunden: '',
    lobbyarbeit: '',
    geldstrafe: '',
    strike: '',
    kuendigung: false,
    autorName: '',
    abteilung: '',
    rolle: '',
  })

  const [sanktionText, setSanktionText] = useState('')

  const generateSanktion = () => {
    if (!form.name || !form.beschuldigung) {
      alert('Bitte fülle Name und Verstoß aus!')
      return
    }

    let strafenList = []
    if (form.hl) strafenList.push(`- ${form.hl}min Humane Labs`)
    if (form.ngrunden) strafenList.push(`- ${form.ngrunden}x NG-Runden`)
    if (form.lobbyarbeit) strafenList.push(`- ${form.lobbyarbeit}min Lobbyarbeit`)
    if (form.geldstrafe) strafenList.push(`- $${parseInt(form.geldstrafe).toLocaleString('de-DE')},- Geldstrafe`)
    if (form.strike) strafenList.push(`- ${form.strike}x Strike`)
    if (form.kuendigung) strafenList.push(`- Kündigung`)

    const text = `Sehr geehrter @${form.name},

Ihnen wurde eine Sanktion in Folge vorliegender Beweise ausgestellt.

Verstoß:
> - ${form.beschuldigung}

Strafe:
${strafenList.map(s => `> ${s}`).join('\n')}

Sollte die Sanktion innerhalb **48h** nicht beglichen sein, muss mit weiteren Schritten gerechnet werden.
Bis sie die Sanktion abgeleistet haben erhalten sie **Rang 2**. Achten sie beim Abarbeiten auf eine gültige verwertbare Bodycam!
In Sanktionen wird **NICHT** unnötig kommentiert.

Mit freundlichen Grüßen,
@${form.autorName}
-# ${form.abteilung}
-# ${form.rolle}`

    setSanktionText(text)
  }

  const copySanktion = async () => {
    try {
      await navigator.clipboard.writeText(sanktionText)
      alert('✓ In Zwischenablage kopiert!')
    } catch (err) {
      alert('Fehler beim Kopieren')
    }
  }

  return (
    <div className="ml-80 p-8 bg-[#0f0f0f] min-h-screen">
      <h2 className="text-3xl font-bold mb-6">📋 Sanktion Generator</h2>

      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name des Beschuldigten"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Spieler ID"
            value={form.spielerId}
            onChange={(e) => setForm({ ...form, spielerId: e.target.value })}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />

          <textarea
            placeholder="Verstoß (z.B. §1.0 Respektloses Verhalten)"
            value={form.beschuldigung}
            onChange={(e) => setForm({ ...form, beschuldigung: e.target.value })}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 h-20 focus:outline-none focus:border-blue-500 resize-none"
          />

          <div className="bg-[#1a1a1a] p-4 rounded border border-gray-700">
            <h3 className="font-semibold mb-3">Sanktionen</h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input type="checkbox" id="hl" className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="min"
                  value={form.hl}
                  onChange={(e) => setForm({ ...form, hl: e.target.value })}
                  className="flex-1 px-3 py-1 bg-[#2a2a2a] border border-gray-600 rounded text-white text-sm focus:outline-none"
                />
                <label htmlFor="hl" className="text-sm text-gray-300">Humane Labs</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" id="ng" className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="x"
                  value={form.ngrunden}
                  onChange={(e) => setForm({ ...form, ngrunden: e.target.value })}
                  className="flex-1 px-3 py-1 bg-[#2a2a2a] border border-gray-600 rounded text-white text-sm focus:outline-none"
                />
                <label htmlFor="ng" className="text-sm text-gray-300">NG-Runden</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" id="lobby" className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="min"
                  value={form.lobbyarbeit}
                  onChange={(e) => setForm({ ...form, lobbyarbeit: e.target.value })}
                  className="flex-1 px-3 py-1 bg-[#2a2a2a] border border-gray-600 rounded text-white text-sm focus:outline-none"
                />
                <label htmlFor="lobby" className="text-sm text-gray-300">Lobbyarbeit</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" id="geld" className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="$"
                  value={form.geldstrafe}
                  onChange={(e) => setForm({ ...form, geldstrafe: e.target.value })}
                  className="flex-1 px-3 py-1 bg-[#2a2a2a] border border-gray-600 rounded text-white text-sm focus:outline-none"
                />
                <label htmlFor="geld" className="text-sm text-gray-300">Geldstrafe</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" id="strike" className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="x"
                  value={form.strike}
                  onChange={(e) => setForm({ ...form, strike: e.target.value })}
                  className="flex-1 px-3 py-1 bg-[#2a2a2a] border border-gray-600 rounded text-white text-sm focus:outline-none"
                />
                <label htmlFor="strike" className="text-sm text-gray-300">Strike</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="kuen"
                  checked={form.kuendigung}
                  onChange={(e) => setForm({ ...form, kuendigung: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="kuen" className="text-sm text-gray-300">Kündigung</label>
              </div>
            </div>
          </div>

          <input
            type="text"
            placeholder="Ihr Name"
            value={form.autorName}
            onChange={(e) => setForm({ ...form, autorName: e.target.value })}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Abteilung (z.B. Intelligence Unit)"
            value={form.abteilung}
            onChange={(e) => setForm({ ...form, abteilung: e.target.value })}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Rang/Rolle"
            value={form.rolle}
            onChange={(e) => setForm({ ...form, rolle: e.target.value })}
            className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />

          <button
            onClick={generateSanktion}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition"
          >
            ✓ Sanktion Generieren
          </button>
        </div>

        {/* Preview */}
        <div>
          <h3 className="font-semibold mb-3">📋 Vorschau Discord</h3>
          <div className="bg-[#1a1a1a] p-4 rounded border border-gray-700 min-h-96 font-mono text-sm whitespace-pre-wrap break-words overflow-auto text-gray-200">
            {sanktionText || '(Vorschau erscheint hier nach Generierung)'}
          </div>
          {sanktionText && (
            <button
              onClick={copySanktion}
              className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              📋 Kopieren
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
