interface LocationOptions {
  relativePath?: Array<string>,
}

export default class Location {
  private readonly url: string = 'https://www.pixiv.net';

  construct(options: LocationOptions): string {
    return `${this.url}/${this.relativePath(options.relativePath)}`;
  }

  private relativePath(relativePath: Array<string> | undefined): string {
    if(!relativePath) {return '';}
    return relativePath.join('/');
  }
}