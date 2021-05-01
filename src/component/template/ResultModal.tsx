import 'src/asset/scss/component/ResultModal.scss'
import ResultSlot from 'src/component/organism/ResultSlot'

interface Props {
  targetRound: number
}

const ResultModal = ({ targetRound }: Props) => {
  return (
    <div className="resultModalWrapper">
      <section className="result">
        <ResultSlot />
      </section>
      <section className="conflict">conflict</section>
    </div>
  )
}

export default ResultModal
