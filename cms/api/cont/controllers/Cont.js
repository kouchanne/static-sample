'use strict';

/**
 * Cont.js controller
 *
 * @description: A set of functions called "actions" for managing `Cont`.
 */

module.exports = {

  /**
   * Retrieve cont records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.cont.search(ctx.query);
    } else {
      return strapi.services.cont.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a cont record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.cont.fetch(ctx.params);
  },

  /**
   * Count cont records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.cont.count(ctx.query, populate);
  },

  /**
   * Create a/an cont record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cont.add(ctx.request.body);
  },

  /**
   * Update a/an cont record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cont.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cont record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cont.remove(ctx.params);
  }
};
