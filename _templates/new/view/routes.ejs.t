---
to: "src/app/<%= h.inflection.dasherize(folder).toLowerCase() %>/index.js"
eof_last: false
---

const <%= h.inflection.dasherize(name) %> = () => import(/* webpackChunkName: "pages-<%= h.inflection.dasherize(name) %>" */ './<%= h.inflection.dasherize(name) %>.vue')

export const routes = [
  {
    path: '/<%= h.inflection.dasherize(folder) %>',
    component: <%= h.inflection.dasherize(name) %>,
    meta: { auth: false }
  }
]
