const BaseballGame = require("./BaseballGame");

class App {
  play() {
    //게임 시작
    //컴퓨터가 3자리 수를 만든다.
    const basball_game = new BaseballGame();

    //숫자를 입력한다.
    basball_game.inputUserNumber();

    //출력한다.
    // 다시 숫자를 입력할지 게임을 끝낼 지 정한다.
    // basball_game.outputResult();

    //게임 종료. 재시작할지 완전히 끝낼지 정한다.
    // basball_game.inputIsUserRegame();
  }
}

module.exports = App;
