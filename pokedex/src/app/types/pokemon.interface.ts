export interface Pokemon {
  id: number;
  name: string[];
  weight: number;
  abilities: Ability[];
  types: Type[];
}

export interface Ability {
  ability: AbilityInformation;
}

export interface AbilityInformation {
  name: string;
}

export interface Type {
  type: TypeInformation;
}

export interface TypeInformation {
  name: string;
}
