export default function Avatar ({ alt, src, text }) {
  return (
    <>
      <div className='container'>
        <img src={src} alt={alt} title={alt} className='avatar'/>
        {text && <strong>{text || alt}</strong>}
      </div>

      <style jsx>{`
        .avatar {
          border-radius: 999px;
          height: 49px;
          width: 49px;
        }
        
        .container {
          align-items: center;
          display: flex;
        }
        
        .avatar + strong {
          margin-left: 8px;
        }
      `}</style>
    </>
  )
}
