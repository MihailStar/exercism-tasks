const StopCodon = {
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
} /* as const */;

const CodonToProtein = {
  AUG: 'Methionine',
  UAC: 'Tyrosine',
  UAU: 'Tyrosine',
  UCA: 'Serine',
  UCC: 'Serine',
  UCG: 'Serine',
  UCU: 'Serine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UGU: 'Cysteine',
  UUA: 'Leucine',
  UUC: 'Phenylalanine',
  UUG: 'Leucine',
  UUU: 'Phenylalanine',
} /* as const */;

/*
type CodonType = keyof typeof CodonToProtein;
type ProteinType = typeof CodonToProtein[CodonType];
*/

function translate(RNA /*: string */) /*: Array<ProteinType> */ {
  const proteins /*: Array<ProteinType> */ = [];

  if (RNA === undefined || RNA === '') return proteins;
  if (
    typeof RNA !== 'string' ||
    !/^[ACGU]+$/g.test(RNA) ||
    RNA.length % 3 !== 0
  )
    throw new Error('Invalid codon');

  const possibleСodons /*: Array<ProteinType | string> */ =
    RNA.match(/.{3}/g) || [];

  for (const possibleСodon of possibleСodons) {
    if (possibleСodon in StopCodon) break;

    const possibleProtein /*: ProteinType | undefined */ =
      CodonToProtein[possibleСodon /* as CodonType */];

    if (possibleProtein !== undefined) {
      proteins.push(possibleProtein);
    }
  }

  return proteins;
}

export { translate };
