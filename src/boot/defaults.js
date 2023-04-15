import { boot } from 'quasar/wrappers'
import { QInput, QCard } from 'quasar'

export default boot(() => {
  QInput.props.outlined = {
    type: QInput.props.outlined,
    default: true,
  }
  QInput.props.square = {
    type: QInput.props.square,
    default: true,
  }

  QCard.props.square = {
    type: QCard.props.square,
    default: true,
  }
})
