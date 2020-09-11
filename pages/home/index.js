import AppLayout from 'components/AppLayout'
import { useEffect, useState } from 'react'
import Devit from '../../components/Devit'

export default function HomePage () {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/statuses/home_timeline')
      .then(res => res.json())
      .then(setTimeline)
  }, [])
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Devit
              avatar={avatar}
              id={id}
              key={id}
              message={message}
              username={username}
            />
          ))}
        </section>
        <nav></nav>
        <style jsx>{`
          section {
            padding-top: 49px;
          }
          
          article {
            display: flex;
            padding: 10px 15px;
          }

          header {
            align-items: center;
            height: 49px;
            position: sticky;
            top: 0;
            display: flex;
            border-bottom: 1px solid #ccc;
            width: 100%;
          }
          
          h2 {
            font-size: 21px;
            font-weight: 800;
          }
          
          nav {
            bottom: 0;
            border-top: 1px solid #ccc;
            height: 49px;
            position: sticky;
            width: 100%;
          }
        `}</style>
      </AppLayout>
    </>
  )
}
