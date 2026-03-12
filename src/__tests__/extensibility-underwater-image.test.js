import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const appVuePath = resolve(process.cwd(), 'src/App.vue')

describe('Extensibility images style consistency', () => {
  it('does not apply a dedicated narrow class to Underwater drone image', () => {
    const appVueSource = readFileSync(appVuePath, 'utf8')

    expect(appVueSource).not.toContain('underwater-narrow-image')
  })
})
