module.exports = {


  friendlyName: 'View spring book 1',


  description: 'Display "Spring book 1" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/fiction/spring-book-1'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
