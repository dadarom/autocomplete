define(function(require) {

    var Filter = require('../src/filter');

    describe('Filter', function() {

        describe('startsWith', function() {
            var data;

            beforeEach(function() {
                data = [
                    'about',
                    'abuse',
                    'but',
                    'buffer'
                ];
            });

            afterEach(function() {
                data = null;
            });

            it('start width a', function() {
                var result = Filter.startsWith(data, 'a');
                expect(result).to.eql([
                    {matchKey: 'about', highlightIndex: [[0, 1]]},
                    {matchKey: 'abuse', highlightIndex: [[0, 1]]}
                ]);
            });

            it('start width none', function() {
                var result = Filter.startsWith(data, '');
                expect(result).to.eql([
                    {matchKey: 'about'},
                    {matchKey: 'abuse'},
                    {matchKey: 'but'},
                    {matchKey: 'buffer'}
                ]);
            });

            it('start width more', function() {
                var result = Filter.startsWith(data, 'abc');
                expect(result).to.eql([]);
            });

        });
    });

});
