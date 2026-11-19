import { describe, expect, it } from 'vitest';
import { greeting } from './message.ts';

describe('message', () => {
	it('greets from dusmamud', () => {
		expect(greeting).toContain('dusmamud');
		expect(greeting.length).toBeGreaterThan(0);
	});
});
