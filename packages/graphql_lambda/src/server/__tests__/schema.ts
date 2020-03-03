import { books } from '../schema';

test("the first book's title is Harry Potter", () => {
  const { title, author } = books[0];
  expect(title).toBe('Harry Potter and the Chamber of Secrets');
});
