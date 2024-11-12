import { useState } from 'react'
import { MessageCircle, Users, Image as ImageIcon, Pencil, Send, Star } from 'lucide-react'
import '../css/artsitas_negras.css'

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

  const messages = [
    { id: 1, sender: members[0], content: 'Olá, pessoal! Alguém está trabalhando em algum projeto interessante no momento?', timestamp: '14:30' },
    { id: 2, sender: members[1], content: 'Oi Maria! Estou começando uma série de pinturas inspiradas em mulheres negras na história. E você?', timestamp: '14:32' },
    { id: 3, sender: members[0], content: 'Que incrível, Ana! Eu estou trabalhando em uma escultura que representa a força e resiliência das mulheres negras.', timestamp: '14:35' },
    { id: 4, sender: members[2], content: 'Esses projetos parecem maravilhosos! Mal posso esperar para ver o resultado final.', timestamp: '14:40' },
  ]

  return (
    <div className="community-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="community-title">Artistas negras</h1>
          <div className="member-count">
            <span>10.989 membros</span>
          </div>
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
          {messages.map((msg) => (
            <div key={msg.id} className="message-item">
              <div className="message-content">
                <div className="message-header">
                  <span className="message-sender">{msg.sender.name}</span>
                  <span className="message-timestamp">{msg.timestamp}</span>
                </div>
                <p className="message-text">{msg.content}</p>
              </div>
            </div>
          ))}
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
