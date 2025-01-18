"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomBoolean = exports.randomNumber = exports.fakeUserNameGen = exports.fakeEmailGen = exports.getRandomItem = void 0;
const names_1 = require("./names");
const randomLetterIndex = (letters) => letters.charAt(Math.floor(Math.random() * letters.length));
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.getRandomItem = getRandomItem;
const fakeEmailGen = (charts, email = false) => {
    const ABC = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const domain = '@linkfaker.com';
    const getEmail = (repeat) => {
        let result = '';
        for (let i = 0; i <= repeat; i++) {
            result += randomLetterIndex(ABC);
        }
        return result;
    };
    return `${getEmail(charts)}${email ? domain : ''}`;
};
exports.fakeEmailGen = fakeEmailGen;
const fakeUserNameGen = () => {
    return getRandomItem(names_1.NAMES);
};
exports.fakeUserNameGen = fakeUserNameGen;
const randomNumber = (num) => Math.floor(Math.random() * num);
exports.randomNumber = randomNumber;
const getRandomBoolean = () => (0, exports.randomNumber)(5) <= 3;
exports.getRandomBoolean = getRandomBoolean;
//# sourceMappingURL=fake-data-gen.js.map