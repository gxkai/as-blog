/**
 * Function
 */
import type { AppContext, Plugin, Ref } from 'vue'
export type Fn<T = void> = () => T

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null
}

export type MaybeRef<T> = T | Ref<T>
