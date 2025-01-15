import { NAMES } from './names';

/**
 * The function `randomLetterIndex` returns a random index from a given string of letters.
 * @param {string} letters - The `letters` parameter is a string that represents a collection of
 * letters.
 */
const randomLetterIndex = (letters: string) =>
  letters.charAt(Math.floor(Math.random() * letters.length));

/**
 * The getRandomItem function returns a random item from an array.
 * @param {T[]} array - The `array` parameter is an array of type `T`. It represents the array from
 * which a random item will be selected.
 * @returns a random item from the given array.
 */
export function getRandomItem<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}
/**
 * The `fakeEmailGen` function generates a fake email address with a specified number of characters and
 * an optional domain.
 * @param {number} charts - The `charts` parameter in the `fakeEmailGen` function represents the number
 * of characters you want in the email username.
 * @param [email=false] - The `email` parameter is a boolean value that determines whether or not to
 * include the domain in the generated email. If `email` is set to `true`, the domain `@linkfaker.com`
 * will be appended to the generated email. If `email` is set to `false` or
 * @returns The function `fakeEmailGen` returns a string that consists of a randomly generated email
 * address. The email address is generated based on the number of characters specified by the `charts`
 * parameter. If the `email` parameter is set to `true`, the generated email address will have the
 * domain `@linkfaker.com`.
 */
export const fakeEmailGen = (charts: number, email = false) => {
  const ABC = 'abcdefghijklmnopqrstuvwxyz1234567890';
  const domain = '@linkfaker.com';

  const getEmail = (repeat: number) => {
    let result = '';
    for (let i = 0; i <= repeat; i++) {
      result += randomLetterIndex(ABC);
    }
    return result;
  };

  return `${getEmail(charts)}${email ? domain : ''}`;
};

/**
 * The function `fakeUserNameGen` generates a random fake username from a list of names.
 * @returns The function `fakeUserNameGen` returns a randomly selected item from the `NAMES` array.
 */
export const fakeUserNameGen = () => {
  return getRandomItem(NAMES);
};

/**
 * The function randomNumber generates a random number between 0 and a given number.
 * @param {number} num - The parameter "num" is a number that represents the upper limit for generating
 * a random number.
 */
export const randomNumber = (num: number) => Math.floor(Math.random() * num);

/**
 * The getRandomBoolean function returns a random boolean value with a 60% chance of being true.
 */
export const getRandomBoolean = () => randomNumber(5) <= 3;
