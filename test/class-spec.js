const chai = require('chai');
const expect = chai.expect;

const { Word } = require('../class');

describe('Word', function () {
	const word = new Word('apple'); // regular case
	const word2 = new Word('e'); // edge case one vowel
	const word3 = new Word('lxt'); // edge case no vowels
	const word4 = new Word('cat'); // start with consonant

	describe('Word constructor function', function () {
		it('should have a "word" property', function () {
			expect(word).to.have.a.property('word');
		});

		it('should set the "word" property when a new word is created', function () {
			expect(word.word).to.eql('apple');
		});
	});

	describe('removeVowels function', function () {
		it('should return the word with all vowels removed', function () {
			expect(word.removeVowels()).to.eql('ppl');
			expect(word2.removeVowels()).to.eql('');
			expect(word3.removeVowels()).to.eql('lxt');
		});
	});

	describe('removeConsonants function', function () {
		it('should return the word with the consonants removed', function () {
			expect(word.removeConsonants()).to.eql('ae');
			expect(word2.removeConsonants()).to.eql('e');
			expect(word3.removeConsonants()).to.eql('');
		});
	});

	describe('pigLatin function', function () {
		it('should return the word converted to pig latin', function () {
			expect(word.pigLatin()).to.eql('appleyay');
			expect(word2.pigLatin()).to.eql('eyay');
			expect(word4.pigLatin()).to.eql('atcay');
		});
	});
});
