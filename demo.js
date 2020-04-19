/**
 * FOO
 * @param {Object} __namedParameters various options
 * @param {Number} foo An interesting value
 * @param {Number} __namedParameters.bar Another value
 */
function demo({ foo=42, bar=43 } = {}) { }

module.exports = {demo};
