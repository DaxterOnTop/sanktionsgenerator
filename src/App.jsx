import { useState } from 'react'
import Sidebar from './components/Sidebar'
import SanktionGenerator from './components/SanktionGenerator'
import ArchiveViewer from './components/ArchiveViewer'
import SuspensionForm from './components/SuspensionForm'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('sanktion')

  return (
    <div className="flex h-screen bg-dark-bg text-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'sanktion' && <SanktionGenerator />}
        {activeTab === 'akte' && <ArchiveViewer />}
        {activeTab === 'suspendierung' && <SuspensionForm />}
      </div>
    </div>
  )
}

export default App
