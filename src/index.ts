import { Source } from 'callbag'
import flatten from 'callbag-flatten'
import lazy from 'callbag-lazy'

const defer = <T>(factory: () => Source<T>): Source<T> => flatten(lazy(factory))

export default defer
