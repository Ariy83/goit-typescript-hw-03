class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random() * 10;
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: object = new Key();
  constructor(key: object) {
    this.key = key;
  }
  getKey(): object {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  key: object = new Key();
  tenants: object[] = [];
  person: object = new Person(key);

  comeIn(person: object) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract OpenDoor(key: object): object;
}

class MyHouse extends House {
  constructor(myKey: object) {
    super();
  }
  openDoor(myKey: object) {
    if (myKey === this.key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
