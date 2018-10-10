module.exports = {


  friendlyName: 'View fiction',


  description: 'Display "Fiction" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/fiction'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
