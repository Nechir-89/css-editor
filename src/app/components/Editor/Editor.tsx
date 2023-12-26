import './style.css';

type Props = {}

export default function Editor({ }: Props) {
  return (
    <section className="editor-container">
      <div className="header">
        <div className="controll-buttons-wraper">
          <span className="controll-button close-button"></span>
          <span className="controll-button minmize-button"></span>
          <span className="controll-button maxmize-button"></span>
        </div>
        <button>run</button>
      </div>
      <div className="body">
        <textarea>

        </textarea>
      </div>
    </section>
  )
}