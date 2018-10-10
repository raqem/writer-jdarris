module.exports = {


  friendlyName: 'View spring book 3',


  description: 'Display "Spring book 3" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/fiction/spring-book-3'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
