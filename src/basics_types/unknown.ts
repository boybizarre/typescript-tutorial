let userInput: unknown;
let userName: string;

userInput = 4;
userInput = true;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (errMessage: string, errCode: number) => {
  throw { errMessage, errCode };
};

generateError('AN ERROR OCCURRED', 404);
