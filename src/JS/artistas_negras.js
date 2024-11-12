//precisa colocar pra ver a pag por meio da url (esqueci como faz)

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, Users, Image as ImageIcon, Pencil, Send, Star } from 'lucide-react'
import './artistas-negras.css'

export default function CommunityPage() {
    const [message, setMessage] = useState('')

  const channels = [
    { id: 1, name: 'boas-vindas', type: 'text', icon: Star },
    { id: 2, name: 'compartilhe-sua-arte', type: 'gallery', icon: ImageIcon },
    { id: 3, name: 'conversas-gerais', type: 'text', icon: MessageCircle },
    { id: 4, name: 'projetos-colaborativos', type: 'text', icon: Pencil },
  ]

  const members = [
    { id: 1, name: 'Maria Silva', status: 'online', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 2, name: 'Ana Oliveira', status: 'online', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 3, name: 'Beatriz Lima', status: 'offline', avatar: '/placeholder.svg?height=40&width=40' },
  ]

  return (
    <div className="community-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="community-title">Artistas negras</h1>
          <div className="member-count">
            <span>10.989 membros</span>
            <div className="member-count-dot" />
          </div>
          <div className="decorative-circle-large" />
          <div className="decorative-circle-small" />
        </div>
        
        <div className="channel-list">
          {channels.map(channel => {
            const Icon = channel.icon
            return (
              <div key={channel.id} className="channel-item">
                <Icon size={18} className="channel-icon" />
                <span className="channel-name">{channel.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="main-content">
        <div className="channel-header">
          <div className="channel-title">
            <MessageCircle size={24} className="channel-icon" />
            <h2>conversas-gerais</h2>
          </div>
          <Users className="channel-icon" />
        </div>

        <div className="messages-container">
          <div className="decorative-circle-top-right" />
          <div className="decorative-circle-bottom-left" />
        </div>

        <div className="message-input-container">
          <div className="message-input-wrapper">
            <button className="input-button">
              <ImageIcon size={20} />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Compartilhe suas ideias..."
              className="message-input"
            />
            <button 
              className="input-button"
              onClick={() => setMessage('')}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="members-sidebar">
        <h2 className="members-title">
          <Users size={16} />
          Membros online
        </h2>
        {members.map(member => (
          <div key={member.id} className="member-item">
            <div className="member-avatar-container">
              <Image 
                src={member.avatar} 
                alt={member.name} 
                width={40} 
                height={40} 
                className="member-avatar"
              />
              <div className={`member-status ${member.status === 'online' ? 'member-status-online' : 'member-status-offline'}`} />
            </div>
            <span className="member-name">{member.name}</span>
          </div>
        ))}
        <div className="decorative-circle-bottom-right" />
      </div>
    </div>
  )
}
