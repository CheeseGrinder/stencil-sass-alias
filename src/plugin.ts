import type { Importer } from '@stencil/sass/dist/declarations';
import { existsSync, stat } from 'node:fs';
import { join, normalize } from 'node:path';
import type { SassAliasConfig } from './plugin.type';

export function sassAlias(config: SassAliasConfig = {} as SassAliasConfig): Importer {
  config.path ??= join(process.cwd(), 'src');
  config.alias ??= '@scss';

  const { alias, path } = config;

  return (url, _, done) => {
    const file = normalize(url.replace(alias, path));

    stat(file, (_, stats) => {
      const dirIndex = join(file, 'index');
      if (stats.isDirectory() && existsSync(dirIndex)) {
        done({
          file: dirIndex,
        });
      }

      done({
        file
      });
    })
  };
}