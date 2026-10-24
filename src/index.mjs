import assert from 'node:assert/strict';
import { InMemoryQueueStore } from '@x12i/dispatchix-core';

const queue = new InMemoryQueueStore();
const input = { queue: 'demo', dedupeKey: 'task-1', payload: { action: 'review', recordId: 'record-1' } };
const first = await queue.enqueue(input);
assert.equal((await queue.enqueue(input)).duplicate, true);
const [message] = await queue.receive('demo');
assert.equal(message.id, first.id);
assert.equal(message.payload.action, 'review');
assert.equal(await queue.complete(message.id, message.lockToken), true);
assert.equal((await queue.receive('demo')).length, 0);
console.log('One deduplicated task was received and completed.');
