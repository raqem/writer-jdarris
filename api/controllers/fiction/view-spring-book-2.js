module.exports = {


  friendlyName: 'View spring book 2',


  description: 'Display "Spring book 2" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/fiction/spring-book-2'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
