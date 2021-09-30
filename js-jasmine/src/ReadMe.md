Instructions:
1.Git clone this repository onto your local computer.
2.To run the tests, use npx jasmine command.


Domain Model:

| Object   | Message         | Property              | Context | Output |
|----------|-----------------|-----------------------|---------|--------|
| Item     |                 | name, sellin, quality |         | object |
| Shop     | updateQuality() | this.items            |         | object |
| Ordinary | update()        | this.item             |         | object |
| Conjured | update()        | this.item             |         | object |
| Sulfuras | update()        | this.item             |         | object |
| Passes   | update()        | this.item             |         | object |
| AgedBrie | update()        | this.item             |         | object |
