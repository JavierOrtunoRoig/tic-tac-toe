import { describe, it, expect } from 'vitest';
import { checkWinner } from '../helpers';
import { Turn } from '../constants';

describe('helpers', () => {
  describe("checkWinner", () => {
    it("should return null for an empty board", () => {
      const board: Turn[] = Array(9).fill(null);
      expect(checkWinner(board)).toBeNull();
    });
  
    it("should return 'X' for a winning board with X", () => {
      const board: Turn[] = ["✖", "◯", "◯", "✖", "✖", null, null, null, "✖"];
      expect(checkWinner(board)).toBe("✖");
    });
  
    it("should return 'O' for a winning board with O", () => {
      const board: Turn[] = ["◯", "✖", "✖", "◯", "◯", null, null, null, "◯"];
      expect(checkWinner(board)).toBe("◯");
    });
  
    it("should return null for a non-winning board", () => {
      const board: Turn[] = ["✖", "◯", "✖", "✖", "◯", "◯", "◯", "✖", "✖"];
      expect(checkWinner(board)).toBeNull();
    });
  });
});