import React from 'react'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          VM Eventos
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Transformando seus eventos em experiências inesquecíveis
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <h3>Casamentos</h3>
            <p>Cerimônias únicas e personalizadas</p>
          </div>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <h3>Corporativo</h3>
            <p>Eventos empresariais profissionais</p>
          </div>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
            <h3>Aniversários</h3>
            <p>Celebrações memoráveis</p>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            Deploy realizado com sucesso no Vercel 🚀
          </p>
        </div>
      </div>
    </div>
  )
}

export default App