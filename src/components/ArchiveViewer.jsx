import { useState, useEffect } from 'react'

export default function ArchiveViewer() {
  const [archives, setArchives] = useState([])
  const [selectedArchive, setSelectedArchive] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('archives')
    if (stored) {
      setArchives(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">📁 Akten-Archiv</h2>

      {archives.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <p>Noch keine Akten vorhanden</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8">
          {/* Archive List */}
          <div className="space-y-2">
            {archives.map((archive) => (
              <button
                key={archive.id}
                onClick={() => setSelectedArchive(archive)}
                className={`w-full text-left px-4 py-3 rounded transition ${
                  selectedArchive?.id === archive.id
                    ? 'bg-accent text-white'
                    : 'bg-dark-sidebar hover:bg-gray-700'
                }`}
              >
                {archive.fallnummer}
              </button>
            ))}
          </div>

          {/* Archive Details */}
          {selectedArchive && (
            <div className="bg-dark-sidebar p-6 rounded border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">{selectedArchive.fallnummer}</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-gray-400">Spieler:</span> {selectedArchive.name}</p>
                <p><span className="text-gray-400">ID:</span> {selectedArchive.spielerId}</p>
                <p><span className="text-gray-400">Verstoß:</span> {selectedArchive.verstoß}</p>
                <p><span className="text-gray-400">Straf-Link:</span> <a href={selectedArchive.strafLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Link</a></p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
