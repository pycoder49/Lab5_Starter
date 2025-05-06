// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

/**
 * Phone number tests
 */
test('checks for 123-456-7890', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('checks for (123) 456-7890', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
test('checks over 123-4567890', () => {
  expect(isPhoneNumber("123-4567890")).toBe(true);
});
test('checks over (123)-4567890', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});

/**
 * Email tests
 */
test('checking aryan@gmail.com', () => {
  expect(isEmail("aryan@gmail.com")).toBe(true);
});
test('checking random@random.com', () => {
  expect(isEmail("random@random.com")).toBe(true);
});
test('checking aryan.com', () => {
  expect(isEmail("aryan.com")).toBe(false);
});
test('checking aryan@com.', () => {
  expect(isEmail("aryan@com.")).toBe(false);
});

/**
 * Strong password checks
 */
test('checks for the password: therStrong123', () => {
  expect(isStrongPassword("therStrong123")).toBe(true);
});
test('checks for the password: ueStrong123', () => {
  expect(isStrongPassword("ueStrong123")).toBe(true);
});
test('checks for the password: 123ThisIsStrong', () => {
  expect(isStrongPassword("123ThisIsStrong")).toBe(false);
});
test('checks for the password: !@#$%StrongPassword', () => {
  expect(isStrongPassword("!@#$%StrongPassword")).toBe(false);
});

/**
 * Date checks
 */
test('checks for date: 1/23/1234', () => {
  expect(isDate("1/23/1234")).toBe(true);
});
test('checks for date: 01/1/9999', () => {
  expect(isDate("01/1/9999")).toBe(true);
});
test('checks for date: //2004', () => {
  expect(isDate("//2004")).toBe(false);
});
test('checks for date: 01-01-0001', () => {
  expect(isDate("01-01-0001")).toBe(false);
});

/**
 * Hex color checks
 */
test('checks for hex code: ffffff', () => {
  expect(isHexColor("ffffff")).toBe(true);
});
test('checks for hex code: #abcde', () => {
  expect(isHexColor("#abc")).toBe(true);
});
test('checks for hex code: #abcdefghi', () => {
  expect(isHexColor("#abcdefghi")).toBe(false);
});
test('checks for hex code: xyz', () => {
  expect(isHexColor("xyz")).toBe(false);
});