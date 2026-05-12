/* eslint-disable no-unused-vars */
import React from 'react';
import MagicRings from './components/MagicRings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faGlobe, faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const App = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* MagicRings background */}
      <div className="absolute inset-0 z-0">
        <MagicRings
          color="#A855F7"
          colorTwo="#6366F1"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      {/* Card */}
      <div style={{
        position:'relative',
        zIndex:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        padding:'2rem 1rem',
      }}>
        <div style={{
          width:'380px',
          background:'rgba(10,8,20,0.75)',
          backdropFilter:'blur(20px)',
          WebkitBackdropFilter:'blur(20px)',
          borderRadius:'28px',
          overflow:'hidden',
          position:'relative',
          border:'1px solid rgba(139,92,246,0.2)',
          boxShadow:'0 0 60px rgba(139,92,246,0.15), 0 0 0 0.5px rgba(255,255,255,0.05)',
        }}>

          {/* Top gradient bar */}
          <div style={{height:'3px',background:'linear-gradient(90deg,#8b5cf6,#ec4899,#f59e0b)'}}/>

          {/* Glow top right */}
          <div style={{
            position:'absolute',width:'200px',height:'200px',borderRadius:'50%',
            background:'radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 70%)',
            top:'-60px',right:'-60px',pointerEvents:'none',
          }}/>

          {/* Card Inner */}
          <div style={{padding:'2rem 2rem 1.5rem'}}>

            {/* Avatar */}
            <div style={{
              width:'76px',height:'76px',borderRadius:'50%',
              background:'linear-gradient(135deg,#8b5cf6,#ec4899)',
              padding:'2.5px',marginBottom:'1.25rem',
              boxShadow:'0 0 20px rgba(139,92,246,0.4)',
            }}>
              <div style={{
                width:'100%',height:'100%',borderRadius:'50%',
                background:'#1a1625',overflow:'hidden',
              }}>
                <img
                  src="src/assets/logo.png"
                  alt="Zeba Mirza"
                  style={{width:'100%',height:'100%',objectFit:'cover'}}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;height:100%;font-family:serif;font-size:22px;color:#e2d9f3;font-weight:600">ZM</span>';
                  }}
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 style={{
              fontFamily:'Georgia,serif',fontSize:'28px',fontWeight:'600',
              color:'#f0ebff',letterSpacing:'-0.3px',lineHeight:'1.2',marginBottom:'6px',
            }}>
              Zeba <em style={{fontStyle:'italic',color:'#c4b5fd'}}>Mirza</em>
            </h1>
            <p style={{
              fontSize:'11px',fontWeight:'500',letterSpacing:'2.5px',
              textTransform:'uppercase',color:'#7c6f9e',marginBottom:'1.75rem',
            }}>
              Personal Growth Strategist
            </p>

            {/* Divider */}
            <div style={{
              height:'0.5px',
              background:'linear-gradient(90deg,rgba(139,92,246,0.5),rgba(236,72,153,0.3),transparent)',
              marginBottom:'1.5rem',
            }}/>

            {/* Contact List */}
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'14px',marginBottom:'1.75rem',padding:'0'}}>

              {[
                {icon:'fa-phone-alt', label:'Phone', value:'+91 91639 52740', href:'tel:+919163952740'},
                {icon:'fa-envelope', label:'Email', value:'thedezinehive@gmail.com', href:'mailto:thedezinehive@gmail.com'},
                {icon:'fa-globe', label:'Website', value:'thedezinehive.com', href:'https://thedezinehive.com'},
                {icon:'fa-link', label:'Also at', value:'zebamirza.com', href:'https://zebamirza.com'},
              ].map(({icon,label,value,href}) => (
                <li key={label} style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div style={{
                    width:'32px',height:'32px',borderRadius:'10px',flexShrink:0,
                    background:'rgba(139,92,246,0.1)',
                    border:'1px solid rgba(139,92,246,0.2)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                  }}>
                    <i className={`fas ${icon}`} style={{fontSize:'12px',color:'#a78bfa'}}/>
                  </div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <span style={{fontSize:'10px',color:'#5c5175',letterSpacing:'1px',textTransform:'uppercase',lineHeight:'1'}}>
                      {label}
                    </span>
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{fontSize:'13px',color:'#c4b5fd',marginTop:'3px',textDecoration:'none'}}>
                      {value}
                    </a>
                  </div>
                </li>
              ))}

            </ul>
          </div>

          {/* Footer */}
          <div style={{
            borderTop:'1px solid rgba(139,92,246,0.1)',
            padding:'1rem 2rem',
            display:'flex',justifyContent:'space-between',alignItems:'center',
            background:'rgba(139,92,246,0.04)',
          }}>
            <a href="mailto:thedezinehive@gmail.com" style={{
              fontSize:'12px',fontWeight:'500',color:'#8b5cf6',
              textDecoration:'none',letterSpacing:'0.5px',
              display:'flex',alignItems:'center',gap:'6px',
            }}>
              Get in touch <i className="fas fa-arrow-right" style={{fontSize:'11px'}}/>
            </a>
            <div style={{display:'flex',gap:'5px'}}>
              {['#8b5cf6','#ec4899','#f59e0b'].map(c => (
                <div key={c} style={{width:'6px',height:'6px',borderRadius:'50%',background:c}}/>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;