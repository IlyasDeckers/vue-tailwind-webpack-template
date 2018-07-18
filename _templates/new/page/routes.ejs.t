---
to: "src/app/<%= h.inflection.dasherize(folder).toLowerCase() %>/index.js"
---

const <%= h.inflection.dasherize(name) %> = () => import(/* webpackChunkName: "pages-<%= h.inflection.dasherize(name) %>" */ './<%= h.inflection.dasherize(name) %>.vue')

export const routes = [
  {
    path: '/',
    component: <%= h.inflection.dasherize(name) %>,
    meta: { auth: false }
  }
]

