import Team from '../Team';

const Zombie = {
    attack: 50,
    healht: 100
}

const Deamon = {
    attack: 70,
    healht: 80
}
const Undead = {
    attack: 30,
    healht: 50
}


test('Создание класса Team со свойством members, которое принадлежит к классу Set', () => {
    const dark = new Team()
    expect(dark.members).toBeDefined();
    expect(dark.members instanceof Set).toBeTruthy();
});

test('Метод add', () => {
    const received = new Team()
    received.add(Zombie)

    expect(received.members).toEqual(new Set([Zombie]));

});

test('Метод add(Ошибка добавления)', () => {
    const received = () => {
        const dark = new Team()
        dark.add(Zombie)
        return dark.add(Zombie)
    }
    expect(received).toThrow();
});

test('Метод addAll', () => {
    const received = new Team()
    received.addAll(Zombie, Deamon, Undead)

    expect(received.members).toEqual(new Set([Zombie, Deamon, Undead]));

});

test('Метод toArray', () => {
    const received = new Team()
    received.addAll(Zombie, Deamon, Undead)
    expect(Array.from(received.members)).toEqual(received.toArray());
});
