const MissionUtils = require("@woowacourse/mission-utils");

class BaseballGame {
  #computer_num;
  #user_num;

  constructor() {
    this.makeRandomNum();
  }

  makeRandomNum() {
    const numbers = Array.from({ length: 3 }, () =>
      MissionUtils.Random.pickNumberInRange(1, 9)
    );
    this.#computer_num = numbers;
  }

  inputUserNumber() {
    let userInput;
    MissionUtils.Console.readLine(
      "서로다른 3자리 수를 입력하세요.",
      (input) => {
        userInput = input;
      }
    );

    if (!this.isNumbersOk(userInput)) throw new Error("에러 메세지");

    this.#user_num = userInput;
  }

  isNumbersOk(numbers) {
    if (numbers.length !== 3) return false;
    for (const number of numbers) {
      if (+number === NaN) return false;
    }
    const numbers_set = new Set(numbers.split(""));
    if (numbers_set.size !== numbers.length) return false;
    return true;
  }

  //출력한다.
  // 다시 숫자를 입력할지 게임을 끝낼 지 정한다.
  //outputResult();

  //게임 종료. 재시작할지 완전히 끝낼지 정한다.
  //inputIsUserRegame();
}

module.exports = BaseballGame;
