"use strict";
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/test-api",
      handler: "custom-controller.testApi",
    },
  ],
};
