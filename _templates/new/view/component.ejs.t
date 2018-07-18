---
to: "src/app/<%= h.inflection.dasherize(folder).toLowerCase() %>/<%= h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.inflection.dasherize(name) %>.vue"
eof_last: false
---
<%
if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div>

  </div>
</template>
<%
}

if (blocks.indexOf('script') !== -1) {
%><script>
export default {
}
</script>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" module>
</style><%
}
%>
