<template>
  <Teleport to="body">
    <div class="the-console" v-show="isOpen">

      <div class="header">
        <span class="encrypted type-caption3">Encrypted Protocol cl67-56203000</span>
        <div class="mainnet-row">
          <span class="mainnet-label type-caption3">JodLx Mainnet</span>
        </div>
      </div>

      <div class="terminal" ref="terminalEl">
        <p v-for="(line, i) in lines" :key="i" class="type-caption3 terminal-line">{{ line }}</p>
      </div>

      <div class="input-row">
        <span class="prompt type-caption3">&gt;</span>
        <input
          type="text"
          class="cmd-input type-caption3"
          v-model="cmd"
          placeholder="type your command"
          @keydown.enter="submit"
        />
      </div>

    </div>
  </Teleport>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const cmd = ref('')
const terminalEl = ref(null)
const lines = ref([
  '> JODLXVERSE TERMINAL v1.0',
  '> ENCRYPTED PROTOCOL ACTIVE',
  '> AWAITING COMMAND...',
])

async function submit() {
  const input = cmd.value.trim()
  if (!input) return
  lines.value.push(`> ${input.toUpperCase()}`)
  lines.value.push('> COMMAND RECEIVED. PROCESSING...')
  cmd.value = ''
  await nextTick()
  if (terminalEl.value) terminalEl.value.scrollTop = terminalEl.value.scrollHeight
}

defineExpose({ isOpen })
</script>

<style scoped>
.the-console {
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--menu-radius);
  bottom: 8rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  left: calc(var(--menu-left) + 1.6rem);
  position: fixed;
  right: 8rem;
  top: calc(var(--menu-top) + 1.6rem);
  z-index: var(--z-console);
}

.header {
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 2rem;
}

.terminal {
  flex: 1;
  overflow-y: auto;
  padding: 1.6rem 2rem;
}

.terminal-line {
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
}

.input-row {
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 0.8rem;
  padding: 1.2rem 2rem;
}

.prompt { opacity: 0.5; }

.cmd-input {
  background: transparent;
  border: none;
  color: #fff;
  flex: 1;
  outline: none;
}
.cmd-input::placeholder { opacity: 0.3; }
</style>
