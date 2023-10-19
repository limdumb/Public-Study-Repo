const MissionUtils = require("@woowacourse/mission-utils");

class BaseballGame {
  #computer_num;

  constructor() {
    this.#computer_num = this.makeRandomNum();
  }

  makeRandomNum() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return numbers;
  }

  //컴퓨터가 3자리 수를 만든다.
  //makeRandomNum();

  //숫자를 입력한다.
  //inputUserNumber();

  //출력한다.
  // 다시 숫자를 입력할지 게임을 끝낼 지 정한다.
  //outputResult();

  //게임 종료. 재시작할지 완전히 끝낼지 정한다.
  //inputIsUserRegame();
}

module.export = BaseballGame;
