import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const appVuePath = resolve(process.cwd(), 'src/App.vue')

describe('Progressive image fade transition', () => {
  it('fades placeholders out instead of hard-hiding them on load', () => {
    const appVueSource = readFileSync(appVuePath, 'utf8')

    expect(appVueSource).toMatch(/\.progressive-image-placeholder\s*\{[\s\S]*transition:\s*opacity 0\.24s ease;/)
    expect(appVueSource).toMatch(
      /\.progressive-image-wrap\.is-loaded \.progressive-image-placeholder\s*\{[^}]*opacity:\s*0;[^}]*visibility:\s*hidden;/,
    )
    expect(appVueSource).not.toMatch(
      /\.progressive-image-wrap\.is-loaded \.progressive-image-placeholder\s*\{[^}]*display:\s*none;/,
    )
  })
})
