// スタート画面（問題画面表示）
const quizStart= {
     question: '準備はいい？まもなくスタート！',
    };

// 各問題（問題・選択肢・答え・正解時コメント・誤時コメント）
const quiz = [
    {
      question: '人気youtuber兼エンジニアのセイト先生の苗字は？',
      answers: [ '入口', '出口', '堀口', '田口'],
      correct: '堀口',
      correctExp:`なかなかやりますね。つぎはどうかな？`,
      correctExp2:[`そんな苗字のひといる？`,`出口ですが…途中棄権はできないです、クイズは続きます。`,`堀口`,`よくある苗字だけど！残念！`]

    }, {
      question: '人気youtuber兼エンジニアのセイト先生が開催しているプログラミングスクールの名前は？',
      answers: [ 'seed', 'siid', 'SiiD', 'Seed'],
      correct: 'SiiD',
      correctExp:`もしかして、天才？`,
      correctExp2:[`どこかがちがう？`,`スペルは合っているけれども…？`,`SiiD`,`もしかしてガンダム好き？`]
    }, {
      question: '人気youtuber兼エンジニアのセイト先生が開催しているプログラミングスクールは今何期生？',
      answers: [ '二', '三', '四', '五'],
      correct: '五',
      correctExp:`そのとおり。みんな頑張っています。`,
      correctExp2:[`勘ではなかなかあたらない！`,`実はもう少し募集してましたよ。`,`いい線だけど残念！`,`五`]
    }
  ];

const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.getElementsByTagName('button');
const $buttonLen = $buttons.length;
const quizLen = quiz.length;
const $items = $doc.getElementById('js-items');
const popUp = window.alert
let quizIndex = 0;
let score = 0;


// スタート画面表示（選択肢ボタンは非表示）
const setUpStart = () => {
     $question.textContent = quizStart.question;
     let setUpIndex = 0;
     $items.style.visibility = 'hidden';
};

setUpStart();


//カウントダウンタイマー読み込み後3秒
let timeLeft = 3;
const $seconds = document.getElementById("seconds");
const $clock = document.getElementById("clock");
const countdown = () => {
     timeLeft--;
     $seconds.textContent =  timeLeft ;
     if (timeLeft > 0) {
          setTimeout(`countdown()`, 1000);
	}else{
          $seconds.style.visibility='hidden';
          $clock.style.visibility='hidden';}
};

setTimeout(`countdown()`, 1000);


// 問題セット（初回3秒待ち）（選択肢ボタンは表示）
const SetUpQuiz = () => {
    $question.textContent = quiz[quizIndex].question;
    let btnIndex = 0;
    while(btnIndex < $buttonLen){
      $buttons[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
      btnIndex++;
    }
    $items.style.visibility = 'visible';
  };

setTimeout(`SetUpQuiz()`,3000);

// ボタンにイベント機能付与
let handlerIndex = 0;
    while (handlerIndex < $buttonLen) {
     $buttons[handlerIndex].addEventListener('click', (e) => {
     clickHandler(e);
     });
    handlerIndex++;
    };

// 結果画面⇒コンティニュー画面（続ける：再読込　キャンセル：すべて非表示）
const gameOver = () =>{
　　　$items.style.visibility = 'hidden';
　　　$question.style.visibility = 'hidden';
        popUp('終了！あなたのスコアは' + score + '/' + quizLen + 'です');
        if(confirm(`もう一度挑戦しますか？`)){
          location.reload();
        }else{
          popUp(`Thank you for playing!!`)
     };
};

// 正誤判定（コメント表示）⇒次問OR結果画面
const clickHandler = (e) => {
    let answer = quiz[quizIndex].answers.indexOf(e.target.textContent);
    if( quiz[quizIndex].correct === e.target.textContent){
        popUp(`正解！`);
        popUp(quiz[quizIndex].correctExp);
        score++
    }else{
        popUp(`不正解！`);
        popUp(quiz[quizIndex].correctExp2[answer]);
    }
    quizIndex++
    if( quizIndex < quizLen ){
        SetUpQuiz();
    }else{
     　 gameOver();
    }
};




