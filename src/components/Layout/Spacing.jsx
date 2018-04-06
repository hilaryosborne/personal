import React from 'react'
import _ from 'lodash'
// import { Style } from 'radium'
import { mediaAbove } from 'scripts/styles'

const targets = [
  {'selector': 'm', 'rule': 'margin'},
  {'selector': 'p', 'rule': 'padding'}
]

const contexts = [
  {'selector': '', 'dir': ['Left', 'Right', 'Top', 'Bottom']},
  {'selector': 'b', 'dir': ['Bottom']},
  {'selector': 'l', 'dir': ['Left']},
  {'selector': 'r', 'dir': ['Right']},
  {'selector': 't', 'dir': ['Top']},
  {'selector': 'x', 'dir': ['Left', 'Right']},
  {'selector': 'y', 'dir': ['Top', 'Bottom']}
]

export class Spacing extends React.Component {
  build (target, context) {
    const list = {}
    for (let x = 0; x < 30; x++) {
      let code = target.selector + context.selector
      let spaceValue = (x / 2) + 'rem'
      let cssRules = this.getCSSRules(spaceValue, target, context)
      list['.' + code + '-' + x] = { ...cssRules }
      list['.' + code + '-sm-' + x] = {mediaQueries: {...mediaAbove('sm', { ...cssRules })}}
      list['.' + code + '-md-' + x] = {mediaQueries: {...mediaAbove('md', { ...cssRules })}}
      list['.' + code + '-lg-' + x] = {mediaQueries: {...mediaAbove('lg', { ...cssRules })}}
      list['.' + code + '-xl-' + x] = {mediaQueries: {...mediaAbove('xl', { ...cssRules })}}
    }
    return list
  }

  getCSSRules (spaceValue, target, context) {
    const rules = {}
    _.each(context.dir, (dir) => {
      rules[target.rule + dir] = spaceValue
    })
    return rules
  }

  getPositions () {
    let positions = {}
    _.each(targets, (target) => {
      _.each(contexts, (context) => {
        positions = {...positions, ...this.build(target, context)}
      })
    })
    return positions
  }

  render () {
    return null
    // console.log(this.getPositions())
    // return (_.values(_.mapKeys(this.getPositions(), (value, key) => { return <Style scopeSelector={key} rules={value} /> })))
  }
}
