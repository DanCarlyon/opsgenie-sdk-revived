const api = require('./api');

/**
 * This method adds requested defaultOperations to the provided ops and returns the full api functions including default operations
 * Basically it provides mixin functionality with default methods
 */
module.exports.attach = function attach(ops, defaultOperations) {
  defaultOperations.forEach((property) => {
    ops[property] = genericOperations[property];
  });
  return ops;
};

/**
 * Pre-defined general operations
 */
var genericOperations = {
  /**
   * For now, there are no differences between a get and list request.
   * The difference is that in get, you need to provide id (or alias etc.)
   *
   * @param data
   * @param config
   * @param cb
   */
  get(data, config, cb) {
    api.get(this.baseURL, data, config, cb);
  },
  /**
   * Returns an array
   *
   * @param data
   * @param config
   * @param cb
   */
  list(data, config, cb) {
    api.get(this.baseURL, data, config, cb);
  },
  /**
   *
   * @param data
   * @param config
   * @param cb
   */
  create(data, config, cb) {
    api.post(this.baseURL, data, config, cb);
  },
  /**
   *
   * @param data
   * @param config
   * @param cb
   */
  delete(data, config, cb) {
    api.delete(this.baseURL, data, config, cb);
  },
  /**
   * id is a String parameter, not an object
   *
   * @param id
   * @param config
   * @param cb
   */
  deleteById(id, config, cb) {
    api.delete(this.baseURL, { id }, config, cb);
  },
  /**
   * For now, it is the same with create, but needs id parameter in data
   *
   * @param data
   * @param config
   * @param cb
   */
  update(data, config, cb) {
    api.post(this.baseURL, data, config, cb);
  },
};
