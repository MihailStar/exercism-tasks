const Dice = {
  MINIMUM_VALUE: 1,
  MAXIMIM_VALUE: 6,
  NUMBER_OF: 4,
} /* as const */;

const Limit = {
  LOWER: Dice.MINIMUM_VALUE * (Dice.NUMBER_OF - 1),
  UPPER: Dice.MAXIMIM_VALUE * (Dice.NUMBER_OF - 1),
} /* as const */;

function getRandomInt(min /*: number */, max /*: number */) /*: number */ {
  const randomInt = Math.floor(min + Math.random() * (max + 1 - min));

  return randomInt;
}

function abilityModifier(constitution /*: number */) /*: number */ {
  if (constitution < Limit.LOWER)
    throw new Error(`Ability scores must be at least ${Limit.LOWER}`);
  if (constitution > Limit.UPPER)
    throw new Error(`Ability scores can be at most ${Limit.UPPER}`);

  const modifier = Math.floor((constitution - 10) / 2);

  return modifier;
}

class Character {
  /*
  private props: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  */

  constructor() {
    this.props = {
      strength: Character.rollAbility(),
      dexterity: Character.rollAbility(),
      constitution: Character.rollAbility(),
      intelligence: Character.rollAbility(),
      wisdom: Character.rollAbility(),
      charisma: Character.rollAbility(),
    };
  }

  static rollAbility() /*: number */ {
    const values = Array.from({ length: Dice.NUMBER_OF }, () =>
      getRandomInt(Dice.MINIMUM_VALUE, Dice.MAXIMIM_VALUE)
    );
    const minimumValue = Math.min(...values);
    const minimumValueIndex = values.indexOf(minimumValue);

    values[minimumValueIndex] = 0;

    return values.reduce((sum, value) => sum + value, 0);
  }

  get strength() /*: number */ {
    return this.props.strength;
  }

  get dexterity() /*: number */ {
    return this.props.dexterity;
  }

  get constitution() /*: number */ {
    return this.props.constitution;
  }

  get intelligence() /*: number */ {
    return this.props.intelligence;
  }

  get wisdom() /*: number */ {
    return this.props.wisdom;
  }

  get charisma() /*: number */ {
    return this.props.charisma;
  }

  get hitpoints() /*: number */ {
    const INITIAL_HITPOINTS = 10;

    const { constitution } = this.props;
    const constitutionModifier = abilityModifier(constitution);
    const hitpoints = INITIAL_HITPOINTS + constitutionModifier;

    return hitpoints;
  }
}

export { abilityModifier, Character };
