'use client'

import { useState } from 'react';
import { useCssContext, ContextProps } from '../../Context/store'
import './style.css';

type Props = {}

export default function Editor({ }: Props) {

  const { setCss } = useCssContext();
  const [cssCode, setCssCode] = useState<string>('');

  return (
    <section className="editor-container">
      <div className="header">
        <div className="controll-buttons-wraper">
          <span className="controll-button close-button"></span>
          <span className="controll-button minmize-button"></span>
          <span className="controll-button maxmize-button"></span>
        </div>
        <button onClick={() => setCss(cssCode)}>run</button>
      </div>
      <div className="body">
        <textarea onChange={(event) => setCssCode(event.target.value)}>
          {cssCode}
        </textarea>
      </div>
    </section>
  )
}