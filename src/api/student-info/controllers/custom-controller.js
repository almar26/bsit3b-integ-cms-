"use strict";

module.exports = {
  async testApi(ctx) {
    ctx.body = "Hello World";
    ctx.status = 200;
  },
};
