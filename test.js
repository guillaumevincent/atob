var assert = require("assert");
var atob = require(".");

it("atob", function() {
  assert.equal(atob("SGVsbG8sIFdvcmxkIQ=="), "Hello, World!");
});
