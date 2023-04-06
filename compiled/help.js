"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewHelpPage = void 0;
var _commands = require("./commands");
var viewHelpPage = function viewHelpPage() {
  var data = Object.keys(_commands.COMMANDS).map(function (command) {
    var cmdData = _commands.COMMANDS[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      command: command
    };
  });
  var columns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }];
  $('#help-table').DataTable({
    data: data,
    columns: columns,
    order: [[1, "asc"]],
    paging: false
  });
};
exports.viewHelpPage = viewHelpPage;