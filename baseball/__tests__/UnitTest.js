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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("BaseballGame method test", () => {
  test("test", () => {
    const randoms = [1, 2, 3];
    const answers = ["356"];
    const logSpy = getLogSpy();
    const messages = ["1볼"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const baseball_game = new BaseballGame();

    baseball_game.inputUserNumber();

    baseball_game.inputResult();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
