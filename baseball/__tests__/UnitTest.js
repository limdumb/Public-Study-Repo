const BaseballGame = require("../src/BaseballGame");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("BaseballGame method test", () => {
  test("inputUserNumber test", async () => {
    const randoms = [1, 2, 3];
    const answers = ["456"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const baseball_game = new BaseballGame();

    baseball_game.inputUserNumber();
  });
});
