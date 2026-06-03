import { useState } from 'react'

export default function SanktionGenerator() {
  const [form, setForm] = useState({
    name: '',
    spielerId: '',
    beschuldigung: '',
    sanktionen: {
      hl: { checked: false, value: '' },
      ngrunden: { checked: false, value: '' },
      lobbyarbeit: { checked: false, value: '' },
      geldstrafe: { checked: false, value: '' },
      strike: { checked: false, value: '' },
      kuendigung: { checked: false, value: false },
    },
    autorName: '',
    abteilung: '',
    rolle: '',
  })

  const [sanktionText, setSanktionText] = useState('')

  const generateSanktion = () => {
    let strafenList = []
    if (form.sanktionen.hl.checked && form.sanktionen.hl.value) {
      strafenList.push(`- ${form.sanktionen.hl.value}min Humane Labs`)
    }
    if (form.sanktionen.ngrunden.checked && form.sanktionen.ngrunden.value) {
      strafenList.push(`- ${form.sanktionen.ngrunden.value}x NG-Runden`)
    }
    if (form.sanktionen.lobbyarbeit.checked && form.sanktionen.lobbyarbeit.value) {
      strafenList.push(`- ${form.sanktionen.lobbyarbeit.value}min Lobbyarbeit`)
    }
    if (form.sanktionen.geldstrafe.checked && form.sanktionen.geldstrafe.value) {
      strafenList.push(`- $${parseInt(form.sanktionen.geldstrafe.value).toLocaleString('de-DE')},- Geldstrafe`)
    }
    if (form.sanktionen.strike.checked && form.sanktionen.strike.value) {
      strafenList.push(`- ${form.sanktionen.strike.value}x Strike`)
    }
    if (form.sanktionen.kuendigung.checked) {
      strafenList.push(`- Kündigung`)
    }

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

  const copySanktion = () => {
    navigator.clipboard.writeText(sanktionText)
    alert('Sanktion in die Zwischenablage kopiert!')
  }

  const handleSanktionChange = (key, subKey, value) => {
    setForm(prev => ({
      ...prev,
      sanktionen: {
        ...prev.sanktionen,
        [key]: {
          ...prev.sanktionen[key],
          [subKey]: value,
        }
      }
    }))
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">📋 Sanktion Generator</h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Name des Beschuldigten</label>
            <input
              type="text"
              placeholder="Vorname Nachname"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Spieler ID</label>
            <input
              type="text"
              placeholder="z.B. 12345"
              value={form.spielerId}
              onChange={(e) => setForm({ ...form, spielerId: e.target.value })}
              className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Verstoß/Beschuldigung</label>
            <textarea
              placeholder="z.B. §1.0 Respektloses Verhalten"
              value={form.beschuldigung}
              onChange={(e) => setForm({ ...form, beschuldigung: e.target.value })}
              className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500 h-24"
            />
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h3 className="font-semibold mb-3">Sanktionen</h3>
            <div className="space-y-3">
              {[
                { key: 'hl', label: 'Humane Labs', unit: 'min' },
                { key: 'ngrunden', label: 'NG-Runden', unit: 'x' },
                { key: 'lobbyarbeit', label: 'Lobbyarbeit', unit: 'min' },
                { key: 'geldstrafe', label: 'Geldstrafe', unit: '$' },
                { key: 'strike', label: 'Strike', unit: 'x' },
              ].map(({ key, label, unit }) => (
                <div key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.sanktionen[key].checked}
                    onChange={(e) => handleSanktionChange(key, 'checked', e.target.checked)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <input
                    type="text"
                    placeholder={`${unit} eingeben`}
                    value={form.sanktionen[key].value}
                    onChange={(e) => handleSanktionChange(key, 'value', e.target.value)}
                    disabled={!form.sanktionen[key].checked}
                    className="flex-1 px-3 py-1 bg-dark-input border border-gray-600 rounded text-white disabled:opacity-50"
                  />
                </div>
              ))}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.sanktionen.kuendigung.checked}
                  onChange={(e) => handleSanktionChange('kuendigung', 'checked', e.target.checked)}
                  className="w-4 h-4 cursor-pointer"
                />
                <label className="text-white">Kündigung</label>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 space-y-3">
            <input
              type="text"
              placeholder="Ihr Name"
              value={form.autorName}
              onChange={(e) => setForm({ ...form, autorName: e.target.value })}
              className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Abteilung (z.B. Intelligence Unit)"
              value={form.abteilung}
              onChange={(e) => setForm({ ...form, abteilung: e.target.value })}
              className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Interner Rang/Rolle"
              value={form.rolle}
              onChange={(e) => setForm({ ...form, rolle: e.target.value })}
              className="w-full px-4 py-2 bg-dark-input border border-gray-600 rounded text-white placeholder-gray-500"
            />
          </div>

          <button
            onClick={generateSanktion}
            className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            ✓ Sanktion Generieren
          </button>
        </div>

        {/* Right: Preview */}
        <div>
          <h3 className="font-semibold mb-3">Vorschau Discord</h3>
          <div className="bg-dark-sidebar p-4 rounded border border-gray-700 min-h-96 font-mono text-sm whitespace-pre-wrap break-words">
            {sanktionText || '(Vorschau erscheint hier nach Generierung)'}
          </div>
          {sanktionText && (
            <button
              onClick={copySanktion}
              className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              📋 In Zwischenablage kopieren
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
