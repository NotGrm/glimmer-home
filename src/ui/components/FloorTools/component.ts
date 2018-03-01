import Component, { tracked } from '@glimmer/component';
import ceil from 'lodash-es/ceil';

export default class FloorTools extends Component {
  @tracked state = {
    batten: {
      length: 138,
      width: 19
    }
  }

  @tracked('state', 'args')
  get battenNumberByRow() {
    if(this.state.batten.length == 0) {
      return 0;
    }

    let result = this.args.roomLength / this.state.batten.length;

    return this.ceilToSuperiorHalf(result);
  }

  @tracked('state', 'args')
  get battenNumberByColumn() {
    if(this.state.batten.width == 0) {
      return 0;
    }

    let result = this.args.roomWidth / this.state.batten.width;

    return this.ceilToSuperiorHalf(result);
  }

  @tracked('battenNumberByRow', 'battenNumberByColumn')
  get totalBattenNumberNeeded() {
    return ceil(this.battenNumberByRow * this.battenNumberByColumn);
  }

  ceilToSuperiorHalf(number: number) {
    let ceiled = ceil(number, 1);
    let entirePart = Math.trunc(ceiled);
    let decimalPart = ceiled - entirePart;

    if(decimalPart == 0) {
      return entirePart;
    } else if(decimalPart > 0 && decimalPart <= 0.5) {
      return entirePart + 0.5;
    } else {
      return entirePart + 1;
    }
  }
}
