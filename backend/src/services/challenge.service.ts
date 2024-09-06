class ChallengeService {
  twoNumberSum(numbers: number[], targetSum: number): number[] {
    const setNumbers = new Set();
    for (const number of numbers) {
      const complement = targetSum - number;
      if (setNumbers.has(complement)) return [complement, number];
      setNumbers.add(number);
    }
    return [];
  }

  nonConstructibleChange(coins: number[]): number {
    coins.sort((a, b) => a - b);
    let currentChange = 0;
    for (const coin of coins) {
      if (coin > currentChange + 1) return currentChange + 1;
      currentChange += coin;
    }
    return currentChange + 1;
  }
}

export default new ChallengeService();
