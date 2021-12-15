import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoardComponent {
  hexList = this.shuffleHexes();
  numberList = this.shuffleNumbers();
  portList = this.shufflePorts();

  shuffleHexes() {
    const hexes = {wood: 4, sheep: 4, brick: 3, ore: 3, wheat: 4, desert: 1};
    const randomHexes = [];
    const resourceTypes = ['wood', 'sheep', 'brick', 'ore', 'wheat', 'desert'];
    let hexNum = 19;
    while (hexNum !== 0) {
      const hexIndex = Math.round(Math.random() * (resourceTypes.length - 1));
      const currentHex = resourceTypes[hexIndex];
      randomHexes.push(currentHex + hexes[currentHex]);
      hexes[currentHex] -= 1;
      if (hexes[currentHex] === 0) {
        resourceTypes.splice(hexIndex, 1);
      }
      hexNum -= 1;
    }
    return randomHexes;
  }

  shufflePorts(standardizePorts = true) {
    if (standardizePorts) {
      return ['brick', 'misc', 'misc', 'sheep', 'misc', 'ore', 'wheat', 'misc', 'wood'];
    }
    const ports = {misc: 4, wood: 1, brick: 1, wheat: 1, ore: 1, sheep: 1};
    const randomPorts = [];
    const portTypes = ['wood', 'sheep', 'brick', 'ore', 'wheat', 'misc'];
    while (Object.values(ports).reduce((accumulator, val) => accumulator + val, 0) !== 0) {
      const currentPort = portTypes[Math.random() * (portTypes.length - 1)];
      randomPorts.push(ports[currentPort]);
      ports[currentPort] -= 1;
      if (ports[currentPort] === 0) {
        delete portTypes[currentPort];
      }
    }
    return randomPorts;
  }

  shuffleNumbers() {
    // List of number in standard Catan game
    const numberList = ['2', '3', '3', '4', '4', '5', '5', '6', '6', '8', '8', '9', '9', '10', '10', '11', '11', '12'];

    // Shuffle algorithm
    for (let i = numberList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }
    numberList.splice(this.hexList.indexOf('desert1'), 0, 'desert');
    return numberList;
  }

  getProbability() {
    let probability = 'probability';
    probability += this.numberList.slice(0, 1).toString();
    this.numberList.splice(0, 1);
    return probability;
  }

  probabilityRequired() {
    if (this.numberList[0].toString() === 'desert') {
      return 'blank';
    } else {
      return 'circle';
    }
  }
}
