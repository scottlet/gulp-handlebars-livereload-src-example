/*global describe, xit */

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('Routes', () => {
  describe('GET Index', () => {
    xit('should respond', () => {
      const res = {};
      const spy = sinon.spy();

      res.render = (path, opts) => {
        spy();
        expect(opts.testableProperty).to.equal(true);
        expect(opts.title).to.equal('The Test Page');
        expect(opts.pageTitle).to.equal('Welcome!');
        expect(opts.helpers.capitalise('Enjoy!')).to.equal('ENJOY!');
        expect(spy.calledOnce).to.equal(true);
      };
      //index(req, res);
    });
  });
});
