  // function doGet() {
  //   return HtmlService
  //       .createTemplateFromFile('index')
  //       .evaluate();
  // }

  // funcion para abrir la UI
  function doGet() {
      var template = HtmlService.createTemplateFromFile("index");
      return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  }
  //funcion para incluir html
  function include(filename) {
      return HtmlService.createHtmlOutputFromFile(filename)
          .getContent();
  }