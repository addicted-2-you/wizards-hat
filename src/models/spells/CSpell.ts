interface ISpellParams {
  spellName: string;
  target: string;
  params: (string | number)[];
}

export class CSpell {
  public spellName: string;

  public target: string;

  public params: (string | number)[];

  constructor({ spellName, target, params }: ISpellParams) {
    this.spellName = spellName;
    this.target = target;
    this.params = params;
  }
}
