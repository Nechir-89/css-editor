import './style.css'
type Props = {}

export default function Viewer({ }: Props) {
  return (
    <section className="view-container">
      {/* type html code in this section */}
      <div className="flex-container">
        <div className='item'>Hello</div>
        <div className='item'>Hey</div>
        <div className='item'>Hi</div>
      </div>
    </section>
  )
}