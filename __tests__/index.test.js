import functions from '../index';

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('multiplyFunction', ()=>{
    it('a * b', ()=>{
        expect(functions.multiply(5, 7)).toBe(35);
    })
});

describe('dogYearsFunction', ()=>{
    it('returns humanYears * 7', ()=>{
        expect(functions.dogYears(5)).toBe(35);
    })
});

describe('hungryDogFunction', ()=>{
    it('returns weight * x based on age and weight', ()=>{
        expect(functions.hungryDog(15, 1)).toBe(0.44999999999999996);
    })
});
describe('gameFunction', ()=>{
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'scissors')).toBe('you win!');
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'paper')).toBe('you lose!');
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('rock', 'rock')).toBe(`it's a tie`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('paper', 'rock')).toBe(`you win!`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('paper', 'scissors')).toBe(`you lose!`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('paper', 'paper')).toBe(`it's a tie`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('scissors', 'paper')).toBe(`you win!`);
    })
    it('return win, lose or tie', ()=>{
        expect(functions.game('scissors', 'rock')).toBe(`you lose!`);
    })
});
describe('milesFunction', ()=>{
    it('return km * 0.621371', ()=>{
        expect(functions.miles(10)).toBe(6.21371);
    })
});

describe('feetFunction', ()=>{
    it('return cm / 30.48', ()=>{
        expect(functions.feet(160)).toBe(5.2493438320209975);
    })
});
describe('annoyingSongFunction', ()=>{
    it('a string that counts down based on the number imputted', ()=>{
        expect(functions.annoyingSong(5)).toBe(`${5} bottles of soda on the wall, ${5} bottles of soda, take one down pass it around ${5 - 1} bottles of soda on the wall`);
    })
});
describe('gradeFunction', ()=>{
    it('expect A', ()=>{
        expect(functions.grade(90)).toBe('you got an A');
    })
    it('expect B', ()=>{
        expect(functions.grade(80)).toBe('you got a B');
    })
    it('expect C', ()=>{
        expect(functions.grade(70)).toBe('you got a C');
    })
    it('expect D', ()=>{
        expect(functions.grade(60)).toBe('you got a D');
    })
    it('expect F', ()=>{
        expect(functions.grade(59)).toBe('you got an F');
    })
});
describe('vowelCounter', ()=>{
    it('Blank string expect 0 vowels', ()=>{
        expect(functions.vowelCounter('')).toBe(0);
    })
    it('aaa expect 0 vowels', ()=>{
        expect(functions.vowelCounter('ttt')).toBe(0);
    })
    it('bob expect 1 vowel', ()=>{
        expect(functions.vowelCounter('bob')).toBe(1);
    })
    it('bob expect 2 vowels', ()=>{
        expect(functions.vowelCounter('door')).toBe(2);
    })
    it('bajehuiavolahebunimo expect 11 vowels', ()=>{
        expect(functions.vowelCounter('bajehuiavolahebunimo')).toBe(11);
    })
});


