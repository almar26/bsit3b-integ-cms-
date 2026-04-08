"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/students/active",
      handler: "custom-controller.getActiveStudents",
    },
  ],
};
