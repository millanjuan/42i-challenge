class ChallengeService {
  twoNumberSum(numbers: number[], targetSum: number) {
    try {
      const setNumbers = new Set();

      for (const number of numbers) {
        const complement = targetSum - number;
        if (setNumbers.has(complement)) return [complement, number];

        setNumbers.add(number);
      }
      return [];
    } catch (error) {}
  }
}

export default new ChallengeService();
