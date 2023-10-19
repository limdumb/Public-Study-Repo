const MissionUtils = require("@woowacourse/mission-utils");

class BaseballGame {
  #computer_numbers;
  #user_numbers;

  constructor() {
    this.makeRandomNum();
  }

  makeRandomNum() {
    const numbers = Array.from({ length: 3 }, () =>
      MissionUtils.Random.pickNumberInRange(1, 9)
    );
    //TODO 서로다른 숫자 구현 해야함.
    this.#computer_numbers = numbers;
  }

  inputUserNumber() {
    let userInput;
    MissionUtils.Console.readLine(
      "서로다른 3자리 수를 입력하세요.",
      (input) => {
        userInput = input;
      }
    );
    //TODO Error Message
    if (!this.isNumbersOk(userInput)) throw new Error("에러 메세지");

    this.#user_numbers = userInput.split("").map(Number);
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

  inputResult() {
    const [strike, ball] = this.getStrikeAndBall();

    this.outputResult({ strike, ball });

    if (strike === 3) this.endGame();
  }
  getStrikeAndBall() {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      const computer_number = this.#computer_numbers[i];
      for (let j = 0; j < 3; j++) {
        const user_number = this.#user_numbers[j];
        if (i === j && computer_number === user_number) strike++;
        if (i !== j && computer_number === user_number) ball++;
      }
    }

    return [strike, ball];
  }
  outputResult({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      return;
    }
    if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return;
    }
    if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return;
    }
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  //게임 종료. 재시작할지 완전히 끝낼지 정한다.
  endGame() {}
  //inputIsUserRegame();
}

module.exports = BaseballGame;
