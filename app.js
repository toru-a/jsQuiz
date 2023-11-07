const quizStart= {
     question: '準備はいい？まもなくスタート！',
    //  answers: [ 'もちろん！', 'YES!', '頑張ります！', '満点狙います。'],

    };

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
const $buttonLen=$buttons.length;
const quizLen = quiz.length;
const $items = $doc.getElementById('js-items');
let quizIndex = 0;
let score = 0;

const SetUpQuiz = () => {
    $question.textContent = quiz[quizIndex].question;
    let btnIndex = 0;
    while(btnIndex < $buttonLen){
      $buttons[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
      btnIndex++;
    }
    $items.style.visibility = 'visible';
  };

const setUpStart = () => {
    $question.textContent = quizStart.question;
    let setUpIndex = 0;
    // while(setUpIndex< $buttonLen){
    //     $buttons[setUpIndex].textContent = quizStart.answers[setUpIndex];
    // setUpIndex++;
    //   };
      $items.style.visibility = 'hidden';
    };

setUpStart();

setTimeout(`SetUpQuiz()`,3000);

let handlerIndex = 0;
    while (handlerIndex < $buttonLen) {
    $buttons[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
    });
    handlerIndex++;
    };


const clickHandler = (e) => {
    let answer = quiz[quizIndex].answers.indexOf(e.target.textContent);
    if( quiz[quizIndex].correct === e.target.textContent){
        window.alert(`正解！`);
        window.alert(quiz[quizIndex].correctExp);
        score++
    }else{
        window.alert(`不正解！`);
        window.alert(quiz[quizIndex].correctExp2[answer]);
    }
    quizIndex++
    if( quizIndex<quizLen){
        SetUpQuiz();
    }else{
        window.alert('終了！あなたのスコアは' + score + '/' + quizLen + 'です');
        $items.style.visibility = 'hidden';
    }
};

