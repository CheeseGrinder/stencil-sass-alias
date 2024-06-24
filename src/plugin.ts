import type { Importer } from '@stencil/sass/dist/declarations';
import { existsSync, stat } from 'fs';
import { join, normalize } from 'path';
import type { SassAliasConfig } from './plugin.type';

export function sassAlias(config: SassAliasConfig = {} as SassAliasConfig): Importer {
  config.path ??= join(process.cwd(), 'src');
  config.alias ??= '@scss';

  const { alias, path } = config;

  return (url, _, done) => {
    const file = normalize(url.replace(alias, path));

    stat(file, (_, stats) => {
      const dirIndex = join(file, 'index');
      const filePath = stats?.isDirectory() && existsSync(dirIndex) ? dirIndex : file;

      done({
        file: filePath,
      });
    });
  };
}
