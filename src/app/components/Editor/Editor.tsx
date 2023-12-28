'use client'

import { useCssContext, ContextProps } from '../../Context/store'
import './style.css';

type Props = {}

export default function Editor({ }: Props) {
  // @ts-ignore
  const { css, setCss } = useCssContext<ContextProps>();
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
        <textarea onChange={(event) => setCss(event.target.value)}>
          {css}
        </textarea>
      </div>
    </section>
  )
}