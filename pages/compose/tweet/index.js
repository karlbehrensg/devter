import AppLayout from 'components/AppLayout'
import Button from '../../../components/Button'
// import useUser from '../../../hooks/useUser'

export default function ComposeTweet () {
  // const user = useUser()

  return (
    <>
      <AppLayout>
        <form>
          <textarea placeholder="¿Qué esta pasando?"></textarea>
          <Button>Devitear</Button>
        </form>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }
        
        textarea {
          min-height: 200px;
          outline: 0;
          border: 0;
          padding: 15px;
          font-size: 21px;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}
