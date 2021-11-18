$(document).ready(function () {

$("#facebook").click(function () { 
    openInNewTab("http://www.facebook.com");
 });
 $("#github").click(function () { 
    openInNewTab("http://www.github.com");
 });
 $("#twitter").click(function () { 
     openInNewTab("http://www.twitter.com");
 });
 $("#linkedin").click(function () { 
     openInNewTab("http://www.linkedin.com");
 }); 
});

// asdsadsad

function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: href,
    }).click();
  }

  // Funcionalidad para tooltip y popover
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();