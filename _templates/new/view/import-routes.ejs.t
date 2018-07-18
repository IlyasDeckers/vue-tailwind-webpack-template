---
to: 'src/app/index.js'
inject: true
before: "import"
eof_last: false
skip_if: import { routes as <%= h.inflection.dasherize(folder) %> } from './<%= h.inflection.dasherize(folder) %>'
---
import { routes as <%= h.inflection.dasherize(folder) %> } from './<%= h.inflection.dasherize(folder) %>'
