module.exports = {


  friendlyName: 'View inprogress',


  description: 'Display "Inprogress" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inprogress'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
