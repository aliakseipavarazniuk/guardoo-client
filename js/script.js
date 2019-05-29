// Common

//---- add link to server tab -----
function ChangeUrl(title, url) {
  history.pushState({
    Title: title,
    Url: url
  }, title, url);
}
//---- end add link to server tab ----

$(document).ready(function() {

  $('#pop-up')
  .popup({
    inline: true,  
    hoverable: true,
    position: 'bottom right',
    delay: {
      show: 10,
      hide: 500
    }
  });

$('.ui.dropdown')
.dropdown({
  hoverable: true,
  on: 'hover',  
  delay : {
    show: 10,
    hide: 500
  }
});

// Hamburger-menu 
$('.click').on('click', function () {
  $('.mobile-modal-menu').addClass("modal-visible").removeClass("closing-modal");
});
$('.visible-mobile-sidebar, .mobile-modal-menu').on('click', function () {
  $('.mobile-modal-menu').removeClass("modal-visible").addClass("closing-modal");

});
// Hamburger-menu 


    //----change server name -----
    $('.table-name.snapshot label').on('click', function() {
      var labelValue = $(this).text();
      $(this).hide();
      $(this).closest(".table-name.snapshot").find("input").show().attr('value', labelValue).focus().focusout(function () {
        var inputValue = $(this).val();
        var inputValueLength = inputValue.length;
        var inputParent = $(this).parent('.table-name.snapshot');
        console.log(inputValueLength > 0);
        if (inputValueLength > 0) {
          $('label', inputParent).attr('data-content', inputValue).attr('data-position','top center');
        }
        else {
          $('label', inputParent).removeAttr('data-content', inputValue).removeAttr('data-position','top center');
        }
        $('label', inputParent).show().html(inputValue);
        $(this).hide();
      });
    });
    //----end change server name -----

  });

// SETTINGS.HTML
$(document).ready(function() {

  $('.pop-up-settings')
  .popup({
    inline: true,  
    hoverable: true,
    position: 'bottom right',
    delay: {
      show: 10,
      hide: 500
    }
  });

// Tabs
(function($) {
  $(function() {
    $('ul.tabs').on('click', 'li:not(.active)', function() {
      var $t=$(this);
      $t.addClass('active').siblings().removeClass('active')
      .closest('div.center').find('div.tabs-content').removeClass('active').filter('[data-tab-id="'+$t.data('tab-id')+'"]').addClass('active');
      ChangeUrl($t.text(),'#'+$t.data('tab-id'));
    });
    
    if(location.hash.length)
      $('.tabs [data-tab-id="'+location.hash.substr(1)+'"]').click();
  });
})($);

(function($) {
  $(function() {
    $('ul.verification-block').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      .closest('div#verification').find('div.verification-block-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

$('.snapshots-pop-up').popup();
// Tabs


$("#change-password").click(function () { 
 $("#save-new-password").show();
 $("#change-password").hide();
});

$("#two-factor-click").click(function () { 
 $("#two-factor").show();
 $("#two-factor-click").hide();
});

$("#usd-eur>div").on("click", function(){
  $("#usd-eur>div").removeClass('active-usd-eur');
  $(this).addClass('active-usd-eur');
});

  $("#alternative").click(function () {
  $(this).siblings("#alternative-block").toggle();
  $(".alternative-arrow").toggleClass("alternative-arrow-down");
});

    $("#social-more-click").click(function () {
  $(this).siblings("#social-more").toggle();
  $(".alternative-arrow").toggleClass("alternative-arrow-down");
});

$(".verifed-click").click(function () {
    var hBlock = $(this).parents().next(".amount-block");
    $(this).text(hBlock.is(':visible') ? 'Verify' : 'Confirm');
    $(this).toggleClass("gray");  
    hBlock.toggle();
});

$(".link-click").click(function () {
    $(this).text($(this).hasClass('gray') ? 'Link' : 'Unlink');
    $(this).toggleClass("gray");  
});

new PerfectScrollbar('#pm .menu');
new PerfectScrollbar('#am .menu');
new PerfectScrollbar('#language .menu');

});
// END OF THE SETTINGS.HTML

// SERVER.HTML
$(document).ready(function() {

  $('.pop-up-settings-germany')
  .popup({
    inline: true,  
    hoverable: true,
    position: 'bottom center',
    delay: {
      show: 10,
      hide: 500
    }
  });

  new PerfectScrollbar('#ddos .menu');
  new PerfectScrollbar('.rules .menu');
  new PerfectScrollbar('.rules:last-of-type .menu');
  new PerfectScrollbar('#firewall table:first-of-type .menu');
  new PerfectScrollbar('#firewall table:last-of-type .menu');


  $('#instances-input-1').on('change', function(){
    $('#instances-input-2').prop('checked', $(this).is(':checked'))
    $('#instances-input-3').prop('checked', $(this).is(':checked'))
  });

  $('#instances-small-input-1').on('change', function(){
    $('#instances-small-input-2').prop('checked', $(this).is(':checked'))
    $('#instances-small-input-3').prop('checked', $(this).is(':checked'))
  });


  $('.tabs li:nth-child(1)').click( function(){ 
    $("#center-h2").text('Servers')
  });

  $('.tabs li:nth-child(2)').click( function(){ 
    $("#center-h2").text("Snapshots")
  });

  $('.tabs li:nth-child(3)').click( function(){ 
    $("#center-h2").text("ISO")
  });

  $('.tabs li:nth-child(4)').click( function(){ 
    $("#center-h2").text("Backups")
  });

  $('.tabs li:nth-child(5)').click( function(){ 
    $("#center-h2").text("Reserved IPs")
  });

  $('.tabs li:nth-child(6)').click( function(){ 
    $("#center-h2").text("Firewalls")
  });

  $('#snapshot-click').click( function(){ 
    $("#snapshot-add").toggle()
  });

// Color Picker
$(".add-tag-name1").on("click", function () {
  var tagName = $("#tag-input1").val();
  var tagColor = $(".tag-color input:checked + label").css("color");
  console.log(tagColor);
  var tagBoxContent = '<span class="tag-name">' + tagName + '</span><img class="close" src="images/icons/close.svg">';
  var element = document.createElement("div");
  $(element).css("background-color", tagColor).addClass("tag-box");
  element.innerHTML = tagBoxContent;
  $(".tags-all1").append(element);
});
$(".tags-field").on("click", '.close',function (event) {
  $(this).parent().remove();
});
// Color Picker    
$(".add-tag-name2").on("click", function () {
  var tagName = $("#tag-input2").val();
  var tagColor = $(".tag-color input:checked + label").css("color");
  console.log(tagColor);
  var tagBoxContent = '<span class="tag-name">' + tagName + '</span><img class="close" src="images/icons/close.svg">';
  var element = document.createElement("div");
  $(element).css("background-color", tagColor).addClass("tag-box");
  element.innerHTML = tagBoxContent;
  $(".tags-all2").append(element);
});
$(".tags-field").on("click", '.close',function (event) {
  $(this).parent().remove();
});
// Color Picker
$(".add-tag-name3").on("click", function () {
  var tagName = $("#tag-input3").val();
  var tagColor = $(".tag-color input:checked + label").css("color");
  console.log(tagColor);
  var tagBoxContent = '<span class="tag-name">' + tagName + '</span><img class="close" src="images/icons/close.svg">';
  var element = document.createElement("div");
  $(element).css("background-color", tagColor).addClass("tag-box");
  element.innerHTML = tagBoxContent;
  $(".tags-all3").append(element);
});
$(".tags-field").on("click", '.close',function (event) {
  $(this).parent().remove();
});
// Color Picker   
$(".add-tag-name4").on("click", function () {
  var tagName = $("#tag-input4").val();
  var tagColor = $(".tag-color input:checked + label").css("color");
  console.log(tagColor);
  var tagBoxContent = '<span class="tag-name">' + tagName + '</span><img class="close" src="images/icons/close.svg">';
  var element = document.createElement("div");
  $(element).css("background-color", tagColor).addClass("tag-box");
  element.innerHTML = tagBoxContent;
  $(".tags-all4").append(element);
});
$(".tags-field").on("click", '.close',function (event) {
  $(this).parent().remove();
});
// Color Picker 

// Tabs
(function($) {
  $(function() {
    $('ul.tabs').on('click', 'li:not(.active)', function() {
      var $t=$(this);
      $t.addClass('active').siblings().removeClass('active')
      .closest('div.center').find('div.tabs-content').removeClass('active').filter('[data-tab-id="'+$t.data('tab-id')+'"]').addClass('active');
      ChangeUrl($t.text(),'#'+$t.data('tab-id'));
    });
    
    if(location.hash.length)
      $('.tabs [data-tab-id="'+location.hash.substr(1)+'"]').click();
  });
})($);

$('.snapshots-pop-up').popup();
// Tabs

// Dropdown
$('.ui.settings-dropdown')
.dropdown({
  hoverable: true,
  on: 'hover',  
  delay : {
    show: 10,
    hide: 500
  }
});
// Dropdown

// Graphs
$('#graph1').progress({
  percent: 22
});
$('#graph2').progress({
  percent: 82
});
$('#graph3').progress({
  percent: 22
});
$('#graph4').progress({
  percent: 82
});
$('.iso-graph').progress({
  percent: 22
});
// Graphs

});
// END OF THE SERVER.HTML


// EDITSERVER.HTML
function onlyNumbers(obj) {
  if (obj.value>65535) obj.value=65535; 
  if (obj.value<1) obj.value=1;
}

$(document).ready(function() {

  $('#firewall-input-22-1').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9]/)){
      return false;
    };
  })

  $('#firewall-input-22-2').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9]/)){
      return false;
    };
  })

  $('#firewall-input-all-1').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9]/)){
      return false;
    };
  })

  $('#firewall-input-all-2').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9]/)){
      return false;
    };
  })        

  $(function() {
    $(".distributions .distributions-card .distributions-card-dropdown .menu .item").click(function(e) {
      e.preventDefault();
      $('.ui.dropdown>.text').addClass('default').html('Select Version');
      $(".distributions-card").removeClass('active-distributions-card');
      $(this).parents('.distributions-card').addClass('active-distributions-card');
    })
  });

  $(function() {
    $(".size-card").click(function(e) {
      e.preventDefault();
      $(".size-card").removeClass('active-size-card');
      $(this).addClass('active-size-card');
    })
  });

  $("#recursive-h3").click(function () {
    $('#recursive-p').toggle();  
    $("#recursive-h3").toggleClass("recursive-h3-underline");
  });

  $("#reverse-h3").click(function () {
    $('#public-reverse-table').toggle(); 
    $('#reverse-inputs').toggle();  
    $("#reverse-h3").toggleClass("reverse-h3-underline");
  });

  $("#public-switch-checkbox").click(function () {
    $('#public-switch-content').toggle(); 
  });

  $("#private-switch-checkbox").click(function () {
    $('#private-switch-content').toggle(); 
    $('#private-details-click').toggle(); 
  });

  $("#IPv4-details-click").click(function () { 
    $('#IPv4-details').toggle(); 
    $("#IPv4-details-click .manage-arrow").toggleClass("manage-arrow-keys-down");
  });

  $("#private-details-click").click(function () { 
    $('#private-details').toggle(); 
    $("#private-details-click .manage-arrow").toggleClass("manage-arrow-keys-down");  
  });

  $("#custom-iso-click").click(function () {
    $('.distributions').toggle();  
    $('#custom-iso').toggle(); 
  });

// Slide Tabs
(function($) {
  $(function() {
    $('ul#settings-slide').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      .closest('div.center-ubuntu').find('div.settings-slide-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);
// Slide Tabs

$("#ddos .button").click(function () {
  $(this).siblings("#firewall").slideToggle("500");
  $("#ddos>h2").css('display','none');
  $("#ddos>table").css('display','none');
  $("#ddos>.button").css('display','none');
});

// Color Picker
$(".add-tag-name").on("click", function () {
  var tagName = $("#tag-input").val();
  var tagColor = $(".tag-color input:checked + label").css("color");
  console.log(tagColor);
  var tagBoxContent = '<span class="tag-name">' + tagName + '</span><img class="close" src="images/icons/close.svg">';
  var element = document.createElement("div");
  $(element).css("background-color", tagColor).addClass("tag-box");
  element.innerHTML = tagBoxContent;
  $(".tags-all").append(element);
});
$(".tags-field").on("click", '.close',function (event) {
  $(this).parent().remove();
});
// Color Picker    

// Hamburger-menu 
$('.click').on('click', function () {
  $('.mobile-modal-menu').addClass("modal-visible").removeClass("closing-modal");
});
$('.visible-mobile-sidebar, .mobile-modal-menu').on('click', function () {
  $('.mobile-modal-menu').removeClass("modal-visible").addClass("closing-modal");
});
// Hamburger-menu 

// Tabs
(function($) {
  $(function() {
    $('ul.tabs-deploy').on('click', 'li:not(.active)', function() {
      var $t=$(this);
      $t.addClass('active').siblings().removeClass('active')
      .closest('div.center-ubuntu').find('div.tabs-content').removeClass('active').filter('[data-tab-id="'+$t.data('tab-id')+'"]').addClass('active');
      ChangeUrl($t.text(),'#'+$t.data('tab-id'));
    });
    
    if(location.hash.length)
      $('.center-ubuntu .tabs-deploy [data-tab-id="'+location.hash.substr(1)+'"]').click();
  });
})($);

(function($) {
  $(function() {
    $('ul.monthly').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      .closest('div#usage').find('div.monthly-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

(function($) {
  $(function() {
    $('ul.cpu').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      .closest('div#usage').find('div.cpu-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

(function($) {
  $(function() {
    $('ul.ram').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      .closest('div#usage').find('div.ram-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);
// Tabs

// Pop-up
$('.pop-up-ubuntu') .popup({
  inline: true,
  hoverable: true,
  position: 'bottom right',
// on: 'click',
delay: {
  show: 20,
  hide: 200
}
});

$('.snapshots-pop-up').popup();
// Pop-up

 // Graph
 $('#graph5').progress({
  percent: 22
});
 // Graph

 // Password
 var toggle =  document.getElementById("toggle-password");
 toggle.addEventListener("click", function(e){
  var passwordfield = document.getElementById("password-field");
  if(passwordfield.getAttribute("type")=="password"){
    passwordfield.setAttribute("type","text");
  } else {
    passwordfield.setAttribute("type","password");
  }
});

 var button = document.querySelector('.copy');
 button.addEventListener('click', function(event) {
  var text = document.querySelector('#password-field');
  text.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();  
});
 // Password

 new PerfectScrollbar('#daily .menu');
 new PerfectScrollbar('.backup-schedule-dropdown:nth-of-type(2) .menu');

    //----change server name -----
    $('#editserver-header .snapshot label').on('click', function() {
      var labelValue = $(this).text();
      $(this).hide();
      $(this).closest("#editserver-header .snapshot").find("input").show().attr('value', labelValue).focus().focusout(function () {
        var inputValue = $(this).val();
        var inputValueLength = inputValue.length;
        var inputParent = $(this).parent('#editserver-header .snapshot');
        console.log(inputValueLength > 0);
        if (inputValueLength > 0) {
          $('label', inputParent).attr('data-content', inputValue).attr('data-position','top center');
        }
        else {
          $('label', inputParent).removeAttr('data-content', inputValue).removeAttr('data-position','top center');
        }
        $('label', inputParent).show().html(inputValue);
        $(this).hide();
      });
    });
    //----end change server name ----- 

});
// END OF THE EDITSERVER.HTML

// DEPLOY.HTML
$(document).ready(function() {

  $('.snapshots-pop-up').popup();

  $(".cloud-script-card-key").on("click", function(){
    $(".cloud-script-card-key").removeClass('active-script-card');    
    $(this).addClass('active-script-card');
  });

  $(".cloud-script-card-script").on("click", function(){
    $(".cloud-script-card-script").removeClass('active-script-card');
    $(this).addClass('active-script-card');
  });

  $(function() {
    $(".size-card").click(function(e) {
      e.preventDefault();
      $(".size-card").removeClass('active-size-card');
      $(this).addClass('active-size-card');
    })
  });

  $(function() {
    $(".location-card").click(function(e) {
      e.preventDefault();
      $(".location-card").removeClass('active-location-card');
      $(this).addClass('active-location-card');
    })
  });

  $(function() {
    $(".distributions .distributions-card .distributions-card-dropdown .menu .item").click(function(e) {
      e.preventDefault();
      $('.ui.dropdown>.text').addClass('default').html('Select Version');
      $(".distributions-card").removeClass('active-distributions-card');
      $(this).parents('.distributions-card').addClass('active-distributions-card');
    })
  });

// Select Active Card

// Hamburger-menu 
$('.click').on('click', function () {
  $('.mobile-modal-menu').addClass("modal-visible").removeClass("closing-modal");
});
$('.visible-mobile-sidebar, .mobile-modal-menu').on('click', function () {
  $('.mobile-modal-menu').removeClass("modal-visible").addClass("closing-modal");
});
// Hamburger-menu 

// Tabs
(function($) {
  $(function() {
    $('ul.tabs-domain').on('click', 'li:not(.active)', function() {
      var $t=$(this);
      $t.addClass('active').siblings().removeClass('active')
      .closest('div.center-domain').find('div.tabs-content').removeClass('active').filter('[data-tab-id="'+$t.data('tab-id')+'"]').addClass('active');
      ChangeUrl($t.text(),'#'+$t.data('tab-id'));
    });
    
    if(location.hash.length)
      $('.center-domain .tabs-domain [data-tab-id="'+location.hash.substr(1)+'"]').click();
  });
})($);

(function($) {
  $(function() {
    $('ul.choose').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      .closest('div#cloud').find('div.choose-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);
// Tabs

// Pop-up
$('#cloud.cloud-title-pop-up')
.popup()
;
// Pop-up

// Add and remove input fields
$(function() {
  var serHost = "Enter server hostname";
  var serLabel = "Enter server label";
  var inputSerName = "server-hostname";
  var inputSerLabel = "server-label";
  var serverNum = 3;

  $('span.plus').on('click',function () {
    if (serverNum < 99){
      serverNum += 1;
      if (serverNum >= 10){
        $("#i-num").addClass('new-width');
      }
      function createElement(a, b) {
        divInput = document.createElement("div");
        divInput.className = "ui large input new-div new-div-input" + serverNum;
        label = document.createElement("label");
        label.htmlFor = b + serverNum;
        label.innerHTML = a;
        input = document.createElement("input");
        input.id = b + serverNum;
        input.name = b + serverNum;
        input.required = true;
        divInput.appendChild(input);
        divInput.appendChild(label);
      }
      createElement(serHost, inputSerName);
      var elementSerHost = document.getElementById("input-server-hostname");
      elementSerHost.appendChild(divInput);
      createElement(serLabel, inputSerLabel);
      var elementSerLabel = document.getElementById("input-server-label");
      elementSerLabel.appendChild(divInput);
      var elementNum = document.getElementById("input-server-hostname");
      $("#i-num:text").val(serverNum);
    }
  });
  $("#i-num:text").val(serverNum);

  $('span.minus').on('click',function () {
    if (serverNum > 1){
      if (serverNum <= 10) {
        $("#i-num").removeClass('new-width');
      }
      $('.new-div-input'+ serverNum).remove();
      serverNum -= 1;
      $("#i-num:text").val(serverNum);
    }
  });
});
// End add and remove input fields

//----add text from #input-server-hostname input  to  #input-server-label input-----
$('#input-server-hostname').on('input','.ui.input input', function() {
  var index = $(this).parent().index();
  $('#input-server-label').children('.ui.input').eq(index).children('input').val($(this).val())
});
//----end add text from #input-server-hostname input  to  #input-server-label input-----


$("#manage-scripts-click").click(function () {
  $(this).siblings("#manage-scripts").slideToggle("500");
  $(".manage-arrow").toggleClass("manage-arrow-scripts-down");
});

$(".scripts-pencil img").click(function () { 
 $("#manage-scripts-extra").slideToggle("500");
 $("#manage-scripts .button").css('display','none');
});

$("#manage-keys-click").click(function () {
  $(this).siblings("#manage-keys").slideToggle("500");
  $(".manage-arrow").toggleClass("manage-arrow-keys-down");
});

$(".key-pencil img").click(function () { 
 $("#manage-keys-extra").slideToggle("500");
 $("#manage-keys .button").css('display','none');
 $("#upload-button").css('display','none');
});

new PerfectScrollbar('#manage-scripts-extra textarea');
new PerfectScrollbar('#manage-keys-extra textarea');

});
// END OF THE DEPLOY.HTML


// SUPPORT.HTML
$(document).ready(function() {

$('textarea').focus(function(){
 $(this).data('placeholder',$(this).attr('placeholder'))
 $(this).attr('placeholder','');
});

$('textarea').blur(function(){
 $(this).attr('placeholder',$(this).data('placeholder'));
});

new PerfectScrollbar('#message');
new PerfectScrollbar('#message2');

$("#selection>div").on("click", function(){
  $("#selection>div").removeClass('selection-active');
  $(this).addClass('selection-active');
});

$("#all-tickets>span").click(function () {
  $("#tickets-copy").toggle();
  $("#all-tickets .manage-arrow").toggleClass("manage-arrow-scripts-down");
});

$("#tickets .ticket-click").click(function () {
  $("#ticket-messaging").slideToggle("500");
  $("#tickets-h2").css('display','none');
  $("#tickets").css('display','none');
  $("#tickets-copy").css('display','none');
  $("#all-tickets").css('display','none');
  $("#tickets-copy + .button").css('display','none');
  $("#tickets-copy + .button + h3").css('display','none');
  $("#tickets-copy + .button + h3 + p").css('display','none');
  $("#new-ticket").css('display','none');
});

$("#tickets-copy .ticket-click").click(function () {
  $("#ticket-messaging").slideToggle("500");
  $("#tickets-h2").css('display','none');
  $("#tickets").css('display','none');
  $("#tickets-copy").css('display','none');
  $("#all-tickets").css('display','none');
  $("#tickets-copy + .button").css('display','none');
  $("#tickets-copy + .button + h3").css('display','none');
  $("#tickets-copy + .button + h3 + p").css('display','none');
  $("#new-ticket").css('display','none');
});

$("#tickets-copy + .button").click(function () {
  $("#new-ticket").toggle();
  $("#tickets-copy + .button").toggle();
  $("#tickets-copy + .button + h3").toggle();
  $("#tickets-copy + .button + h3 + p").toggle();    
});

// Hamburger-menu 
$('.click').on('click', function () {
  $('.mobile-modal-menu').addClass("modal-visible").removeClass("closing-modal");
});
$('.visible-mobile-sidebar, .mobile-modal-menu').on('click', function () {
  $('.mobile-modal-menu').removeClass("modal-visible").addClass("closing-modal");
});
// Hamburger-menu 

// Tabs
(function($) {
  $(function() {
    $('ul.tabs-support').on('click', 'li:not(.active)', function() {
      var $t=$(this);
      $t.addClass('active').siblings().removeClass('active')
      .closest('div.center-support').find('div.tabs-content').removeClass('active').filter('[data-tab-id="'+$t.data('tab-id')+'"]').addClass('active');
      ChangeUrl($t.text(),'#'+$t.data('tab-id'));
    });
    
    if(location.hash.length)
      $('.tabs-support [data-tab-id="'+location.hash.substr(1)+'"]').click();
  });
})(jQuery);
// Tabs

});
//  END OF THE SUPPORT.HTML

// BILLING.HTML
function isright(obj) {
  if (obj.value>1000) obj.value=1000; 
  if (obj.value<0) obj.value=0;
}

function func(e) {
  if (e.value.indexOf(".") != '-1') {
    e.value=e.value.substring(0, e.value.indexOf(".") + 3); 
  }
}

$(document).ready(function() {

  $(".amount>div").click(function() {
    $(".amount>div").removeClass('amount-active');
    $(this).addClass('amount-active');
  });

  jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".amount>div"); 
    if (!div.is(e.target))  { 
      div.removeClass('amount-active');
    }
  });
});

  $('#custom-amount').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
      return false;
    };
  })

  $("#country .item").click(function() {
    $('#country input.search').blur()
  });

  $("#custom-amount-click").click(function () {
    $('#custom-amount-input').show(); 
    $('#custom-amount-click').hide();   
    document.getElementById("custom-amount").focus();
  });

new PerfectScrollbar('#country .menu');

// Hamburger-menu 
$('.click').on('click', function () {
  $('.mobile-modal-menu').addClass("modal-visible").removeClass("closing-modal");
});
$('.visible-mobile-sidebar, .mobile-modal-menu').on('click', function () {
  $('.mobile-modal-menu').removeClass("modal-visible").addClass("closing-modal");
});
// Hamburger-menu 

(function($) {
  $(function() {
    $('ul.tabs-billing').on('click', 'li:not(.active)', function() {
      var $t=$(this);
      $t.addClass('active').siblings().removeClass('active')
      .closest('div.center-billing').find('div.tabs-content').removeClass('active').filter('[data-tab-id="'+$t.data('tab-id')+'"]').addClass('active');
      ChangeUrl($t.text(),'#'+$t.data('tab-id'));
    });
    
    if(location.hash.length)
      $('.center-billing .tabs-billing [data-tab-id="'+location.hash.substr(1)+'"]').click();
  });
})($);

// Slide Tabs
(function($) {
  $(function() {
    $('ul#payment').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active')
      .closest('div.center-billing').find('div.payment-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);
// Slide Tabs

});

// END OF THE BILLING.HTML


// LOGIN.HTML

$(document).ready(function() {

new PerfectScrollbar('#other .menu');
new PerfectScrollbar('#account .account-form');

});