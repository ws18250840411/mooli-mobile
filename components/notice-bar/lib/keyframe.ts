
export class Keyframes {
  public head: HTMLHeadElement;
  public name: string;
  public aggregate: {};
  constructor(name: string) {
    this.name = name;
    this.head = document.getElementsByTagName('head')[0];
    this.aggregate = {};
  }
  add(content: string) {
    if (!this.name) return;
    // @ts-ignore
    if (!this.aggregate[this.name]) {
      const style = document.createElement('style');
      style.id = this.name;
      style.innerHTML = `@keyframes ${this.name} {${content}}`;
      this.head.appendChild(style);
      // @ts-ignore
      this.aggregate[this.name] = style;
    } else {
      // @ts-ignore
      this.aggregate[this.name].innerHTML = `@keyframes ${this.name} {${content}}`;
    }
  };
  remove(){
    const keyframe = document.getElementById(this.name);
    !!keyframe && document.getElementsByTagName('head')[0].removeChild(keyframe!);
  };
}
