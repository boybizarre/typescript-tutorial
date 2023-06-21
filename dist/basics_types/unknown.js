"use strict";
let userInput;
let userName;
userInput = 4;
userInput = true;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
const generateError = (errMessage, errCode) => {
    throw { errMessage, errCode };
};
generateError('AN ERROR OCCURRED', 404);
//# sourceMappingURL=unknown.js.map