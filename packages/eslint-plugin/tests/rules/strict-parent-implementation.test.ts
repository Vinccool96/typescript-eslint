import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../src/rules/strict-parent-implementation';
import { getFixturesRootDir } from '../RuleTester';

const rootPath = getFixturesRootDir();

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: rootPath,
    },
  },
});

ruleTester.run('strict-parent-implementation', rule, {
  valid: [
    `
interface WideInterface {
  method(param: string | null): void;
  property: string | null;
}

class NarrowClass implements WideInterface {
  public method(param: string): void {}
  public property = '';
}
  `,
  ],
  invalid: [],
});
