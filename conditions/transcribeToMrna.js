// Transcribe To mRNA
// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA has U in place of T and all of the other bases remains the same.

// Examples
// dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"

// dnaToRna("CGATATA") ➞ "GCUAUAU"

// dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
// Notes
// Transcription is the process of making complementary strand.
// A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.

let dna = 'CGATATA';

function dnaToRna(dna) {
  let rna = '';

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') rna += 'U';
    else if (dna[i] === 'T') rna += 'A';
    else if (dna[i] === 'G') rna += 'C';
    else rna += 'G';
  }
  return rna;
}

console.log(dnaToRna(dna));
