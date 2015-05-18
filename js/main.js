var message = ['我要參加你的單身 pa ~', 'X~~你是我的最後一道防線怎麼就這樣結婚了！！',
                '我想看你跳舞。', '新人可以跳小蘋果出場嗎？',
                '希望有很多肉很多肉，噗~', '落葉飄出場吧！！！', '我要爆乳！！！',
                '축하해요~~~ 세상에서 가장 예쁘고 행복한 부부가 되길 바랍니다...',
                '十道菜都想要碳烤三明治。', '炸湯圓可以改成炸龍珠嗎？比較下酒 XD',
                '愛護地球少吃魚翅 QQ', '希望有油飯！！！', '十道菜都不要有魚翅！！！',
                '看新郎跳肚皮舞', '十道菜都有炸湯圓當配菜',
                '不要魚翅。', '我要坐單身型男桌！', '我想要喝可樂和鹹酥雞。',
                '申請騎海豚前往飯店。', '我想喝可樂 ～', '恭喜不合理哥！！！', '我想要喝可樂和鹹酥雞。',
                'PY 你綁定了！恭喜啦 XD', '蓋瑞用力！', '海鮮少一點！海鮮少一點！海鮮少一點！',
                '我是__～如果還沒生 就會去歐～', 'felicidades!', '恭喜艾莉恩！！',
                '讓小孩子們來澳洲玩，我們可以教他們喝酒。', '飛比結婚真是令人太高興了（轉圈）',
                '新娘好美好美好美！', '飛比, 恭喜您找到了認真又有想法的大男孩~', '要幸福喔〜啾咪❤',
                'PY, 恭喜您找到自然呆起來很漂亮的老婆~', '我想吃麥噹噹也可以嗎?',
                '阿捏哈 say 呦 ~', '愛護地球少吃魚翅 QQ', '可以十道都是油飯嗎?', '不要把我的鍾寫錯喔',
                '我要看PY喝醉~~~', '我想吃干貝....', '결혼을 축하합니다 !', '希望也能早日見到小小P喔!',
                '恭喜~ 終於可以去基隆玩了，耶！', '我預產期在五月底，那時候應該無法出席了，恭喜你們啦啦啦',
                '十道菜都想要是水煮湯圓！！！', '可以鬧洞房嗎？', 'If you build it he will come'];

(function (win) {
  'use strict';

  function WordAnimation(options) {
    this.message = options.message;
    this.mainWord = options.mainWord;
    this.currentIndex = 0;
    this.BASEATYPE = 'fadeInUp';
  }

  WordAnimation.prototype = {
    start: function wa_start () {
      this.setMainWord();
      this.startAnimaion(this.mainWord);
    },

    setMainWord: function wa_setMainWord () {
      var word = this.message[this.currentIndex];
      this.mainWord.textContent = word;
      this.currentIndex = (this.currentIndex + 1) % this.message.length;
    },

    startAnimaion: function wa_startAnimaion (container) {
      container.classList.add('animated');
      container.classList.add(this.BASEATYPE);
      container.addEventListener('animationend', this);
      container.addEventListener('webkitAnimationEnd', this);
    },

    stopAnimaion: function wa_stopAnimation (container) {
      container.classList.remove('animated');
      container.classList.remove(this.BASEATYPE);
      container.removeEventListener('animationend', this);
      container.removeEventListener('webkitAnimationEnd', this);
    },

    handleEvent: function wa_handleEvent(evt) {
      switch (evt.type) {
        case 'webkitAnimationEnd':
        case 'animationend':
          var self = this;
          this.stopAnimaion(this.mainWord);
          window.setTimeout(function () {
            self.start();
          }, 1000);
          break;
      }; 
    },

    stop: function wa_stop() {
      this.currentIndex = 0;
    }
  };

  win.wordAnimation = WordAnimation;
})(window);

window.onload = function() {
  var options = {
    mainWord: document.getElementById('mainword'),
    message: message
  }
  var wordAnimation = new window.wordAnimation(options);
  wordAnimation.start();
}
