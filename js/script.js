$(function(){

  //ハンバーガーボタンをクリックしたときの処理
  $('.toggler').on("click",function(){

    if($(this).hasClass('show')){
      $(this).removeClass('show');
      $('#layer').fadeOut('fast');
      // ドロワーメニューが動いた後にdisplayがnoneになる。
      $('#drawer-menu').animate({'right':'-263px'},'fast','linear',{
        complete: function () {
          $('#darwer-menu').css('display','none');
        }
      })
    } else {
      $(this).addClass('show');
      $('#layer').fadeIn();
      $('#drawer-menu').css('display','block')
      .animate({'right':'0px'},'fast');
    }
  });

  //背景とメニューのリンクをクリックしたときの処理
  $('#layer, .link').on("click",function(){
    $('.toggler').removeClass('show');
    $('.layer').fadeOut('fast');
    $('#drawer-menu').animate({'right':'-263px'},'fast','linear',{
      complete: function () {
        $('#darwer-menu').css('display','none');
      }
    })
  });

  $(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
    });
  });

});