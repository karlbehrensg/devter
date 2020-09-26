import AppLayout from 'components/AppLayout'
import { useEffect, useState } from 'react'
import Devit from '../../components/Devit'
import useUser from '../../hooks/useUser'
import { fetchLatestDevits } from '../../firebase/client'

export default function HomePage () {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, [user])
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ createdAt, id, userName, avatar, content, userId }) => (
            <Devit
              createdAt={createdAt}
              avatar={avatar}
              id={id}
              key={id}
              content={content}
              userName={userName}
              userId={userId}
            />
          ))}
        </section>
        <nav/>
        <style jsx>{`
          
          article {
            display: flex;
            padding: 10px 15px;
          }

          header {
            align-items: center;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
            border-bottom: 1px solid #eee;
            height: 49px;
            position: sticky;
            top: 0;
            display: flex;
            position: sticky;
            border-bottom: 1px solid #ccc;
            width: 100%;
          }
          
          h2 {
            font-size: 21px;
            font-weight: 800;
            padding-left: 15px;
          }
          
          nav {
            background: #fff;
            bottom: 0;
            border-top: 1px solid #eee;
            height: 49px;
            position: sticky;
            width: 100%;
          }
        `}</style>
      </AppLayout>
    </>
  )
}
