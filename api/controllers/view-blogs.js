module.exports = {


  friendlyName: 'View blogs',


  description: 'Display "Blogs" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/blogs'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
