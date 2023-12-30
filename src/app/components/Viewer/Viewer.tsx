'use client'

// import { createRef } from 'react'
import { useCssContext } from '../../Context/store'
import './style.css'
type Props = {}

export default function Viewer({ }: Props) {

  const { css } = useCssContext();
  // steps
  // 01: split up string based on period
  let arrayOfClasses = css.split('.');
  arrayOfClasses.shift();

  let classNames = arrayOfClasses?.map(cssClass => cssClass.slice(0, cssClass.indexOf('{')));

  classNames?.map((name, index) => {
    console.log('elements for class: ' + index + ' (' + name + ')');
    // HTML Collection
    const domElements = document.getElementsByClassName(name);

    // NodeList
    // const test = document.querySelectorAll('.' + name);

    // test2.style
    // test.forEach(element => {
    // const elementRef = createRef();
    // element.ref = elementRef;
    // @ts-ignore
    // element.setAttribute('style', 'display: flex');

    // console.log(element)
    // });
    // test.values(val => val)
    // console.log(test)
    const selector = arrayOfClasses[index];
    const start = selector.indexOf('{') + 1;
    const end = selector.indexOf('}');

    const style = selector.slice(start, end)
    console.log(style);
    for (let i = 0; i < domElements.length; i++) {
      domElements.item(i)?.setAttribute('style', `${style}`);
    }
    // console.log(domElements);
  })
  // 02: find dom with the class name and assign style to it
  return (
    <section className="view-container">
      {/* type html code in this section */}
      <div className="container">
        <div className='item'>Hello</div>
        <div className='item'>Hey</div>
        <div className='item'>Hi</div>
      </div>
    </section>
  )
}