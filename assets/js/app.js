// jQuery使う時

// $(function(){行いたい処理});　という記述で書く
/*
classの追加 addClass("追加したいクラス名")
classの削除 removeClass("削除したいクラス名")
タグの追加 $('<div>')
要素の取得
  ー タグ $('div')
  ー クラス指定 $('.className')
  ー id指定 $('#idName')
*/

$(function(){
  // Q1
  // JavaScriptで書いた時
  // document.querySelector('#q1-btn').addEvenetListener('click',function(){
  //   this.classList.add('large-btn');
  // });
  $("#q1-btn").on("click",function(){
    $(this).addClass("large-btn");
  });

  // Q2 ホバーで要素の透明度を変更する
  $("#q2-btn").on("mouseover",function(){
    // style="opacity:0.5;" をタグに指定する
    $(this).css('opacity',0.5);
    // 文字色変更する
    // this.style.color = 'red'; JavaScriptで書いた場合
    $(this).css('color','red');

  });

  // Q3 ※ボタンにマウスにカーソルが重なったらopacityを0.5にする
  // マウスカーソルが離れたらopacityを1に戻す
  // $("#q3-btn").on("mouseover",function(){
  //   // style="opacity:0.5;" をタグに指定する
  //   $(this).css('opacity',0.5);
  // });

  // $("#q3-btn").on("mouseleave",function(){
  //   // style="opacity:0.5;" をタグに指定する
  //   $(this).css('opacity',1);
  // });
  // ;(セミコロン)は、ここで処理が終わり、のマーク
  $('#q3-btn')
    .on('mouseover', function() {
      $(this).css('opacity', 0.5);
    })
    .on('mouseleave', function() {
      $(this).css('opacity', 1);
    });

    // Q4 以下のボタンがクリックされた時、テキストを任意の文字に変更する。
    $('#q4-btn').on('click',function(){
      // JavaScriptで書くと
      // document.querySelector('#q4-btn').textContent = 'コレに変更';
      $('#q4-text').text('コレに変更');
    });

    // Q5
    $('#q5-btn').on('click',function(){
      // 書き方1
      // $(".apple").before('<li class="grape">ぶどう</li>');

      // 書き方2
      let li = $('<li>');
      li.text('ぶどう');
      li.addClass('grape');
      $('.apple').before(li);
    });

// Q6
      $("#q6-btn").on("click",function(){
      // let span = $('<span>');
      // span.text('追加');
      // span.addClass('red');
      // $('.q6-text').append(span);
      $(".q6-text").append('<span class="red">追加</li>');
  });

// Q7　「on」というクラスがついていなければ外す、ついてなかったらつける(toggle)
$('#q7-btn').on('click',function(){
  $(this).toggleClass('on');
});

// Q8
$('#q8-btn').on('click',function(){
  $(this)
    .siblings()
    .slideToggle();
});

// Q9
$('#q9-btn').on('click',function(){
  $('body, html').animate({ scrollTop:0}, 500);
});

// Q10
// 表示ボタンが押されたとき
$('.q10-show-btn').on('click',function(){
  $('.q10-target').fadeIn(1000);
});
// 非表示ボタンが押されたとき
$('.q10-hide-btn').on('click',function(){
  $('.q10-target').fadeOut(2000);
});

// Q11
// 画面がスクロールされたとき
$(window).on('scroll',function(){

  // idがq11の要素の画面最上部からの距離を取得
  let q11_position = $('#q11').offset().top;

// 画面の高さ(ブラウザで見えてるところ)
let wh = $(window).height();

let now_position = $(window).scrollTop();

if (q11_position <= wh + now_position){
// Q11まで画面がスクロールされている
$('.q11-target').removeClass('hide');
}else{
// Q11がまだ見えていない(上の方でスクロールが止まっている？)
$('.q11-target').addClass('hide');
}
});

// Q12
$('#q12-btn').on('click',function(){
  $('.q12-target').toggleClass('hide');
});


});