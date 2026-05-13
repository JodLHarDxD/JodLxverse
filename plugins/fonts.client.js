// One-time Path A font fallback warnings (CLAUDE.md font strategy)
export default defineNuxtPlugin(() => {
  console.warn('[fonts] Using Path A fallback for ABCWhyte/ABCWhytePlus/ABCWhyteInktrap → Inter Variable. Production requires licensed ABCWhyte fonts.')
  console.warn('[fonts] Using Path A fallback for Hexaframe → Big Shoulders Display Bold. Production requires Hexaframe or commissioned equivalent.')
  console.warn('[fonts] Using Path A fallback for Fraktion → Space Grotesk Variable. Production requires PP Fraktion Sans license.')
})
