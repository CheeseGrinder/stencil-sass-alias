export interface SassAliasConfig {
  /**
   * Path to sass dir
   *
   * @default 'src'
   */
  path?: string;

  /**
   * Alias that get replaced by the path
   *
   * @default '@scss'
   */
  alias?: string;
}
