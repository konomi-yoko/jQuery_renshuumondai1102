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


});