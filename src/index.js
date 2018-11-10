import flatten from 'callbag-flatten'
import lazy from 'callbag-lazy'

export default function defer(factory) {
  return flatten(lazy(factory))
}
