interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

/* Return sum of major credits */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return subject1.credits + subject2.credits;
}

/* Return sum of minor credits */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return subject1.credits + subject2.credits;
}
