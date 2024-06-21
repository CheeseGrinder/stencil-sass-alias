import type { Importer } from '@stencil/sass/dist/declarations';
import { join, normalize } from 'node:path';
import type { SassAliasConfig } from './plugin.type';

export function sassAlias(config: SassAliasConfig = {} as SassAliasConfig): Importer {
  config.path ??= join(process.cwd(), 'src');
  config.alias ??= '@scss';

  const { alias, path } = config;

  return url => {
    const file = normalize(url.replace(alias, path));

    return {
      file: file,
    };
  };
}
