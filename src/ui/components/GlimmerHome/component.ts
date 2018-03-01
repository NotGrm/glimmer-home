import Component, { tracked } from '@glimmer/component';

export default class GlimmerHome extends Component {
  @tracked state = {
    current: 0,
    rooms: [
      { name: 'Chambre Adam', length: 422, width: 345, height: 250 },
      { name: 'Chambre Parents', length: 432, width: 345, height: 250 },
      { name: 'Bureau', length: 370, width: 370, height: 250 },
      { name: 'Salle / Salon', length: 735, width: 410, height: 250 },
      { name: 'Cuisine', length: 565, width: 440, height: 250 },
    ]
  }

  @tracked('state')
  get hasRoomSelected() {
    return this.state.current != null;
  }

  @tracked('state')
  get selectedRoom() {
    return this.state.rooms[this.state.current];
  }

  selectRoom(index) {
    this.state = {
      ...this.state,
      current: index
    }
  }
}
