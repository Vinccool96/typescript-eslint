export interface AssertionOptions {
  /**
   * If `true`, each `errors` block must contain location properties `line`, `column`, `endLine`, and `endColumn`. Properties `endLine` and `endColumn` may be omitted if the actual error does not contain them.
   */
  readonly requireLocation?: boolean;
}
