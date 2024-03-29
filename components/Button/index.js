import { colors } from '../../styles/theme'

export default function Button ({ children, disabled, onClick }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background: ${colors.black};
          border: 0;
          color: #fff;
          cursor: pointer;
          border-radius: 9999px;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity .3s ease;
          user-select: none;
        }
        
        button[disabled] {
          pointer-events: none;
          opacity: 0.2;
        }
        
        button > :global(svg) {
          margin-right: 8px;
        }
        
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
