import Component, { tracked } from '@glimmer/component';

export default class RoomDetails extends Component {
  @tracked('args')
  get area() {
    let { width, length } = this.args.room;
    return width * length;
  }

  @tracked('args')
  get volume() {
    let { width, length, height } = this.args.room;
    return width * length * height;
  }
}
