# complex-brackets

Given inputs:
- `()(){}`
- `[()]`
- `(()`
- `)()`
- `)(`

Try to work out if the brackets are balanced.

## Running this
- You need nodejs preinstalled (pretty much any version - but tested on node v16)
- `node main`

## Configuration
See main.js line 37 to alter open and close bracket types.

## Issues
1. The complexity of the nested looping of chars and combinations makes this less performant than the simple solution; there will come a point at which this design is no longer appropriate.

2. Due to the *still* simplistic nature of this code we can only accept a single character bracket, in order to work around this we could instead consider regex'ing the input string: string manipulation could be cheaper than looping all of the input chars, especially if the inputString is long itself. Could also consider breaking the string into chunks and parsing them asyncronously into a structure before evaluating against the criteria/rules.