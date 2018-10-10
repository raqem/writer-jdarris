module.exports = {


  friendlyName: 'View games',


  description: 'Display "Games" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/games'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
