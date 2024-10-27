import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import Image from 'next/image'
import styles from '../styles/MobileNav.module.css'

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-x-0 top-0 bg-black z-50 transition-all duration-300 ${isOpen ? 'h-screen' : 'h-0 overflow-hidden'}`}>
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span className="ml-2 text-2xl font-bold text-white">Project Quest</span>
          </div>
          <button onClick={onClose} className="text-white bg-gray-800 p-2 rounded-md" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-6">
            <li><Link href="#" className="text-white text-xl" onClick={onClose}>Applications</Link></li>
            <li><Link href="#" className="text-white text-xl" onClick={onClose}>Stuff</Link></li>
            <li><Link href="#" className="text-white text-xl" onClick={onClose}>Stuff</Link></li>
            <li><Link href="#" className="text-white text-xl" onClick={onClose}>Stuff</Link></li>
          </ul>
        </nav>
        <div className="space-y-4 mt-auto">
          <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-md">Discord</button>
          <button className="w-full py-2 px-4 text-white border border-white rounded-md">Get Started</button>
        </div>
      </div>
    </div>
  )
}