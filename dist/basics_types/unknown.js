"use strict";
var userInput;
var userName;
userInput = 4;
userInput = true;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (errMessage, errCode) {
    throw { errMessage: errMessage, errCode: errCode };
};
generateError('AN ERROR OCCURRED', 404);
//# sourceMappingURL=unknown.js.map