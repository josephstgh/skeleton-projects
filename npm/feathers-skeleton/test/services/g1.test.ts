/// <reference types="mocha"/>
import assert from 'assert';
import app from '../../src/app';

describe('\'g1\' service', () => {
  it('registered the service', () => {
    const service = app.service('g1');

    assert.ok(service, 'Registered the service');
  });
});
