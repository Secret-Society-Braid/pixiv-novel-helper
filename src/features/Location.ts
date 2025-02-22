interface LocationOptions {
  relativePath?: Array<string>,
}

export default class Location {
  private readonly url: string = 'https://www.pixiv.net';

  async construct(options: LocationOptions): Promise<string> {
    return `${this.url}/${await this.relativePath(options.relativePath)}`;
  }

  private async relativePath(relativePath: Array<string> | undefined): Promise<string> {
    if(!relativePath) {return '';}
    return relativePath.join('/');
  }
}