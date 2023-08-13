interface LocationOptions {
  relativePath: Array<string>,
}

export default class Location {
  private readonly url: string = 'https://www.pixiv.net';

  construct(options: LocationOptions): string {
    return `${this.url}/${options.relativePath.join('/')}`;
  }
}