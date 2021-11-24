class Person {
  constructor() {
    this.messages = [];
  }

  moveTo(distance) {}

  shout(message) {}

  hear(message) {
    this.messages.push(message);
  }

  messagesHeard() {
    return this.messages;
  }
}

module.exports = Person;
