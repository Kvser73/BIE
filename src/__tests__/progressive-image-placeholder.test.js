import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const appVuePath = resolve(process.cwd(), 'src/App.vue')

describe('Progressive image placeholder behavior', () => {
  it('does not force final images visible before they finish loading', () => {
    const appVueSource = readFileSync(appVuePath, 'utf8')

    expect(appVueSource).not.toContain('progressive-image-final-force-visible')
  })
})
