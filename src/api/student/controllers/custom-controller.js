"use strict";

module.exports = {
  async getActiveStudents(ctx) {
    try {
      const data = await strapi.documents("api::student.student").findMany();

      ctx.body = data;
      ctx.status = 200;
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
