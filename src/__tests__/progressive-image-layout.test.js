import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const appVuePath = resolve(process.cwd(), 'src/App.vue')

describe('Progressive image layout stability', () => {
  it('uses in-flow overlay layout instead of absolutely positioning final images', () => {
    const appVueSource = readFileSync(appVuePath, 'utf8')

    expect(appVueSource).toMatch(/\.progressive-image-wrap\s*\{[\s\S]*display:\s*grid;/)
    expect(appVueSource).toMatch(/\.progressive-image-wrap > \.media-image\s*\{[\s\S]*grid-area:\s*1\s*\/\s*1;/)
    expect(appVueSource).not.toMatch(/\.progressive-image-final\s*\{[^}]*position:\s*absolute;/)
  })
})
