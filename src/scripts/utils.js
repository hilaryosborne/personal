import _ from 'lodash'

export const filterProps = (props, Component) => {
  return _.pick(props, _.keys(Component.propTypes))
}
