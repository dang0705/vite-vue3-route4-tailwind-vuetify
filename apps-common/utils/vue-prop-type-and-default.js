export const BOOLEAN = (def = false) => ({ type: Boolean, default: def });
export const ARRAY = (def = () => []) => ({ type: Array, default: def });
export const OBJECT = (def = () => ({})) => ({ type: Object, default: def });
export const STRING = (def = '') => ({ type: String, default: def });
export const NUMBER = (def = 0) => ({ type: Number, default: def });
export const FUNCTION = (def = () => {}) => ({ type: Function, default: def });
