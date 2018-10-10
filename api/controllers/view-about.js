module.exports = {


  friendlyName: 'View about',


  description: 'Display "About" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/about'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
