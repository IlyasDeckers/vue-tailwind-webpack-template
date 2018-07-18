---
to: 'src/app/index.js'
inject: true
before: ']'
skip_if: '...<%= h.inflection.dasherize(folder) %>,'
eof_last: false
---
  ...<%= h.inflection.dasherize(folder) %>,
