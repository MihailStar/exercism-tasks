const DNA_NUCLEOTIDE_TO_RNA_NUCLEOTIDE = {
  A: 'U',
  C: 'G',
  G: 'C',
  T: 'A',
} /* as const */;

/* type DNANucleotide = keyof typeof DNA_NUCLEOTIDE_TO_RNA_NUCLEOTIDE; */

function toRna(dna /*: string */) /*: string */ {
  return Array.from(dna)
    .map(
      (nucleotid) =>
        DNA_NUCLEOTIDE_TO_RNA_NUCLEOTIDE[nucleotid /* as DNANucleotide */]
    )
    .join('');
}

export { toRna };
