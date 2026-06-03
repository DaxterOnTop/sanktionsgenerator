import { useState } from 'react'
import Sidebar from './components/Sidebar'
import SanktionGenerator from './components/SanktionGenerator'
import ArchiveViewer from './components/ArchiveViewer'
import SuspensionForm from './components/SuspensionForm'

function App() {
  const [activeTab, setActiveTab] = useState('sanktion')

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-auto bg-[#0f0f0f]">
        {activeTab === 'sanktion' && <SanktionGenerator />}
        {activeTab === 'akte' && <ArchiveViewer />}
        {activeTab === 'suspendierung' && <SuspensionForm />}
      </div>
    </div>
  )
}

export default App
