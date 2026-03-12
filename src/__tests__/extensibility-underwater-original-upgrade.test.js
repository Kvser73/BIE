import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const appVuePath = resolve(process.cwd(), 'src/App.vue')
const siteContentPath = resolve(process.cwd(), 'src/config/siteContent.js')

describe('Extensibility content and original-image upgrade behavior', () => {
  it('capitalizes the Metallographic analysis title', () => {
    const siteContentSource = readFileSync(siteContentPath, 'utf8')

    expect(siteContentSource).toContain("title: 'Metallographic analysis'")
    expect(siteContentSource).not.toContain("title: 'metallographic analysis'")
  })

  it('contains a dedicated Underwater drone original-image auto-upgrade flow', () => {
    const appVueSource = readFileSync(appVuePath, 'utf8')

    expect(appVueSource).toContain("const UNDERWATER_AUTO_ORIGINAL_BLOCK_KEY = 'ext_4'")
    expect(appVueSource).toContain('const underwaterAutoOriginalSrc = ref(\'\')')
    expect(appVueSource).toContain('function maybeUpgradeUnderwaterOriginalImage()')
    expect(appVueSource).toContain("window.addEventListener('load', handleWindowLoadForUnderwaterOriginalUpgrade)")
    expect(appVueSource).toContain(':src="getExtensibilityImageSrc(block)"')
  })
})
