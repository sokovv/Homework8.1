class Team {
  constructor() {
    this.members = new Set();

  }
  add(Character) {
    if (this.members.has(Character)) {
      throw new Error('Персонаж имеется в команде');
    }
    this.members.add(Character)

  }
  addAll(...Character) {
    for (const item of Character) {
      this.members.add(item);
    }
  }
  toArray() {
    return Array.from(this.members);
  }
}

export default Team